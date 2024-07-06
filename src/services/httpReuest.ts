import { LoadingProductsCreator } from "../pages/home/loadingProductsCreator";

type ModelObjectString = {
  [key: string]: string;
};

type ModelRequestOptions = {
  url: string;
  method?: string;
  headers?: ModelObjectString;
  body?: ModelObjectString;
};

export class HttpRequest {
  #createErrorPage = () => {
    const body = document.querySelector("body");
    if (!body) return;
    const errorContainer = document.createElement("div");
    errorContainer.innerText = "Błąd. Ponów próbę";
    errorContainer.classList.add("http-error", "center");
    errorContainer.style.zIndex = "60";
    body?.prepend(errorContainer);
    document.querySelector("body")?.classList.add("overflowY-hidden");
  };

  async sendRequest({
    url,
    method = "GET",
    headers,
    body,
  }: ModelRequestOptions) {
    const requestOptions: RequestInit = {
      method,
      headers,
    };

    if (method !== "GET" && method !== "HEAD") {
      requestOptions.body = JSON.stringify(body);
    }

    try {
      const resp = await fetch(url, requestOptions);
      if (!resp.ok) {
        throw Error("Błąd. Ponów próbę");
      } else {
        let data;
        if (body?.login) {
          data = await resp.text();
        } else if (method === "DELETE") {
          data = body?.id;
        } else {
          data = await resp.json();
        }
        return data;
      }
    } catch (err: any) {
      this.#createErrorPage();
    }
  }
}
