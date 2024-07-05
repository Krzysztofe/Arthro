import { StateProductsNumber } from "./stateProductsNumber";
import { URL_PRODUCTS } from "../../data/apiKeys";
import { Helpers } from "../../utils/helpers";
import { LoadingProductsCreator } from "./loadingProductsCreator";
import { ProductsPrinter } from "./productsPrinter";

export class ProductsCreator {
  #POSTOptions = {
    url: `${URL_PRODUCTS}${StateProductsNumber.products}`,
  };

  constructor() {
    this.#event();
  }

  async #handleChangeInputAmount() {
    const loader = new LoadingProductsCreator("#productsWrapper");
    loader.createSpinner();
    const products = await Helpers.fetchData(this.#POSTOptions);
    new ProductsPrinter(products.data);
    loader.removeSpinner();
  }

  #event() {
    const handleScroll = () => {
      const productsContainerEL = document.getElementById("productsContainer");
      if (productsContainerEL) return;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        this.#handleChangeInputAmount();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }
}
