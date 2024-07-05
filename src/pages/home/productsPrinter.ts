import { ModelProduct } from './../../sharedModels/modelProduct';

export class ProductsPrinter {
  #products: ModelProduct[] | null = null;
  #productsContainerEl = document.getElementById("productsContainer");

  constructor(products: ModelProduct[]) {
    this.#products = products;
    this.#createProductsElems();
  }

  #createProductsElems() {
    this.#products?.forEach(product => {
      const { id } = product;
      const divEl = document.createElement("div");
      divEl.innerText = `ID:${id}`;
      divEl.id = id.toString();
      divEl.setAttribute("data-details", JSON.stringify(product));
      divEl.classList.add("product-container", "center", "cursor-pointer");
      this.#productsContainerEl?.append(divEl);
    });
  }
}
