import { ModelProduct } from "../../../sharedModels/modelProduct";

export class ProductsPrinter {
  #products: ModelProduct[] | null = null;
  #productsWrapperEl = document.getElementById("productsWrapper");
  #productsContainerEl = document.createElement("div");

  constructor(products: ModelProduct[]) {
    this.#products = products;
    this.#createProductsContainer();
  }

  #createProductsElems() {
    this.#products?.forEach(product => {
      const { id } = product;
      const divEl = document.createElement("div");
      divEl.innerText = `ID:${id}`;
      divEl.id = id.toString();
      divEl.setAttribute("data-details", JSON.stringify(product));
      divEl.classList.add(
        "product-container",
        "center",
        "cursor-pointer",
        "margin-auto"
      );
      this.#productsContainerEl?.append(divEl);
    });
  }
  #createProductsContainer() {
    this.#productsContainerEl.classList.add(
      "even-columns-4",
      "relative",
      "productsContainer"
    );
    this.#productsWrapperEl?.append(this.#productsContainerEl);
    this.#createProductsElems();
  }
}
