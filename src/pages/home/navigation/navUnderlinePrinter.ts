export class NavUnderlinePrinter {
  liElems = document.querySelectorAll("[data-ref]");
  #sections = document.querySelectorAll("section");

  #options = {
    rootMargin: "-100px 0px -100px 0px",
  };

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
      if (entry.isIntersecting) {
        this.liElems.forEach(liEl => {
          liEl.classList.remove("underline-nav");
          if (entry.target.id === (liEl as HTMLElement).dataset.ref) {
            liEl.classList.add("underline-nav");
          }
        });
      }
    });
  }

  #observeSections() {
    this.#sections.forEach(section => {
      this.observer.observe(section);
    });
  }
}
