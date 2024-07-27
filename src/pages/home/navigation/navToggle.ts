import { Helpers } from "../../../utils/helpers";

export class NavToggle {
  #mainEl = document.querySelector("main");
  #primaryHeaderEl = document.querySelector(".primary-header");
  #navToggleEl = document.querySelector(".mobile-nav-toggle");
  #primaryNavEl = document.querySelector(".primary-navigation");
  #iconHamburgerEl = document.querySelector(".icon-hamburger") as HTMLElement;
  #iconXmarkEl = document.querySelector(".icon-xmark") as HTMLElement;

  constructor() {
    this.#navEvents();
  }

  #handleNavToggle() {
    if (this.#primaryNavEl?.hasAttribute("data-visible")) {
      this.#navToggleEl?.setAttribute("aria-expanded", "false");
      this.#mainEl && (this.#mainEl.style.pointerEvents = "all");
    } else {
      this.#navToggleEl?.setAttribute("aria-expanded", "true");
      this.#mainEl && (this.#mainEl.style.pointerEvents = "none");
    }

    this.#primaryNavEl?.toggleAttribute("data-visible");
    this.#primaryHeaderEl?.toggleAttribute("data-overlay");

    Helpers.toggleNavcon(this.#iconHamburgerEl, this.#iconXmarkEl);
  }

  #handleCloseMenu(e: Event) {
    const tagName = (e.target as HTMLElement).tagName;

    if (tagName === "A" || tagName === "LI") {
      this.#primaryNavEl?.toggleAttribute("data-visible");
      this.#primaryHeaderEl?.toggleAttribute("data-overlay");
      this.#mainEl && (this.#mainEl.style.pointerEvents = "all");
      Helpers.toggleNavcon(this.#iconHamburgerEl, this.#iconXmarkEl);
    }
  }

  #navEvents() {
    this.#navToggleEl?.addEventListener(
      "click",
      this.#handleNavToggle.bind(this)
    );
    this.#primaryNavEl?.addEventListener(
      "click",
      this.#handleCloseMenu.bind(this)
    );
  }
}
