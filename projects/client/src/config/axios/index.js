import axios from "axios";
const baseURL = process.env.REACT_APP_API_BASE_URL;

export default axios.create({
  baseURL,
});

const axiosPrivate = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.request.use((req) => {
  const auth_token = localStorage.getItem("auth_token");

  if (auth_token) {
    req.headers.authorization = `Bearer ${auth_token}`;
  }

  return req;
});

axiosPrivate.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status === 401) {
      // window.location.href = "https://example.com/login";
      localStorage.removeItem("auth_token");
    }
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

export { axiosPrivate };
