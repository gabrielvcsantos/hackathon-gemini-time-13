import axios from "axios";

const Api = axios.create({
  baseURL: "https://itc-fvg-default-rtdb.firebaseio.com/",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export default Api;
