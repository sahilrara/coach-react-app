import Axios from "axios";
// export let SERVER_URL =
// "https://1bcd-2409-4051-211-582e-1c47-5a50-5e11-34df.ngrok.io";
// export let SERVER_URL = "https://coach-backend-new.herokuapp.com";
export let SERVER_URL = "https://b6d5-103-240-193-34.ngrok.io";

export let PUBLIC_URL = `${SERVER_URL}/api/v1`;

export async function axiosRequest(method, url, data = null) {
  try {
    const token = localStorage.getItem("coach-champion-admin");
    let response;
    if (token) {
      response = await Axios({
        method: method,
        url: `${PUBLIC_URL}${url}`,
        headers: {
          "x-api-key": token,
        },
        data: data,
      });
    } else {
      response = await Axios({
        method: method,
        url: `${PUBLIC_URL}${url}`,
        data: data,
      });
    }
    return await response.data;
  } catch (error) {
    return error;
  }
}
