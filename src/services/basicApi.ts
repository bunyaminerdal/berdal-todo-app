import axios from "axios";

const basicApi = axios.create();
basicApi.defaults.headers.post["Content-Type"] = "application/json";
basicApi.defaults.headers.put["Content-Type"] = "application/json";
basicApi.defaults.headers.patch["Content-Type"] = "application/json";

export default basicApi;
