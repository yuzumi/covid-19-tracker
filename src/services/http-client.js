import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const httpClient = axios.create({
  baseURL
});

export default httpClient;