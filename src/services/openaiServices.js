import axios from "axios";
import { url } from "config/environment";

// Generate Content
// async function fetchData(payload) {
//   const response = await axios.post(
//     `${url.baseUrl}api/generateContent`,
//     payload
//   );
//   return response.data;
// }

// SIGN-UP WITH EMAIL AND PASSWORD
function fetchData(payload) {
  return axios({
    method: "post",
    url: `${url.baseUrl}api/generateContent`,
    data: payload,
  })
    .then(async function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export const openaiServices = {
  fetchData,
};
