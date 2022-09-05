import axios from "axios";
import { BASE_URL } from "../containers/Constant/Constant";
import { Store } from "../Redux/Store/Store";

const token = sessionStorage.getItem("token");



const axiosInstace = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosInstace.interceptors.request.use((req) => {
  const { auth }= Store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axiosInstace.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const { status } = error.response;
    if (status === 500) {
      // localStorage.clear();
      // Store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
  }
);

export default axiosInstace;
