export class Scroll {
  #primaryNavEl = document.getElementById("primary-navigation");

  constructor() {
    this.#scrollEvent();
  }

  #handleScroll(e: Event) {
    const id = (e.target as HTMLElement).id;
    const menuItemEl = document.getElementById(id);
    const sectionEl = document.querySelector(`[data-${id}]`);
    const primaryNavigationEl = document.getElementById("primary-navigation");
    const liElems = primaryNavigationEl?.querySelectorAll("li");

    liElems?.forEach(elem => {
      elem.style.color = "black";
    });

    if (sectionEl && menuItemEl) {
      menuItemEl.style.color = "red";
      const elementTop = sectionEl.getBoundingClientRect().top + window.scrollY;
      const offsetTop = elementTop - 122;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  #scrollEvent() {
    this.#primaryNavEl?.addEventListener(
      "click",
      this.#handleScroll.bind(this)
    );
  }
}
