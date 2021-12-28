import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_CLOUD_FUNCTIONS_URL, // The API {cloud function}
});

export default instance;
