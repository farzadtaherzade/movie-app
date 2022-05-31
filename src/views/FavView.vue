<template>
  <div class="favorites container">
    <div
      class="card-movie"
      v-for="movie in $store.state.resultData[
        $store.state.resultData.length - 1
      ]"
      :key="movie[2]"
    >
      <router-link
        :to="{ name: 'detailpage', params: { id: movie[0] } }"
        v-if="movie[3] == 'isMovie'"
        ><h2 class="title">{{ movie[2] }}</h2></router-link
      >
      <router-link
        :to="{ name: 'Tvdetailpage', params: { id: movie[0] } }"
        v-if="movie[3] == 'isTv'"
        ><h2 class="title">{{ movie[2] }}</h2></router-link
      >
      <img :src="`https://image.tmdb.org/t/p/w500${movie[1]}`" alt="" />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.favorites {
  padding: 9rem 3rem;
  display: flex;
  display: grid;
  grid-gap: 28px 30px;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: space-between;
  grid-gap: 25px 20px;
  transition: 0.4s ease-out;

  .card-movie {
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 3px 1px 2px rgb(2, 1, 0, 0.2);
    border-radius: 15px;
    .title {
      color: #fff;
      position: absolute;
      font-weight: 300;
      bottom: 40px;
      left: 10px;

      opacity: 0;
      transition: opacity 0.5s, transform 0.5s;
    }
    img {
      width: 100%;
      height: 382px;
      border-radius: 15px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: 0.3s;
      border-radius: 15px;
    }

    &:hover {
      transform: translateY(5px);
      .title,
      &::before {
        opacity: 1;
      }
      .title {
        transform: translateX(15px);
      }
    }
  }
  @media (max-width: 642px) {
    justify-content: center;
  }
}
</style>
