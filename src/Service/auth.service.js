import axios from "axios";

const API_URL = "http://localhost:3000/user";

class AuthService {
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
      });
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
