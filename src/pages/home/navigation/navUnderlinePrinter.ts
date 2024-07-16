export class NavUnderlinePrinter {
  #paralaxWraperEl = document.querySelector(".paralax-wraper") as HTMLElement;
  #liElems = document.querySelectorAll("[data-ref]");
  #sectionsElems = document.querySelectorAll("section");
  #throttleTimeout: number | null = null;

  constructor() {
    this.#scrollEvent();
  }

  #handleScroll() {
    let currentSection = "distinguish";

    this.#sectionsElems.forEach(sectionEl => {
      if (this.#paralaxWraperEl?.scrollTop >= sectionEl.offsetTop) {
        currentSection = sectionEl.id;
      }
    });

    this.#liElems.forEach(liEl => {
      const ref = (liEl as HTMLElement).dataset.ref;
      if (ref === currentSection) {
        liEl.classList.add("underline-nav");
      } else {
        liEl.classList.remove("underline-nav");
      }
    });
  }

  #throttle(fn: () => void) {
    return () => {
      if (this.#throttleTimeout !== null) return;
      this.#throttleTimeout = window.setTimeout(() => {
        fn();
        this.#throttleTimeout = null;
      }, 500);
    };
  }

  #scrollEvent() {
    this.#paralaxWraperEl?.addEventListener(
      "scroll",
      this.#throttle(this.#handleScroll.bind(this))
    );
  }
}
