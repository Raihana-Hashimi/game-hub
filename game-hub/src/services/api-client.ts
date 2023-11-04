import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e3c0a9d2b6b34e66950687689a834784",
  },
});
