import { ModelProduct } from "../../sharedModels/modelProduct";

export class PopupProductDetails {
  #bodyEl = document.querySelector("body");
  #productsContainerEl = document.getElementById("productsWrapper");
  #xmarkEL = document.createElement("i");
  #innerContainerEl = document.createElement("div");
  #popupContainerEl = document.createElement("div");
  #productDetails: null | ModelProduct = null;

  constructor() {
    this.#popupEvents();
  }

  #createIconXmark() {
    this.#xmarkEL.classList.add(
      "fa-solid",
      "fa-xmark",
      "popupXmark",
      "cursor-pointer"
    );
    this.#xmarkEL.id = "xmark";
    this.#innerContainerEl?.prepend(this.#xmarkEL);
  }

  #createPopupInnerContainer() {
    if (!this.#productDetails) return;
    const { id, name, value } = this.#productDetails;

    this.#innerContainerEl.id = "popupInnerContainer";
    this.#innerContainerEl.classList.add(
      "popupInnerContainer",
      "relative",
      "cursor-none"
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
      "popupContainer",
      "center",
      "cursor-pointer",
      "zIndex-1"
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
