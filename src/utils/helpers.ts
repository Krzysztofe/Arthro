import { ModelRequestOptions } from "./../sharedModels/modelrequestOptions";
import { HttpRequest } from "../services/httpReuest";

export class Helpers {
  static fetchData(requestOptions: ModelRequestOptions) {
    const request = new HttpRequest();
    return request.sendRequest(requestOptions);
  }
}
