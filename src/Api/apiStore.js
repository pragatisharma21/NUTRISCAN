import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  withCredentials: true,
  timeout: 120000,
});

apiClient.interceptors.request.use(
  function (config) {
    const token = JSON.parse(localStorage.getItem("authToken"));

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Authorization Header:", config.headers.Authorization);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const loginUser = (data) => {
  return apiClient.post("/user/login", data);
};

const signupUser = (data) => {
  return apiClient.post("/user/signup", data);
};

const addDish = (data) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  return apiClient.post("/dish/addDish", data);
};


export { loginUser, signupUser, addDish };
