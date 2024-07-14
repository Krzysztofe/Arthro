export class ImgLoading {
 #blurDivs = document.querySelectorAll(".blur-load");

  constructor() {
   
    this.#loadEvent();
  }

  #handleLoad(div: HTMLElement, img: HTMLElement) {
    img && (img.style.opacity = "1");
    div.classList.remove("blur-animation");
    div.style.background = "none";
  }

  #loadEvent() {
    this.#blurDivs?.forEach(div => {
      const img = div.querySelector("img") as HTMLImageElement| null;

      if (img?.complete) {
        this.#handleLoad(div as HTMLElement, img);
      } else {
        img?.addEventListener("load", () => this.#handleLoad(div as HTMLElement, img));
      }
    });
  }
}
