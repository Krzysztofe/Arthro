// import { Helpers } from "../../../utils/helpers";

// export class NavigationToggle {
//   #mainEl = document.querySelector("main")
//   #primaryHeaderEl = document.querySelector(".primary-header");
//   #navToggleEl = document.querySelector(".mobile-nav-toggle");
//   #primaryNavEl = document.querySelector(".primary-navigation");
//   #iconHamburgerEl = document.querySelector(".icon-hamburger") as HTMLElement;
//   #iconXmarkEl = document.querySelector(".icon-xmark") as HTMLElement;

//   constructor() {
//     this.#navToggleEvent();
//   }

//   #handleNavToggle() {
//     this.#primaryNavEl?.hasAttribute("data-visible")
//       ? this.#navToggleEl?.setAttribute("aria-expanded", "false")
//       : this.#navToggleEl?.setAttribute("aria-expanded", "true");

//        this.#primaryNavEl?.hasAttribute("data-visible")
//          ? (this.#mainEl?.style.pointerEvents = "none")
//          : (this.#mainEl?.style.pointerEvents = "all");
//     this.#primaryNavEl?.toggleAttribute("data-visible");
//     this.#primaryHeaderEl?.toggleAttribute("data-overlay");

//     Helpers.toggleNavcon(this.#iconHamburgerEl, this.#iconXmarkEl);
//   }

//   #navToggleEvent() {
//     this.#navToggleEl?.addEventListener(
//       "click",
//       this.#handleNavToggle.bind(this)
//     );
//   }
// }

import { Helpers } from "../../../utils/helpers";

export class NavigationToggle {
  #mainEl = document.querySelector("main");
  #primaryHeaderEl = document.querySelector(".primary-header");
  #navToggleEl = document.querySelector(".mobile-nav-toggle");
  #primaryNavEl = document.querySelector(".primary-navigation");
  #iconHamburgerEl = document.querySelector(".icon-hamburger") as HTMLElement;
  #iconXmarkEl = document.querySelector(".icon-xmark") as HTMLElement;

  constructor() {
    this.#navToggleEvent();
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

  #navToggleEvent() {
    this.#navToggleEl?.addEventListener(
      "click",
      this.#handleNavToggle.bind(this)
    );
  }
}
