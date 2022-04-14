<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Navigation />

  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Karla', sans-serif;
}

a , li{
  text-decoration: none;
  list-style-type: none;
  color: #fff;
  transition: .2s;
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