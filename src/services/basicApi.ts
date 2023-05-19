import axios from "axios";

const basicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
basicApi.defaults.headers.post["Content-Type"] = "application/json";
basicApi.defaults.headers.put["Content-Type"] = "application/json";
basicApi.defaults.headers.patch["Content-Type"] = "application/json";
basicApi.defaults.headers.common["Access-Control-Allow-Origin"] =
  "https://todo.bunyaminerdal.com.tr";
basicApi.defaults.headers.common["Access-Control-Allow-Origin"] =
  "https://berdal-todo.vercel.app";

export default basicApi;
