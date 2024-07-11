import { ReprintProducts } from "./products/reprintProducts";
import { StatePageNumber } from "./states/statePageNumber";
import { StateProductsPerPage } from "./states/stateProductsPerPage";

export class CustomSelect {
  #customSelect = document.querySelector(".select");
  #triggerEl = document.querySelector(".select-trigger");
  #optionsElems = document.querySelectorAll(".option");
  #iconEl = document.querySelector("[data-icon-select]");

  constructor() {
    this.#addEvents();
  }

  #handleCloseSelect(e: Event) {
    if (!this.#customSelect?.contains(e.target as HTMLElement)) {
      this.#customSelect?.classList.remove("open");
      this.#iconEl?.classList.remove("rotate-180");
    }
  }

  #handleToggleSelect() {
    this.#customSelect?.classList.toggle("open");
    this.#iconEl?.classList.toggle("rotate-180");
  }

  async #handleSelectOption(e: Event) {
    const target = e.target as HTMLElement;
    const selectedValue = target.getAttribute("data-value");
    const selectedText = target.innerText;
    const productsElems = document.querySelectorAll(".productsContainer");

    const spanElement = this.#triggerEl?.querySelector(
      "[data-value]"
    ) as HTMLElement;
    if (spanElement) {
      spanElement.innerText = selectedText;
    }

    productsElems.forEach((elem, idx) => idx !== 0 && elem.remove());

    this.#customSelect?.classList.remove("open");

    this.#iconEl?.classList.remove("rotate-180");

    if (!selectedValue) return;

    StateProductsPerPage.products = selectedValue;
    StatePageNumber.number = 2;
    new ReprintProducts(selectedValue);
  }

  #addEvents() {
    this.#triggerEl?.addEventListener(
      "click",
      this.#handleToggleSelect.bind(this)
    );
    this.#optionsElems.forEach(option => {
      option.addEventListener("click", this.#handleSelectOption.bind(this));
    });
    document.addEventListener("click", this.#handleCloseSelect.bind(this));
  }
}
