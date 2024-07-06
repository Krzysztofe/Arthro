export class LoadingProductsCreator {
  #spinner: HTMLElement | null = null;
  #parentEl: HTMLElement | null = null;

  constructor(parentRef: string) {
    this.#parentEl = document.querySelector(parentRef);
  }
  createSpinner() {
    this.#spinner = document.createElement("div");
    this.#spinner.id = "productsSpinner";
    this.#spinner.classList.add("center", "spinnerContainer");
    this.#spinner.innerHTML = "<div class='spinner'></div>";
    this.#parentEl?.prepend(this.#spinner);
 
  }
  removeSpinner() {
    this.#spinner?.remove();
  }
}
