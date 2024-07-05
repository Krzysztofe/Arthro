import { ProductsPrinter } from "./productsPrinter";
import { Helpers } from "./../../utils/helpers";
import { URL_PRODUCTS } from "./../../data/apiKeys";
import { StateItemsNumber } from "./stateItemsNumber";

export class CustomSelect {
  #customSelect = document.querySelector(".select");
  #triggerEl = document.querySelector(".select-trigger");
  #optionsElems = document.querySelectorAll(".option");

  #productsElems = document.getElementById("productsContainer");

  constructor() {
    this.#addEvents();
  }

  #handleCloseSelect(e: Event) {
    if (!this.#customSelect?.contains(e.target as HTMLElement)) {
      this.#customSelect?.classList.remove("open");
    }
  }

  #handleToggleSelect() {
    this.#customSelect?.classList.toggle("open");
  }

  #POSTOptions(pageSize: string) {
    return {
      url: `${URL_PRODUCTS}${pageSize}`,
    };
  }

  async #handleSelectOption(e: Event) {
    const target = e.target as HTMLElement;
    const selectedValue = target.getAttribute("data-value");
    const selectedText = target.innerText;
    const productsElems = document.getElementById("productsContainer");
    
    const spanElement = this.#triggerEl?.querySelector(
      "[data-value]"
    ) as HTMLElement;
    if (spanElement) {
      spanElement.innerText = selectedText;
    }

productsElems?.remove()

    console.log("", productsElems);

    this.#customSelect?.classList.remove("open");
    // const event = new Event("change");
    // this.#customSelect?.dispatchEvent(event);
    // selectedValue && StateItemsNumber.handleItemsNumber(selectedValue);

    const products =
      selectedValue &&
      (await Helpers.fetchData(this.#POSTOptions(selectedValue)));

    this.#productsElems?.remove();

    console.log("", this.#productsElems);

    new ProductsPrinter(products.data);

    console.log("", products);
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
