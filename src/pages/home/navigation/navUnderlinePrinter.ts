// export class NavUnderlinePrinter {
//   #sections = document.querySelectorAll("section");
//   // #options = { threshold: 0.1 };
//   #options = {
//     rootMargin: "-200px 0px -100px 0px",
//     // rootMargin: "-12.2px",
//   };
//   observer: IntersectionObserver;

//   constructor() {
//     this.observer = new IntersectionObserver(
//       this.#observerCallback.bind(this),
//       this.#options
//     );
//     this.#observeSections();
//   }

//   #toggleUnderline(entry: IntersectionObserverEntry) {
//     const liElem = document.querySelector(`[data-ref=${entry.target.id}]`);

//     if (entry.isIntersecting) {
//       // const liElems = document.querySelectorAll(".underline-nav");

//       // liElems.forEach(liElems => {
//       //   liElems.classList.remove("underline-nav");
//       // });
//       liElem?.classList.add("underline-nav");
//     } else {
//       liElem?.classList.remove("underline-nav");
//     }
//   }

//   #observerCallback(entries: IntersectionObserverEntry[]) {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//         return;
//       } else {
//         this.#toggleUnderline(entry);
//       }
//     });
//   }
//   #observeSections() {
//     this.#sections.forEach(section => {
//       this.observer.observe(section);
//     });
//   }
// }

export class NavUnderlinePrinter {
  liElems = document.querySelectorAll("[data-ref]");
  #sections = document.querySelectorAll("section");
  // #options = { threshold: 0.1 };
  #options = {
    rootMargin: "-100px 0px -100px 0px",
  };
  observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
      this.#observerCallback.bind(this),
      this.#options
    );
    this.#observeSections();
  }

  #observerCallback(entries: IntersectionObserverEntry[]) {

    entries.forEach(entry => {
      if (entry.isIntersecting) {

        this.liElems.forEach(liEl => {
          liEl.classList.remove("underline-nav");
          if (entry.target.id === (liEl as HTMLElement).dataset.ref) {
            console.log("", entry.target.id);
            console.log(
              "",
              entry.target.id === (liEl as HTMLElement).dataset.ref
            );
            liEl?.classList.add("underline-nav");
          }
        });
      }
    });
  }

  #observeSections() {
    this.#sections.forEach(section => {
      this.observer.observe(section);
    });
  }
}
