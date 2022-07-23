
<script setup>
import Movie from './Movie.vue';
import Tv from './Tv.vue';
import axios from 'axios'

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from 'vue'

const windowWidth = ref(null)

const movies = ref({})
const tv_s = ref({})
axios
  .get('https://api.themoviedb.org/3/trending/movie/day?api_key=a67aeb2a76989aba8a19ccda9d5879ba')
  .then((res) => {
    movies.value.Trending = res.data.results
  })

axios
  .get('https://api.themoviedb.org/3/movie/top_rated?api_key=a67aeb2a76989aba8a19ccda9d5879ba')
  .then((res) => {
    movies.value['Top Rated'] = res.data.results
  })
axios
  .get('https://api.themoviedb.org/3/movie/popular?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US&page=1')
  .then((res) => {
    movies.value.Popular = res.data.results
  })
axios
  .get('https://api.themoviedb.org/3/movie/upcoming?api_key=a67aeb2a76989aba8a19ccda9d5879ba')
  .then((res) => {
    movies.value.UpComing = res.data.results
  })

// tv

axios
  .get('https://api.themoviedb.org/3/trending/tv/day?api_key=a67aeb2a76989aba8a19ccda9d5879ba')
  .then((res) => {
    tv_s.value.Trending = res.data.results
  })

axios
  .get('https://api.themoviedb.org/3/tv/top_rated?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US&page=1')
  .then((res) => {
    tv_s.value['Top Rated'] = res.data.results
  })
axios
  .get('https://api.themoviedb.org/3/tv/popular?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US&page=1')
  .then((res) => {
    tv_s.value.Popular = res.data.results
  })

// get detail movie
const moonfall = ref({})
const turning = ref({})
const the_batman = ref({})
const spider = ref({})
const death_on_the_nile = ref({})

axios
  .get(`https://api.themoviedb.org/3/movie/406759?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US`)
  .then((res) => {
    moonfall.value = res.data
  })
axios
  .get(`https://api.themoviedb.org/3/movie/508947?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US`)
  .then((res) => {
    turning.value = res.data
  })
axios
  .get(`https://api.themoviedb.org/3/movie/414906?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US`)
  .then((res) => {
    the_batman.value = res.data
  })
axios
  .get(`https://api.themoviedb.org/3/movie/634649?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US`)
  .then((res) => {
    spider.value = res.data
  })
axios
  .get(`https://api.themoviedb.org/3/movie/505026?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US`)
  .then((res) => {
    death_on_the_nile.value = res.data
  })
</script>


