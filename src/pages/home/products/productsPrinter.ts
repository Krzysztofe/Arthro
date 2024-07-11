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
    // this.#productsContainerEl.id = "productsContainer";
    this.#productsContainerEl.classList.add(
      "even-columns-5",
      "relative",
      "margin-top-500",
      "productsContainer"
    );
    this.#productsWrapperEl?.append(this.#productsContainerEl);
    this.#createProductsElems();
  }
}
