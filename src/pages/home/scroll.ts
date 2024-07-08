import { Helpers } from "../../utils/helpers";

export class Scroll {
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
    Helpers.toggleNavcon(this.#iconHamburgerEl, this.#iconXmarkEl);
  }

  #handleScroll(e: Event) {
    const id = (e.target as HTMLElement).id;
    const menuItemEl = document.getElementById(id);
    const sectionEl = document.querySelector(`[data-${id}]`);
    const primaryNavigationEl = document.getElementById("primary-navigation");
    const liElems = primaryNavigationEl?.querySelectorAll("li");

    liElems?.forEach(elem => {
      elem.classList.remove("underline-nav");
    });

    if (sectionEl && menuItemEl) {
      this.#toggleMenu();
      menuItemEl.classList.add("underline-nav");

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
