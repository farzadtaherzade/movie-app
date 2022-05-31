import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    isAuthenticated: false,
    token: null,
    data: [],
    moviesData: [],
    resultData: [],
  },
  mutations: {
    login(state, token) {
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
        localStorage.setItem("token", token);
      } else {
        state.isAuthenticated = false;
        state.token = null;
        localStorage.removeItem("token");
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token");
    },
    setProfile(state, data) {
      state.data = data;
      console.log(state.data);
    },
    addMovie(state, movie) {
      state.moviesData.push(movie);
      let uniqueArray = Array.from(
        new Set(state.moviesData.map(JSON.stringify)),
        JSON.parse
      );
      state.resultData.push(uniqueArray);
    },
  },
  actions: {
    onStart(context) {
      let token = localStorage.getItem("token");
      if (token) {
        axios
          .get("http://localhost:3001/api/auth/me", {
            headers: { "x-auth-token": token },
          })
          .then((res) => {
            context.commit("setProfile", res.data);
            context.commit("login", token);
          })
          .catch((err) => {
            context.commit("logout");
          });
      } else {
        context.commit("logout");
      }
    },
  },
});

export default store;
