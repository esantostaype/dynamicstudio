// src/scripts/SmoothScroll.ts
export class SmoothScroll {
  private container: HTMLElement
  private scrollingElement: HTMLElement
  private smoothData: {
    current: number
    target: number
    ease: number
    lastScroll: number
    maxScroll: number
  }
  private rafId: number | null
  private resizeObserver: ResizeObserver

  constructor(containerSelector: string = '[data-scroll-container]', ease: number = 0.1) {
    this.container = document.querySelector(containerSelector) as HTMLElement
    this.scrollingElement = this.container.querySelector('[data-scroll-section]') as HTMLElement
    
    this.smoothData = {
      current: 0,
      target: 0,
      ease,
      lastScroll: 0,
      maxScroll: 0
    }
    
    this.rafId = null
    this.resizeObserver = new ResizeObserver(() => this.updateDimensions())
  }

  init() {
    // Set initial styles
    document.body.style.overflow = 'hidden'
    this.container.style.position = 'fixed'
    this.container.style.width = '100%'
    this.container.style.height = '100%'
    this.container.style.overflow = 'hidden'
    
    this.scrollingElement.style.transform = 'translateY(0)'
    this.scrollingElement.style.willChange = 'transform'

    // Initialize dimensions and events
    this.updateDimensions()
    this.addEvents()
    this.render()
  }

  private updateDimensions() {
    const containerHeight = this.container.clientHeight
    const contentHeight = this.scrollingElement.scrollHeight
    this.smoothData.maxScroll = -(contentHeight - containerHeight)
  }

  private addEvents() {
    // Watch for resize
    this.resizeObserver.observe(this.scrollingElement)
    
    // Handle wheel event
    window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false })
    
    // Handle touch events for mobile
    window.addEventListener('touchstart', this.handleTouchStart.bind(this))
    window.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false })
    window.addEventListener('touchend', this.handleTouchEnd.bind(this))
  }

  private handleWheel(e: WheelEvent) {
    e.preventDefault()
    this.smoothData.target += e.deltaY * -1
    this.clampTarget()
  }

  private touchY: number = 0
  private lastTouchY: number = 0

  private handleTouchStart(e: TouchEvent) {
    this.touchY = e.touches[0].clientY
    this.lastTouchY = this.touchY
  }

  private handleTouchMove(e: TouchEvent) {
    e.preventDefault()
    this.touchY = e.touches[0].clientY
    const delta = this.touchY - this.lastTouchY
    this.smoothData.target += delta * 2
    this.lastTouchY = this.touchY
    this.clampTarget()
  }

  private handleTouchEnd() {
    // Add momentum if needed
  }

  private clampTarget() {
    this.smoothData.target = Math.max(this.smoothData.maxScroll, Math.min(0, this.smoothData.target))
  }

  private render() {
    const diff = this.smoothData.target - this.smoothData.current
    this.smoothData.current += diff * this.smoothData.ease

    // Apply transform
    this.scrollingElement.style.transform = `translateY(${this.smoothData.current}px)`

    // Update scroll position for parallax effects or other scroll-based animations
    document.documentElement.style.setProperty('--scroll', this.smoothData.current.toString())

    this.rafId = requestAnimationFrame(this.render.bind(this))
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }
    this.resizeObserver.disconnect()
    window.removeEventListener('wheel', this.handleWheel.bind(this))
    window.removeEventListener('touchstart', this.handleTouchStart.bind(this))
    window.removeEventListener('touchmove', this.handleTouchMove.bind(this))
    window.removeEventListener('touchend', this.handleTouchEnd.bind(this))
    
    // Reset styles
    document.body.style.overflow = ''
    this.container.style.position = ''
    this.container.style.width = ''
    this.container.style.height = ''
    this.container.style.overflow = ''
    this.scrollingElement.style.transform = ''
    this.scrollingElement.style.willChange = ''
  }
}