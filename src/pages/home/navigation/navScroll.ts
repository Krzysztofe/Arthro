import { Helpers } from "../../../utils/helpers";

export class NavScroll {
  #mainEl = document.querySelector("main");
  #primaryNavEl = document.getElementById("primary-navigation");
  #primaryHeaderEl = document.querySelector(".primary-header");
  #iconHamburgerEl = document.querySelector(".icon-hamburger") as HTMLElement;
  #iconXmarkEl = document.querySelector(".icon-xmark") as HTMLElement;

  constructor() {
    this.#scrollEvent();
  }

  #toggleMenu() {
    this.#primaryNavEl?.toggleAttribute("data-visible");

    this.#primaryHeaderEl?.toggleAttribute("data-overlay");
    this.#mainEl && (this.#mainEl.style.pointerEvents = "all");
    Helpers.toggleNavcon(this.#iconHamburgerEl, this.#iconXmarkEl);
  }

  #handleScroll(e: Event) {
    const id = (e.target as HTMLElement).dataset.ref;
    const menuItemEl = id && document.getElementById(id);
    const sectionEl = id && document.getElementById(id);

    if (sectionEl && menuItemEl) {
      this.#toggleMenu();

      const elementTop = sectionEl.getBoundingClientRect().top + window.scrollY;
      const offsetTop = elementTop - 122;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  #scrollEvent() {
    this.#primaryNavEl?.addEventListener(
      "click",
      this.#handleScroll.bind(this)
    );
  }
}
