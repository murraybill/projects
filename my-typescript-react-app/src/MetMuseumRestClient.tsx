export default class MetMuseumRestClient {


  public getObjectIds = (): Promise<Response> => {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=austria';

    return fetch(url, {
      method: "GET", // The method
      mode: "cors", // It can be no-cors, cors, same-origin
      credentials: "same-origin", // It can be include, same-origin, omit
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json", // Your headers
        Accept: "application/json",
      },
    });
  };
}
