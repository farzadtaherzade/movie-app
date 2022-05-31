import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

// axios.defaults.headers.common["x-auth-token"] = store.state.token
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
