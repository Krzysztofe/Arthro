export class Scroll {
  #btnHero = document.getElementById("hero");
  #btnComposition = document.getElementById("composition");
  #btnProducts = document.getElementById("products");
  #sectionComposition = document.querySelector("[data-composition]");

  constructor() {
    this.#scrollEvent();
  }

  #handleScroll() {
    if (this.#sectionComposition) {
      const elementTop =
        this.#sectionComposition.getBoundingClientRect().top + window.scrollY;
      const offsetTop = elementTop - 122;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  #scrollEvent() {
    this.#btnComposition?.addEventListener(
      "click",
      this.#handleScroll.bind(this)
    );
  }
}