<template>
  <div class="hero">
    <swiper class="mySwiper">
      <swiper-slide :style="{ 'background-image': `url(https://images3.alphacoders.com/120/thumb-1920-1208433.jpg)` }">
        <div class="movies-info">
          <div class="left">
            <h1>{{ moonfall.title }}</h1>
            <div class="data-movie">
              <span>{{ moonfall.release_date }}</span>
              <span>{{ moonfall.runtime }} minuts</span>
              <span v-for="genre in moonfall.genres" :key="genre">{{ genre.name }}</span>
            </div>
            <p>{{ moonfall.overview }}</p>
            <div class="buttons">
              <router-link class="btn-info" :to="{ name: 'detailpage', params: { id: `${moonfall.id}` } }">Get More Info
              </router-link>
              <button class="btn-add">
                <span></span>
              </button>
            </div>
          </div>
          <div class="right">
            <img :src="`https://image.tmdb.org/t/p/w500${moonfall.poster_path}`" :alt="moonfall.title" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :style="{ 'background-image': `url(https://images.alphacoders.com/121/thumb-1920-1212063.jpg)` }">
        <div class="movies-info">
          <div class="left">
            <h1>{{ turning.title }}</h1>
            <div class="data-movie">
              <span>{{ turning.release_date }}</span>
              <span>{{ turning.runtime }} minuts</span>
              <span v-for="genre in turning.genres" :key="genre">{{ genre.name }}</span>
            </div>
            <p>{{ turning.overview }}</p>
            <div class="buttons">
              <router-link class="btn-info" :to="{ name: 'detailpage', params: { id: `${turning.id}` } }">Get More Info
              </router-link>
              <button class="btn-add">
                <span></span>
              </button>
            </div>
          </div>

          <div class="right">
            <img :src="`https://image.tmdb.org/t/p/w500${turning.poster_path}`" :alt="turning.title" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        :style="{ 'background-image': `url(https://images2.alphacoders.com/120/thumb-1920-1209249.jpg)` }">
        <div class="movies-info">
          <div class="left">
            <h1>{{ the_batman.title }}</h1>
            <div class="data-movie">
              <span>{{ the_batman.release_date }}</span>
              <span>{{ the_batman.runtime }} minuts</span>
              <span v-for="genre in the_batman.genres" :key="genre">{{ genre.name }}</span>
            </div>
            <p>{{ the_batman.overview }}</p>

            <div class="buttons">
              <router-link class="btn-info" :to="{ name: 'detailpage', params: { id: `${the_batman.id}` } }">Get More
                Info</router-link>
              <button class="btn-add">
                <span></span>
              </button>
            </div>
          </div>

          <div class="right">
            <img :src="`https://image.tmdb.org/t/p/w500${the_batman.poster_path}`" :alt="the_batman.title" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :style="{ 'background-image': `url(https://images2.alphacoders.com/117/thumb-1920-1170277.jpg)` }">
        <div class="movies-info">
          <div class="left">
            <h1>{{ spider.title }}</h1>
            <div class="data-movie">
              <span>{{ spider.release_date }}</span>
              <span>{{ spider.runtime }} minuts</span>
              <span v-for="genre in spider.genres" :key="genre">{{ genre.name }}</span>
            </div>
            <p>{{ spider.overview }}</p>

            <div class="buttons">
              <router-link class="btn-info" :to="{ name: 'detailpage', params: { id: `${spider.id}` } }">Get More Info
              </router-link>
              <button class="btn-add">
                <span></span>
              </button>
            </div>
          </div>

          <div class="right">
            <img :src="`https://image.tmdb.org/t/p/w500${spider.poster_path}`" :alt="spider.title" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :style="{ 'background-image': `url(https://images7.alphacoders.com/121/thumbbig-1210134.webp)` }">
        <div class="movies-info">
          <div class="left">
            <h1>{{ death_on_the_nile.title }}</h1>
            <div class="data-movie">
              <span>{{ death_on_the_nile.release_date }}</span>
              <span>{{ death_on_the_nile.runtime }} minuts</span>
              <span v-for="genre in death_on_the_nile.genres" :key="genre">{{ genre.name }}</span>
            </div>
            <p>{{ death_on_the_nile.overview }}</p>

            <div class="buttons">
              <router-link class="btn-info" :to="{ name: 'detailpage', params: { id: `${death_on_the_nile.id}` } }">Get
                More Info</router-link>
              <button class="btn-add">
                <span></span>
              </button>
            </div>
          </div>
          <div class="right">
            <img :src="`https://image.tmdb.org/t/p/w500${death_on_the_nile.poster_path}`"
              :alt="death_on_the_nile.title" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <Movie v-for="(movie, title) in movies" :movie="movie" :title="title" :key="movie" />
  <Tv v-for="(tv, title) in tv_s" :movie="tv" :title="title" :key="tv" />
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  // height: 73vh;
  position: relative;
  width: 100%;
  height: 100%;

  .carousel {
    height: 250px;
    width: 100%;
    position: relative;

    .switch-left,
    .switch-right {
      color: white;
      font-weight: bold;
      height: 100%;
      width: 45px;
      line-height: 250px;
      text-align: center;
      font-size: 25px;
      top: 0;
      z-index: 3;
    }

    .switch-left {
      position: absolute;
      left: 50px;
    }

    .switch-right {
      position: absolute;
      right: 50px;
    }

    .carousel-box {
      height: 250px;
      width: auto;
      overflow: scroll;
      white-space: nowrap;
      display: inline-block;
      text-align: center;
      padding-bottom: 10px !important;
      display: flex;
      align-items: center;
    }
  }
}

