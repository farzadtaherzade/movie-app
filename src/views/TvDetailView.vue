<script setup>
import Loading from "../components/Loading.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";
import CreditsMovieSlider from "../components/CreditsMovieSlider.vue";
//logo
import PlaySvg from "@/assets/icons/play2.svg";

const route = useRoute();
const paramsId = route.params.id;

const isLoaded = ref(false);

const moviesData = ref();
const moviesTrailer = ref();
const credits = ref();
onMounted(() => {
  document.onreadystatechange = () => {
    if (document.readystate == "complete") {
      isLoaded.value = true;
    }
  };
});

axios
  .get(
    `https://api.themoviedb.org/3/tv/${paramsId}?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US`
  )
  .then((res) => {
    moviesData.value = res.data;
    isLoaded.value = true;
    console.log(res.data);
  });

axios
  .get(
    `https://api.themoviedb.org/3/tv/${paramsId}/videos?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US`
  )
  .then((res) => {
    moviesTrailer.value =
      res.data.results[Math.floor(Math.random() * res.data.results.length)].key;
  });
axios
  .get(
    `https://api.themoviedb.org/3/tv/${paramsId}/credits?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US`
  )
  .then((res) => {
    credits.value = res.data.cast.slice(0, 20);
  });
</script>

<template>
  <div
    class="banner-movies"
    :style="{
      'background-image': `url(https://image.tmdb.org/t/p/w500${moviesData.backdrop_path})`,
    }"
  ></div>
  <div class="detail" v-if="isLoaded">
    <div class="movies-detail-wrapper">
      <img
        :src="`https://image.tmdb.org/t/p/w500${moviesData.poster_path}`"
        alt
        class="banner"
      />

      <div class="right">
        <div class="title-save-movie">
          <h1>{{ moviesData.name }}</h1>
          <div class="imdb-wrap">
            <p>
              {{ moviesData.vote_average }}
              <span style="font-size: 15px">/10</span>
            </p>
            <span class="line"></span>
            <span class="vote_count">{{ moviesData.vote_count }}K Vote</span>
            <img
              src="https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png"
              alt="imdb"
              class="imdb"
            />
          </div>
        </div>
        <h2>Tagline: "{{ moviesData.tagline }}"</h2>
        <div class="networks">
          <h2>Networks:</h2>
          <h3 v-for="networks in moviesData.networks" :key="networks.id">
            {{ networks.name }}<span></span>
          </h3>
        </div>
        <div class="episode-runtime">
          <h2>Episode Runtim :</h2>
          <div
            class="h3"
            v-for="episode_run_time in moviesData.episode_run_time"
            :key="episode_run_time.id"
          >
            <h3>{{ episode_run_time }}</h3>
            <span></span>
          </div>
          Minutes
        </div>
        <h2>
          Released:
          {{
            new Date(moviesData.last_air_date).toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
        </h2>

        <!-- <h2>Revenue: {{
                    moviesData.revenue.toLocaleString('en-us', {
                        style: 'currency',
                        currency: 'USD'
                    })
                }}</h2> -->
        <h2>Overview: {{ moviesData.overview }}</h2>
        <div class="button">
          <a
            :href="`https://www.youtube.com/watch?v=${moviesTrailer}`"
            target="_blank"
            class="watch-trailer"
          >
            <img :src="PlaySvg" alt="PlaySvg" style="" />
            <strong>WATCH TRAILER</strong></a
          >
          <button class="btn-add">
            <span></span>
          </button>
        </div>
      </div>
    </div>
    <CreditsMovieSlider :credits="credits" />
  </div>
  <Loading v-if="!isLoaded" />
</template>

<style lang="scss" scoped>
.banner-movies {
  position: relative;
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
  background-repeat: no-repeat;
  background-position: center;
  // box-shadow: -5px 5px -5px -1px rgba(0, 0, 0, 1);

  @media (max-width: 1028px) {
    height: 60vh;
    background-position: center;
  }

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
    height: 100px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(#000, 0));
  }
}

.detail {
  width: 100%;
  min-height: 200vh;
  margin-top: -300px;
  @media (min-width: 1030px) {
    margin-top: -340px;
    min-height: 100vh;
  }

  .movies-detail-wrapper {
    position: relative;
    // transform: translateY(-290px);
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 0px 10%;

    @media (min-width: 1028px) {
      display: flex;
      align-items: flex-end;
      flex-direction: row;
      top: 120px;
    }

    .banner {
      max-width: 250px;
      height: fit-content;
      border-radius: 25px;

      @media (min-width: 1028px) {
        // height: 35rem;
        max-width: 350px;
      }
    }

    .imdb-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      .imdb {
        width: 45px;
        border-radius: 4px;
        margin-top: 5px;
      }

      p {
        color: #e6b91e;
        font-size: 18px;

        span {
          color: #b6910e;
        }
      }

      .line {
        width: 100%;
        height: 2px;
        margin-top: 8px;
        margin-bottom: 8px;
        background: #ffc107;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      color: #fff;
      margin-top: 20px;

      @media (min-width: 1028px) {
        margin-left: 50px;
      }

      .button {
        display: flex;
        align-items: center;

        .watch-trailer {
          display: flex;
          align-items: center;
          background-color: #fff;
          color: #000;
          cursor: pointer;
          padding: 18px 25px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-weight: 900;

          transition: background-color 0.3s;

          img {
            width: 24px;
            margin-right: 10px;
          }

          &:hover {
            background-color: #fffa;
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

      .title-save-movie {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icons-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .vote_count {
          font-weight: 500;
          font-size: 0.8rem;
          margin-bottom: 0.2rem;
        }

        h1 {
          font-weight: bold;
          font-size: 2rem;
          color: #fff;

          @media (min-width: 1028px) {
            font-size: 3rem;
          }
        }
      }

      h2 {
        margin-bottom: 2rem;
        font-size: 17px;

        @media (min-width: 1028px) {
          font-size: 20px;
        }
      }

      .networks,
      .episode-runtime {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        h2 {
          margin-bottom: 0;
          margin-right: 5px;
        }

        .h3:not(:last-child) {
          display: flex;

          h3 {
            display: flex;
            align-items: center;
          }

          span::after {
            content: "-";
            background-clip: #fff;
            display: inline-block;
          }
        }

        .h3:last-child {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
