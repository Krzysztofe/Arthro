import { URL_PRODUCTS } from "../../data/apiKeys";
import { Helpers } from "../../utils/helpers";
import { ProductsPrinter } from "./productsPrinter";

export class ProductsCreator {
  #spinnerEl = document.getElementById("productsSpinner");

  #POSTOptions = {
    url: `${URL_PRODUCTS}20`,
  };

  constructor() {
    this.#event();
  }

  async #handleChangeInputAmount() {
    const products = await Helpers.fetchData(this.#POSTOptions);
    this.#spinnerEl?.remove();
    new ProductsPrinter(products)

    console.log("eee", products);
  }

  #event() {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.#handleChangeInputAmount();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }
}
