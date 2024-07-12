import { ModelProduct } from "./../../../sharedModels/modelProduct";

export class PopupProductDetails {
  #bodyEl = document.querySelector("body");
  #headerEl = document.querySelector("header");
  #productsContainerEl = document.getElementById("productsWrapper");
  #xmarkEL = document.createElement("img");
  #innerContainerEl = document.createElement("div");
  #popupContainerEl = document.createElement("div");
  #productDetails: null | ModelProduct = null;

  constructor() {
    this.#popupEvents();
  }

  #createIconXmark() {
    this.#xmarkEL.classList.add("popup-xmark", "cursor-pointer");
    this.#xmarkEL.src = "/src/images/icons/xmark-solid.svg";
    this.#xmarkEL.alt = "Krzyżyk";
    this.#xmarkEL.id = "xmark";
    this.#innerContainerEl?.prepend(this.#xmarkEL);
  }

  #createPopupInnerContainer() {
    if (!this.#productDetails) return;
    const { id, name, value } = this.#productDetails;

    this.#innerContainerEl.id = "popupInnerContainer";
    this.#innerContainerEl.classList.add(
      "popup-innerContainer",
      "flex-column",
      "space-between-x",
      "relative",
      "cursor-none",
      "margin-inline-100",
      "padding-100",
      "padding-bottom-200"
    );
    this.#innerContainerEl.innerHTML = `    
        <div>ID: ${id}</div>
       <div>Nazwa: ${name}</div>
       <div>Wartość: ${value}</div>`;
    this.#popupContainerEl.append(this.#innerContainerEl);
    this.#createIconXmark();
  }

  #createPopupContainetr() {
    this.#bodyEl?.classList.add("overflowY-hidden");
    this.#popupContainerEl.id = "popupContainer";
    this.#popupContainerEl.classList.add(
      "popup-container",
      "center",
      "cursor-pointer",
      "zIndex-7",
      "gradient-primary"
    );

    this.#bodyEl?.append(this.#popupContainerEl);
    this.#createPopupInnerContainer();
  }

  #handlePrintPopup(e: Event) {
    const target = e.target as HTMLElement;
    const details = target.getAttribute("data-details");
    this.#productDetails = details && JSON.parse(details);

    if (details) {
      this.#createPopupContainetr();
    }
  }

  #handleRremovePopup(e: Event) {
    const id = (e.target as HTMLElement).id;

    if (id === "popupContainer" || id === "xmark") {
      this.#popupContainerEl?.remove();
      this.#bodyEl?.classList.remove("overflowY-hidden");

      this.#bodyEl?.classList.remove("scrollbarGutter");
      this.#headerEl?.classList.remove("scrollbarGutter");
    }
  }

  #popupEvents() {
    this.#productsContainerEl?.addEventListener(
      "click",
      this.#handlePrintPopup.bind(this)
    );

    this.#popupContainerEl?.addEventListener(
      "click",
      this.#handleRremovePopup.bind(this)
    );
  }
}