h1 {
  color: #fff;
  font-size: 7rem;
}

.mySwiper {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  font-size: 18px;

  .movies-info {
    position: absolute;
    top: 7rem;
    padding: 0 10%;

    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1028px) {
      flex-direction: column-reverse;
      justify-content: center;
      top: 5rem;
      text-align: center;
    }

    @media (max-width: 579px) {
      padding: 0 5%;
      top: 10rem;
      text-align: center;
      align-items: flex-start;
    }

    // flex-basis: 50%;
    .right {
      img {
        max-width: 25rem;
        border-radius: 20px;

        @media (max-width: 1028px) {
          max-width: 15rem;
        }

        @media (max-height:660px) and (max-width: 579px) {
          display: none;
          max-width: 10rem;
        }

        @media (max-width: 579px) {
          display: none;

        }
      }
    }

    .left {
      margin-top: 3rem;

      @media (max-width: 1028px) {
        margin-top: 1rem;

        h1 {
          font-size: 2.4rem;
        }

        .buttons {
          justify-content: center;
          margin-top: 12rem;
        }

        p {
          font-size: 17px;
          margin: 10px 0;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          /* number of lines to show */
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }

      @media (max-height:690px) and (max-width: 579px) {
        margin-top: 1rem;

        h1 {
          font-size: 2.4rem;
          margin-bottom: 1rem;
        }

        .buttons {
          // justify-content: flex-start;
          margin-top: 12rem;
        }

        p {
          font-size: 15px;
          overflow: none;
          text-overflow: none;
          -webkit-line-clamp: 10;
        }
      }

      .buttons {
        display: flex;
        justify-content: none;
        align-items: center;
        width: 100%;
        margin-top: 2rem;

        .btn-info {
          background-color: #7600ff;

          color: #fff;
          border: 1px solid #7600ff;
          padding: 15px 30px;
          cursor: pointer;
          font-size: 1em;
          border-radius: 12px;

          transition: background-color 0.3s, border-radius 0.4s;

          &:hover,
          &:active {
            border-radius: 25px;
            background-color: #7700ffc4;
          }
        }

        .btn-add {
          width: 50px;
          height: 50px;
          background-color: transparent;
          margin-left: 20px;
          border: 1px solid #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s;
          cursor: pointer;

          span {
            display: block;
            width: 30px;
            height: 1px;
            background-color: #fff;

            &::after {
              content: "";
              display: block;
              width: 30px;
              height: 1px;
              transform: rotate(90deg);
              background-color: #fff;
            }
          }

          &:hover {
            background-color: #fff;
            border: 1px solid #000;

            span,
            span::after {
              background-color: #000;
            }
          }
        }
      }
    }

    .data-movie {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      width: 100%;

      span {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 16px;

        &:not(:last-child)::after {
          content: "•";
          margin: 0 8px;
          font-size: 20px;
        }

        @media (max-width: 1028px) {
          font-size: 11px;
        }

        @media (max-height:690px) and (max-width: 579px) {
          font-size: 11px;
          word-wrap: break-word;
        }
      }

      @media (max-width: 1028px) {
        margin-bottom: 10px;
        justify-content: center;
      }

      @media (max-height:690px) and (max-width: 579px) {
        margin-bottom: 10px;
        justify-content: center;
      }
    }

    p {
      color: #fff;
      margin: 15px 0;
      font-size: 20px;
    }
  }
}

.swiper-slide {
  // display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
  background-repeat: no-repeat;
  background-position: center;
  // box-shadow: -5px 5px -5px -1px rgba(0, 0, 0, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.6);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(#000, 0));
  }
}
</style>
