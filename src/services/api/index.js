import axios from "axios";
import { API_ENDPOINTS } from "services/api/config";

export default function dispatchAPI({ endpoint, id, payload = {} }) {
  const { method, url } = API_ENDPOINTS[endpoint];
  return axios[method](`${url}${id}`);
}
