import axios from "axios";
const instance = axios.create({
  baseURL: "https://edgistify-9cc2e.firebaseio.com/",
});
export default instance;
