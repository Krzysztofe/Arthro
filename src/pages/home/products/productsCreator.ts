import { URL_PRODUCTS } from "../../../data/apiKeys";
import { Helpers } from "../../../utils/helpers";
import { LoadingProductsCreator } from "./loadingProductsCreator";
import { ProductsPrinter } from "./productsPrinter";
import { StatePageNumber } from "../states/statePageNumber";
import { StateProductsPerPage } from "../states/stateProductsPerPage";

export class ProductsCreator {
  #observer: IntersectionObserver;


  constructor() {
    this.#observer = new IntersectionObserver(this.#observerCallback.bind(this));
    this.observeLastElem();
  }

  #firstGEToptions() {
    const url = URL_PRODUCTS.replace("1", StatePageNumber.number);

    return {
      url: `${url}${StateProductsPerPage.products}`,
    };
  }

  async #createProducts(GETOptions: { url: string }) {
    const loader = new LoadingProductsCreator("#productsWrapper");
    loader.createSpinner();
    const products = await Helpers.fetchData(GETOptions);
    if (products) {
      new ProductsPrinter(products.data);
    }
    loader.removeSpinner();
    this.observeLastElem();
  }

  async #observerCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach(async entry => {
      if (entry.isIntersecting) {
        await this.#createProducts(this.#firstGEToptions());
        StatePageNumber.number = StatePageNumber.number + 1;
        this.#observer.unobserve(entry.target);
      }
    });
  }

  observeLastElem() {
    const sections = document.querySelectorAll(".products-container");

    const lastSection = sections.item(sections.length - 1);

    if (lastSection) {
      this.#observer.observe(lastSection);
    }
  }

}
