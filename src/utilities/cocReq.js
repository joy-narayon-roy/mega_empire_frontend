import axios from "axios";

function cocReq() {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });
}

export default cocReq;
