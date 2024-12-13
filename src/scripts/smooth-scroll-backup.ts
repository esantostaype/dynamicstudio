// src/scripts/smoothScroll.ts
interface ScrollElement {
  element: HTMLElement;
  scrollSpeed: number;
  originalTransform: string;
}

export class SmoothScroll {
  private currentScroll: number = 0;
  private targetScroll: number = 0;
  private ease: number = 0.1;
  private rafId: number | null = null;
  private scrollElements: ScrollElement[] = [];

  constructor(private options: {
    ease?: number;
    maxScrollBehavior?: 'clamp' | 'wrap';
  } = {}) {
    this.ease = options.ease ?? 0.1;
  }

  public init(): void {
    this.addEventListeners();
    this.initScrollElements();
    this.startAnimationLoop();
  }

  private initScrollElements(): void {
    // Seleccionar elementos con data-scroll-speed
    const elements = document.querySelectorAll('[data-scroll-speed]');
    
    this.scrollElements = Array.from(elements).map(el => {
      const element = el as HTMLElement;
      const scrollSpeed = parseFloat(element.dataset.scrollSpeed || '0');
      
      return {
        element,
        scrollSpeed,
        originalTransform: element.style.transform || ''
      };
    });
  }

  private updateScrollElements(): void {
    this.scrollElements.forEach(item => {
      // Transformar velocidades negativas en un factor de ralentización
      const effectiveSpeed = item.scrollSpeed >= 0 
        ? item.scrollSpeed 
        : Math.abs(item.scrollSpeed) / 2;
      
      // Calcular el desplazamiento basado en la velocidad de scroll
      const movement = this.currentScroll * effectiveSpeed;
      
      // Aplicar transformación
      if (item.scrollSpeed !== 0) {
        // Preservar transformaciones originales si existían
        const originalTransform = item.originalTransform ? `${item.originalTransform} ` : '';
        
        // Si la velocidad es negativa, se mueve más lento
        const transformDirection = item.scrollSpeed >= 0 ? '-' : '';
        
        item.element.style.transform = `${originalTransform}translateY(${transformDirection}${movement}px)`;
      }
    });
  }

  private addEventListeners(): void {
    window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
    this.setupInternalLinks();
  }

  private handleWheel(event: WheelEvent): void {
    event.preventDefault();
    
    this.targetScroll += event.deltaY;
    
    // Manejar límites del scroll
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    
    if (this.options.maxScrollBehavior === 'wrap') {
      this.targetScroll = this.targetScroll % maxScroll;
    } else {
      this.targetScroll = Math.max(0, Math.min(this.targetScroll, maxScroll));
    }
  }

  private setupInternalLinks(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href');
        const targetElement = targetId ? document.querySelector(targetId) : null;
        
        if (targetElement) {
          this.scrollToElement(targetElement);
        }
      });
    });
  }

  public scrollToElement(element: Element, offset: number = 0): void {
    this.targetScroll = element.getBoundingClientRect().top + window.scrollY + offset;
  }

  private startAnimationLoop(): void {
    const update = () => {
      // Interpolar el scroll actual hacia el scroll objetivo
      this.currentScroll += (this.targetScroll - this.currentScroll) * this.ease;
      
      // Aplicar transformación para smooth scroll
      window.scrollTo(0, this.currentScroll);
      
      // Actualizar elementos con scroll diferencial
      this.updateScrollElements();
      
      // Continuar el bucle de animación
      this.rafId = requestAnimationFrame(update);
    };

    update();
  }

  // Método para actualizar elementos de scroll dinámicamente
  public refreshScrollElements(): void {
    this.initScrollElements();
  }
}

// Función de inicialización para Astro
export function initSmoothScroll() {
  const smoothScroll = new SmoothScroll({
    ease: 0.1,
    maxScrollBehavior: 'clamp'
  });

  smoothScroll.init();

  return smoothScroll;
}