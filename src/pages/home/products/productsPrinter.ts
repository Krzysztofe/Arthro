import { ModelProduct } from "../../../sharedModels/modelProduct";

export class ProductsPrinter {
  #products: ModelProduct[] | null = null;
  #productsWrapperEl = document.getElementById("productsWrapper");
  #productsContainerEl = document.createElement("div");

  constructor(products: ModelProduct[]) {
    this.#products = products;
    this.#createProductsContainer();
    this.#moveElemsToPreviousElement();
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
      "products-container"
    );
    this.#productsWrapperEl?.append(this.#productsContainerEl);
    this.#createProductsElems();
  }

  #moveElemsToPreviousElement() {
    const containersElems = document.querySelectorAll(".products-container");

    const lastContainerEl = containersElems[containersElems.length - 1];

    const lastContainerProductsElems =
      lastContainerEl.querySelectorAll(".product-container");

    const allProducts = document.querySelectorAll(".product-container");

    const prevProductsContainer = containersElems[containersElems.length - 2];
    const restNumber = lastContainerProductsElems?.length % 4;

    if (restNumber > 0 && containersElems.length > 2) {
      const productsToRemove = Array.from(lastContainerProductsElems).slice(
        0,
        restNumber
      );

      productsToRemove.forEach(productEl => {
        prevProductsContainer.append(productEl);
      });
    }

    if (allProducts?.length % 4 !== 0 && containersElems.length > 2) {
      const products = lastContainerEl.querySelectorAll(".product-container");
      const productsToRemove = Array.from(products).slice(0, restNumber);

      productsToRemove.forEach(productEl => {
        prevProductsContainer.append(productEl);
      });
    }
  }
}
  