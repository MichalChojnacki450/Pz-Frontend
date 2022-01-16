import axios from "axios";

// const API_URL = "http://localhost:3000/user";
const API_URL = "http://127.0.0.1:3000/user";

class AuthService {
<<<<<<< Updated upstream
  login(email, password) {
    return axios
      .post(API_URL + "/login", {
        email: email,
        password: password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
=======
  async login(email, password) {
    const response = await axios
      .post(API_URL + "/login", {
        email:email,
        password:password
>>>>>>> Stashed changes
      });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "/register", {
      name: username,
      email: email,
      password: password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
