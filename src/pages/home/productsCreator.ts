import { StateProductsNumber } from "./stateProductsNumber";
import { URL_PRODUCTS } from "../../data/apiKeys";
import { Helpers } from "../../utils/helpers";
import { LoadingProductsCreator } from "./loadingProductsCreator";
import { ProductsPrinter } from "./productsPrinter";

export class ProductsCreator {
  #sectionEL = document.getElementById("productsWrapper");
  #POSTOptions = {
    url: `${URL_PRODUCTS}${StateProductsNumber.products}`,
  };

  constructor() {
    this.#event();
  }

  #isScrollInSection(sectionEl: HTMLElement) {
    const rect = sectionEl.getBoundingClientRect();
    const sectionMiddle = rect.top + rect.height / 2;
    const viewportMiddle = window.innerHeight / 2;
    return Math.abs(viewportMiddle - sectionMiddle) < rect.height;
  }

  async #createProducts() {
    const loader = new LoadingProductsCreator("#productsWrapper");
    loader.createSpinner();
    const products = await Helpers.fetchData(this.#POSTOptions);
    products && new ProductsPrinter(products.data);
    loader.removeSpinner();
  }

  #handleScroll = () => {
    const productsContainerEL = document.getElementById("productsContainer");
    if (productsContainerEL) return;

    if (this.#sectionEL && this.#isScrollInSection(this.#sectionEL)) {
      this.#createProducts();
      window.removeEventListener("scroll", this.#handleScroll);
    }
  };

  #event() {
    window.addEventListener("scroll", this.#handleScroll);
  }
}
