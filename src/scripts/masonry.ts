// masonry.ts
interface BreakPoint {
  width: number;
  columns: number;
  gap: number;
}

interface MasonryOptions {
  breakpoints?: BreakPoint[];
  defaultColumns?: number;
  defaultGap?: number;
  itemSelector?: string;
  animationDuration?: number;
}

interface MasonryItem extends HTMLElement {
  loaded?: boolean;
}

export class MasonryGrid {
  private container: HTMLElement;
  private options: Required<Omit<MasonryOptions, 'breakpoints'>> & { breakpoints: BreakPoint[] };
  private resizeObserver: ResizeObserver | null = null;
  private mutationObserver: MutationObserver | null = null;

  constructor(container: HTMLElement, options: MasonryOptions = {}) {
    this.container = container;
    this.options = {
      defaultColumns: options.defaultColumns || 3,
      defaultGap: options.defaultGap || 40,
      itemSelector: options.itemSelector || '.masonry-item',
      animationDuration: options.animationDuration || 300,
      breakpoints: [...(options.breakpoints || [])].sort((a, b) => a.width - b.width)
    };

    this.init();
  }

  private getCurrentBreakpoint(): { columns: number; gap: number } {
    const windowWidth = window.innerWidth;
    
    for (const bp of this.options.breakpoints) {
      if (windowWidth <= bp.width) {
        return {
          columns: bp.columns,
          gap: bp.gap
        };
      }
    }

    return {
      columns: this.options.defaultColumns,
      gap: this.options.defaultGap
    };
  }

  private updateContainerStyles(gap: number): void {
    const negativeMargin = -(gap / 2);
    this.container.style.margin = `${negativeMargin}px`;
    this.container.style.width = `calc(100% + ${gap}px)`;
  }

  private init(): void {
    this.container.style.position = 'relative';
    
    const { gap } = this.getCurrentBreakpoint();
    this.updateContainerStyles(gap);
    
    this.setupResizeObserver();
    this.setupMutationObserver();
    this.layout();
    this.observeImages();

    setTimeout(() => this.layout(), 100);
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        const { gap } = this.getCurrentBreakpoint();
        this.updateContainerStyles(gap);
        this.layout();
        setTimeout(() => this.layout(), 100);
      });
    });
    this.resizeObserver.observe(this.container);
  }

  private setupMutationObserver(): void {
    this.mutationObserver = new MutationObserver((mutations) => {
      const hasNewNodes = mutations.some(mutation => 
        mutation.type === 'childList' && mutation.addedNodes.length > 0
      );
      if (hasNewNodes) {
        this.observeImages();
        this.layout();
      }
    });

    this.mutationObserver.observe(this.container, {
      childList: true,
      subtree: true
    });
  }

  private observeImages(): void {
    const items = Array.from(
      this.container.querySelectorAll<HTMLElement>(this.options.itemSelector)
    );
    
    items.forEach(item => {
      if ((item as MasonryItem).loaded) return;

      const images = item.getElementsByTagName('img');
      Array.from(images).forEach(img => {
        if (img.complete) {
          this.onImageLoad(item as MasonryItem);
        } else {
          img.addEventListener('load', () => this.onImageLoad(item as MasonryItem), { once: true });
          img.addEventListener('error', () => this.onImageLoad(item as MasonryItem), { once: true });
        }
      });

      (item as MasonryItem).loaded = true;
    });
  }

  private onImageLoad(item: MasonryItem): void {
    requestAnimationFrame(() => this.layout());
  }

  public layout(): void {
    const { columns, gap } = this.getCurrentBreakpoint();
    const items = Array.from(
      this.container.querySelectorAll<HTMLElement>(this.options.itemSelector)
    );
    
    if (items.length === 0) return;

    const columnWidth = 100 / columns;
    const columnHeights = new Array(columns).fill(0);
    
    items.forEach(item => {
      item.style.position = 'absolute';
      item.style.width = `calc(${columnWidth}% - ${gap}px)`;
      item.style.margin = `${gap / 2}px`;
      
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      
      item.style.transition = `transform ${this.options.animationDuration}ms ease`;
      item.style.left = `${shortestColumn * columnWidth}%`;
      item.style.top = `${columnHeights[shortestColumn]}px`;
      
      columnHeights[shortestColumn] += item.offsetHeight + gap;
    });

    this.container.style.height = `${Math.max(...columnHeights)}px`;
  }

  public destroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    
    const items = this.container.querySelectorAll<HTMLElement>(this.options.itemSelector);
    items.forEach(item => {
      item.style.position = '';
      item.style.width = '';
      item.style.left = '';
      item.style.top = '';
      item.style.transition = '';
      item.style.margin = '';
    });
    
    this.container.style.position = '';
    this.container.style.margin = '';
    this.container.style.width = '';
    this.container.style.height = '';
  }

  public refresh(): void {
    const { gap } = this.getCurrentBreakpoint();
    this.updateContainerStyles(gap);
    this.layout();
  }
}