import { Helpers } from "../../utils/helpers";

export class NavigationToggle {
  #primaryHeaderEl = document.querySelector(".primary-header");
  #navToggleEl = document.querySelector(".mobile-nav-toggle");
  #primaryNavEl = document.querySelector(".primary-navigation");
  #iconHamburgerEl = document.querySelector(".icon-hamburger") as HTMLElement;
  #iconXmarkEl = document.querySelector(".icon-xmark") as HTMLElement;

  constructor() {
    this.#navToggleEvent();
  }

 

  #handleNavToggle() {
    this.#primaryNavEl?.hasAttribute("data-visible")
      ? this.#navToggleEl?.setAttribute("aria-expanded", "false")
      : this.#navToggleEl?.setAttribute("aria-expanded", "true");
    this.#primaryNavEl?.toggleAttribute("data-visible");
    this.#primaryHeaderEl?.toggleAttribute("data-overlay");

    Helpers.toggleNavcon(this.#iconHamburgerEl, this.#iconXmarkEl);
  }

  #navToggleEvent() {
    this.#navToggleEl?.addEventListener(
      "click",
      this.#handleNavToggle.bind(this)
    );
  }
}
