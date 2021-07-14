import axios from "axios";
const { API_URL } = process.env;

const api = axios.create({
  baseURL: "http://zssn-backend-example.herokuapp.com/api",
});

export { api };
