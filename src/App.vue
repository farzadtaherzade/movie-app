<script setup>
import { ref, watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import Navigation from "./components/Navigation.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import axios from "axios";

const store = useStore();
onMounted(() => {
  store.dispatch("onStart");
});

const showNav = ref(true);
const route = useRoute();

watch(route, () => {
  if (route.name === "SignIn" || route.name === "SignUp") {
    showNav.value = false;
    return;
  }
  showNav.value = true;
});
</script>

<template>
  <Navigation v-if="showNav" />

  <RouterView />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Karla", sans-serif;
}

a,
li {
  text-decoration: none;
  list-style-type: none;
  color: #fff;
  transition: 0.2s;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

#app {
  background-color: #100f10;
  min-height: 100vh;
  position: relative;
}

.container {
  padding: 0 2rem;
}
</style>
