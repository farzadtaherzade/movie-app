<template>
  <p class="error" v-if="error">
    {{ errorMessage }}
  </p>
  <div class="auth">
    <div class="wrapper">
      <form @submit.prevent="doLogin">
        <h2>Sign In to ViMovies</h2>
        <div class="input-h">
          <input
            type="email"
            class="inputs"
            placeholder="Email"
            v-model="email"
          />
          <img src="../assets/icons/icons8-mail-18.png" alt="icon" />
        </div>
        <div class="input-h">
          <input
            type="password"
            class="inputs"
            placeholder="Password"
            v-model="password"
          />
          <img src="../assets/icons/icons8-lock-15.png" alt="icon" />
        </div>
        <button>Sign in</button>
        <div style="margin-top: 20px">
          Don't have an account?
          <router-link :to="{ name: 'SignUp' }" class="link"
            >Sign Up</router-link
          >
        </div>
      </form>
    </div>
    <Loading v-if="isLoading" />
  </div>
</template>
<script setup>
import Loading from "../components/Loading.vue";

import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const isLoading = ref(false);

const error = ref(false);
const errorMessage = ref(null);

function doLogin() {
  axios({
    method: "post",
    url: "http://localhost:3001/api/auth/login",
    header: {},
    data: {
      email: email.value,
      password: password.value,
    },
  })
    .then((res) => {
      error.value = false;
      errorMessage.value = null;

      store.commit("login", res.data);
      store.dispatch("onStart");
      // isLoading.value = true;
      setInterval(() => {
        router.push("/");
      }, 500);
    })
    .catch((err) => {
      console.log(err);
      error.value = true;
      errorMessage.value =
        "We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.";
    });
}
</script>
<style lang="scss" scoped>
.auth {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 486px;
    width: 355px;
    padding: 20px;
    background-color: #1a1a1a;
    color: #fff;
    border-radius: 25px;
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    h2 {
      margin-bottom: 35px;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 90%;
      .input-h {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 18px;
        input {
          width: 100%;
          background-color: #0d0d0d;
          border: none;
          padding: 12px 41px;
          border-radius: 17px;
          box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
          color: #fff;
          outline: none;
        }
        img {
          position: absolute;
          left: 14px;
          width: 18px;
        }
      }
      button {
        font-weight: 500;
        margin-top: 20px;
        padding: 10px;
        background: #c4c4c4;
        border-radius: 17px;
        border: none;
        cursor: pointer;
      }
      div {
        color: rgba($color: #fff, $alpha: 0.7);
        font-size: 13px;
        .link {
          color: rgba($color: #fff, $alpha: 0.7);
          text-decoration: underline;
        }
      }
    }
  }
}
.error {
  text-align: center;
  color: #fff;
  background-color: #ff5555;
  padding: 10px;
  font-size: 14px;
}
</style>
