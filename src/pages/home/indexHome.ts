class Scroll {
  #btnHero = document.getElementById("hero");
  #btnComposition = document.getElementById("composition");
  #btnProducts = document.getElementById("products");
  #sectionComposition = document.querySelector("[data-composition]");

  constructor() {
    this.#scrollEvent();
  }
  #handleScroll() {
    this.#sectionComposition?.scrollIntoView({ behavior: "smooth" });
  }

  #scrollEvent() {
    this.#btnComposition?.addEventListener(
      "click",
      this.#handleScroll.bind(this)
    );
  }
}

new Scroll();
