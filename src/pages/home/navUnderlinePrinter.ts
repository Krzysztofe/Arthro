export class NavUnderlinePrinter {
  #sections = document.querySelectorAll("section");
  #options = { threshold: 0.4 };
  observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
      this.#observerCallback.bind(this),
      this.#options
    );
    this.#observeSections();
  }

  #observerCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      const elem = document.querySelector(`[data-ref=${entry.target.id}]`);
      if (entry.isIntersecting) {
        elem?.classList.add("underline-nav");
      } else {
        elem?.classList.remove("underline-nav");
      }
    });
  }
  #observeSections() {
    this.#sections.forEach(section => {
      this.observer.observe(section);
    });
  }
}
