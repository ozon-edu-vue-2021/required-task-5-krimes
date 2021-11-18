import { Axios } from "axios";

const base = new Axios({
  baseURL: "https://random-data-api.com/api/",
  responseType: "json",
});

export default base;
