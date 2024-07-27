import { URL_PRODUCTS } from "../../../data/apiKeys";
import { Helpers } from "../../../utils/helpers";
import { LoadingProductsCreator } from "./loadingProductsCreator";
import { ProductsPrinter } from "./productsPrinter";
import { StateReobservEl } from "../states/stateReobservEl";

export class ReprintProducts {
  #pageSize: null | string = null;

  constructor(pageSize: string) {
    this.#pageSize = pageSize;
    this.#getProducts();
  }

  #POSTOptions() {
    return {
      url: `${URL_PRODUCTS}${this.#pageSize}`,
    };
  }

  async #getProducts() {
    const loader = new LoadingProductsCreator("#productsWrapper");
    loader.createSpinner();
    const products = await Helpers.fetchData(this.#POSTOptions());
    products && new ProductsPrinter(products.data);
    StateReobservEl.observRef && StateReobservEl.observRef();
    loader.removeSpinner();
  }
}
