<script>
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Hero,
    Footer
  },
  data() {
    return {
      
    }
  },
  method() {

  },
}
</script>

<template>
  <div class="home">
    <Hero />
    <!-- <Footer /> -->
  </div>
</template>

<style lang="scss" scoped>
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
  padding: 0 2rem;
}

// app transitions
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.container {
  // padding: 0 2rem;

}

</style>