import { ModelProduct } from "../../../sharedModels/modelProduct";

export class ProductsPrinter {
  #products: ModelProduct[] | null = null;
  #productsWrapperEl = document.getElementById("productsWrapper");
  #productsContainerEl = document.createElement("div");
  #productsContainerElX = document.getElementById("products-container");

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
    const productsContainersElems = document.querySelectorAll(
      ".products-container"
    );

        const lastProductsContainerX =
          productsContainersElems[productsContainersElems.length - 1];

    const productsElems =
      lastProductsContainerX.querySelectorAll(".product-container");
   

      const allProducts = document.querySelectorAll(".product-container");

    console.log("", productsContainersElems);

    if (productsElems?.length % 4 !== 0 && productsContainersElems.length>2) {
      const restNumber = productsElems?.length % 4;
      console.log("ee", restNumber);

      const prevProductsContainer =
        productsContainersElems[productsContainersElems.length - 2];
      const lastProductsContainer =
        productsContainersElems[productsContainersElems.length - 1];

      const products =
        lastProductsContainer.querySelectorAll(".product-container");
      const productsToRemove = Array.from(products).slice(0, restNumber);

      console.log("", prevProductsContainer);

      productsToRemove.forEach(productEl => {
        prevProductsContainer.append(productEl);
      });
    }


     if (allProducts?.length % 4 !== 0 && productsContainersElems.length > 2) {
       const restNumber = productsElems?.length % 4;
       console.log("ee", restNumber);

       const prevProductsContainer =
         productsContainersElems[productsContainersElems.length - 2];
       const lastProductsContainer =
         productsContainersElems[productsContainersElems.length - 1];

       const products =
         lastProductsContainer.querySelectorAll(".product-container");
       const productsToRemove = Array.from(products).slice(0, restNumber);

       console.log("", prevProductsContainer);

       productsToRemove.forEach(productEl => {
         prevProductsContainer.append(productEl);
       });
     }
  }
}
