import "@babel/polyfill";
import axios from "axios";
require("es6-promise").polyfill();

const BASE_URL =
    window.location.port === "3000"
        ? "http://localhost:7500"
        : "https://www.beijaflore-atacado.com.br:7500";
//const BASE_URL = "https://www.beijaflore-atacado.com.br:7500";

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "Accept-Language": "pt-BR,pt;q=0.5"
    }
});

const Request = function(options) {
    const onSuccess =
        typeof options.onSuccess !== "undefined"
            ? options.onSuccess
            : response => {
                  console.debug(response);
                  return response.data;
              };
    const onError =
        typeof options.onError !== "undefined"
            ? options.onError
            : error => {
                  console.debug(error);
                  return false;
              };

    /*
    if (options.method == "GET") {
        options.url += (options.url.includes("?")) ? "&" : "?";
        options.url += "app_key=" + APP_KEY;
    } else {
        options.data.app_key = APP_KEY;
    }
    */

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export default Request;
