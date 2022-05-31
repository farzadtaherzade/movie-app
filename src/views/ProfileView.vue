<script setup>
import { useStore } from "vuex";

const store = useStore();

function updateProfile() {
  
}
</script>

<template>
  <div class="profile">
    <form>
      <div class="circel-name">{{ $store.state.data.last_name }}</div>
      <div class="inputs">
        <div class="input">
          <label for="f-name">First Name</label>
          <input
            type="text"
            id="f-name"
            v-model="$store.state.data.first_name"
          />
        </div>
        <div class="input">
          <label for="l-name">Last Name</label>
          <input
            type="text"
            id="l-name"
            v-model="$store.state.data.last_name"
          />
        </div>
        <div class="input">
          <label for="usernaem">Username</label>
          <input
            type="text"
            id="usernaem"
            v-model="$store.state.data.username"
          />
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="$store.state.data.email"
            disabled
          />
        </div>
      </div>
      <div class="buttons">
        <button @click="updateProfile">Save Change</button>
        <button @click="$store.commit('logout')">Log out</button>
      </div>
    </form>
  </div>
</template>
http://localhost:3001/api/auth/

<style lang="scss" scoped>
.profile {
  padding: 8rem 0;
  max-width: 828px;
  color: #fff;
  margin: 0 auto;
  max-height: 100vh;
  form {
    margin-top: 20px;
    width: 100%;
    min-height: 712px;
    padding: 10px;
    background-color: #141414;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    .circel-name {
      width: 100px;
      height: 100px;
      border: 1px solid #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: 900;
    }
    .inputs {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .input {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        width: 100%;
        input {
          width: 100%;
          height: 44px;
          padding: 0 21px;
          margin-top: 20px;
          border-radius: 10px;
          border: none;
          outline: none;
          background-color: rgba(217, 217, 217, 10%);
          color: #f6f6f6;
        }
      }
    }
    button {
      padding: 15px;
      margin-top: 30px;
      border-radius: 10px;
      border: none;
      outline: none;
      background-color: rgba(217, 217, 217, 10%);
      color: #fff;
      font-weight: 300;
      font-size: 15px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background-color: rgba(217, 217, 217, 5%);
      }
      &:nth-of-type(2) {
        padding: 15px 30px;
        margin-left: 20px;
        margin-right: 30px;
        background-color: rgba(212, 20, 20, 0.993);
      }
    }
  }
}
</style>
