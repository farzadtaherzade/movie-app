<template>
  <div class="slider">
    <div class="title-all">
      <h1 class="movie-showCase-title">{{ props.title }} Movies</h1>
      <h3>View all</h3>
    </div>
    <div class="swiper-wrapper">
      <swiper
        :slidesPerView="slides"
        :spaceBetween="spaceSlides"
        :slidesPerGroup="1"
        :loop="false"
        :pagination="{
          clickable: true,
        }"
        :navigation="false"
        class="mySwiper"
      >
        <swiper-slide v-for="movies in props.movie" :key="movies.id">
          <!-- {{movies}} -->
          <img
            :src="`https://image.tmdb.org/t/p/w500${movies.poster_path}`"
            :alt="movies.title"
            class="cover-movie"
          />
          <div class="icons-wrapper">
            <div class="left-icon-area">
              <img src="../assets/icons/save.png" alt="save movie" />
            </div>
            <div class="right-icon-area">
              <span class="number">
                {{ movies.vote_average }}
                <span style="font-size: 10px;">/10</span>
              </span>
              <span class="line"></span>
              <img src="../assets/icons/imdb.png" alt="imdb-logo" />
            </div>
          </div>
          <div class="link">
            <router-link :to="{ name: 'detailpage', params: { id: movies.id } }">
              <img src="../assets/icons/play.png" class="play-icon" alt="see movie" />
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { ref } from "vue";

const slides = ref(5);
const spaceSlides = ref(null);

const windowWidth = ref(null);

// check scren for Defin Slides per View
function checkScreen() {
  windowWidth.value = window.innerWidth;

  if (windowWidth.value <= 1000) {
    slides.value = 3;
    spaceSlides.value = 100;
  } else if (windowWidth.value <= 1100) {
    slides.value = 4;
    spaceSlides.value = 100;
  } else if (windowWidth.value <= 1430) {
    slides.value = 4;
    spaceSlides.value = 100;
  } else {
    slides.value = 7;
    spaceSlides.value = 100;
  }
  if (windowWidth.value <= 800) {
    slides.value = 3;
    spaceSlides.value = 100;
  }
  if (windowWidth.value <= 600) {
    slides.value = 2;
    spaceSlides.value = 50;
  }
  if (windowWidth.value <= 320) {
    slides.value = 1;
    spaceSlides.value = 0;
  }
}
// check screen
window.addEventListener("resize", checkScreen);
checkScreen();

// get movies
const props = defineProps(['movie', 'title'])

</script>

<style lang="scss" scoped>
.slider {
  margin-top: 47px;
  padding: 0px 1.7rem;
  z-index: 1;
  overflow: hidden;

  .title-all {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    margin-bottom: 32px;
    .movie-showCase-title {
      color: #fff;
      font-size: 24px;
    }
    h3 {
      color: #fff;
      font-size: 14px;
    }
  }
}

.swiper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}
.swiper-slide {
  margin-left: 30px;

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  position: relative;
  font-size: 18px;
  // z-index: 1;

  &:hover {
    .cover-movie {
      backdrop-filter: blur(10px);
      filter: blur(4px);
      transition: 0.1s ease;
      z-index: 2;
    }
    .icons-wrapper {
      opacity: 1;
    }
    .play-icon {
      display: block;
      opacity: 1;
      visibility: visible;
    }
  }

  .icons-wrapper {
    width: 14rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    top: 10px;
    padding: 0 10px;

    transition: all 0.3s ease;
    opacity: 0;
    .left-icon-area,
    .right-icon-area {
      padding: 6px;
    }
    .right-icon-area {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      .number {
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
      .line {
        width: 100%;
        height: 1px;
        margin-top: 1px;
        background: #ffc107;
      }
      img {
        margin-top: 2px;
        padding: 0 2px;
        box-shadow: none;
      }
    }
    .left-icon-area {
      img {
        padding: 5px;
        background-color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        border-radius: 50px;
      }
    }
  }
  .link {
    position: absolute;
    top: 40%;
    min-width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: #fff;
    z-index: 100;
  }
  .play-icon {
    background: transparent;
    box-shadow: none;
    border-radius: 50%;

    transition: all 0.3s ease;
    display: none;
    visibility: hidden;
    opacity: 0;
    cursor: pointer;
  }
}
.swiper-slide:last-child{
  margin-right: 202px;
}
.swiper-slide .cover-movie {
  // display: nno;
  max-width: 19rem;
  border-radius: 19px;
  // object-fit: contain;
  max-height: 330px;

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
}
.swiper-slide:hover img {
  transition-delay: 0.1s;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
}
@media (max-width: 800px) {
  .swiper-slide .cover-movie {
    max-width: 17rem;
  }
}
@media (max-width: 425px) {
  .swiper-slide .cover-movie {
    max-width: 15rem;
  }
}

@media (max-width: 400px) {
  .swiper-slide .cover-movie {
    max-width: 12rem;
    border-radius: 2px;
    // margin-right: 20px;
  }
}
</style>
