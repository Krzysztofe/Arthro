import { URL_PRODUCTS } from "../../../data/apiKeys";
import { Helpers } from "../../../utils/helpers";
import { LoadingProductsCreator } from "./loadingProductsCreator";
import { ProductsPrinter } from "./productsPrinter";
import { StatePageNumber } from "../states/statePageNumber";
import { StateProductsPerPage } from "../states/stateProductsPerPage";

export class ProductsCreator {
  // #options = { threshold: 0.9 };

  // #options = { rootMargin: "-100px" };

  #options = {
    rootMargin: "100px",
  };
  observer: IntersectionObserver;

  #firstSectionCreated = false;

  constructor() {
    this.observer = new IntersectionObserver(
      this.#observerCallback.bind(this),
      this.#options
    );
    this.observeLastElem();
  }

  #firstGEToptions() {
    const url = URL_PRODUCTS.replace("1", StatePageNumber.number);

    return {
      url: `${url}${StateProductsPerPage.products}`,
    };
  }

  async #createProducts(GETOptions: any) {
    const loader = new LoadingProductsCreator("#productsWrapper");
    loader.createSpinner();
    const products = await Helpers.fetchData(GETOptions);
    if (products) {
      new ProductsPrinter(products.data);
    }
    loader.removeSpinner();

    if (!this.#firstSectionCreated) {
      this.#firstSectionCreated = true;
    }
    this.observeLastElem();
  }

  async #observerCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach(async entry => {
      if (entry.isIntersecting) {
        await this.#createProducts(this.#firstGEToptions());
        StatePageNumber.number = StatePageNumber.number + 1;
        this.observer.unobserve(entry.target);
      }
    });
  }

  observeLastElem() {
    const sections = document.querySelectorAll(".productsContainer");

    const lastSection = sections.item(sections.length - 1);

    if (lastSection) {
      this.observer.observe(lastSection);
    }
  }

  reObserveLastElem(element: HTMLElement) {
    this.observer.observe(element);
  }
}
