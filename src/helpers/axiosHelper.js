import axios from "axios";

const axiosHelper = () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });
};

export default axiosHelper