export class NavUnderlinePrinter {
  #sections = document.querySelectorAll("section");
  // #options = { threshold: 0.1 };
  #options = {
    // rootMargin: "100px 0px -200px 0px",
    rootMargin: "-12.2px",
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
      if (entry.target.id) {
        const liElem = document.querySelector(`[data-ref=${entry.target.id}]`);

        if (entry.isIntersecting) {
          const liElems = document.querySelectorAll(".underline-nav");

          liElems.forEach(liElems => {
            liElems.classList.remove("underline-nav");
          });
          liElem?.classList.add("underline-nav");
        } else {
          liElem?.classList.remove("underline-nav");
        }
      }
    });
  }
  #observeSections() {
    this.#sections.forEach(section => {
      this.observer.observe(section);
    });
  }
}
