import { ModelRequestOptions } from "./../sharedModels/modelrequestOptions";
import { HttpRequest } from "../services/httpReuest";

export class Helpers {
  static fetchData(requestOptions: ModelRequestOptions) {
    const request = new HttpRequest();
    return request.sendRequest(requestOptions);
  }

  static toggleNavcon(iconHamburger: HTMLElement, iconXmark: HTMLElement) {
    if (!iconHamburger || !iconXmark) return;

    if (iconHamburger.style.display === "none") {
      iconHamburger.style.display = "block";
      iconXmark.style.display = "none";
    } else {
      iconHamburger.style.display = "none";
      iconXmark.style.display = "block";
    }
  }
}
