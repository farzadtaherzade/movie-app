<template>
    <div class="all-movies container" v-if="isLoading">
        <div class="filter">
            <form class="form" @submit.prevent="doSearch">
                <div class="search">
                    <img src="../assets/icons/icons8-search.svg" class="search-icon" alt="search-icon">
                    <input type="text" class="Search" placeholder="Search tv" v-model="searchTv" />
                </div>
                <h2>Tv searies</h2>
            </form>
        </div>
        <div class="movies" v-if="!resultPage">
            <div class="movie" v-for="(movie, index) in movies" :key="index">
                <router-link :to="{ name: 'Tvdetailpage', params: { id: `${movie.id}` } }"><img
                        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.name">
                </router-link>
                <router-link class="link" :to="{ name: 'Tvdetailpage', params: { id: `${movie.id}` } }">{{ movie.name }}
                </router-link>
            </div>
        </div>
        <div class="movies" v-if="resultPage">
            <div class="movie" v-for="(movie, index) in searchResult.results" :key="index">
                <router-link :to="{ name: 'Tvdetailpage', params: { id: `${movie.id}` } }"><img
                        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.name">
                </router-link>
                <router-link class="link" :to="{ name: 'Tvdetailpage', params: { id: `${movie.id}` } }">{{ movie.name }}
                </router-link>
            </div>
        </div>
        <paginate v-if="!resultPage" v-model="page" :page-count="10" :page-range="3" :margin-pages="3"
            :click-handler="clickCallback" :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'"
            :page-class="'page-item'">
            <!-- 
            <span slot="prevContent">Changed previous button</span>
            <span slot="nextContent">Changed next button</span>
            <span slot="breakViewContent">
                <svg width="16" height="4" viewBox="0 0 16 4">
                    <circle fill="#999999" cx="2" cy="2" r="2" />
                    <circle fill="#999999" cx="8" cy="2" r="2" />
                    <circle fill="#999999" cx="14" cy="2" r="2" />
                </svg>
            </span> -->
        </paginate>
        <paginate v-if="resultPage" v-model="page" :page-count="10" :page-range="3" :margin-pages="3"
            :click-handler="clickCallbackSearch" :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'"
            :page-class="'page-item'">
            <!-- 
            <span slot="prevContent">Changed previous button</span>
            <span slot="nextContent">Changed next button</span>
            <span slot="breakViewContent">
                <svg width="16" height="4" viewBox="0 0 16 4">
                    <circle fill="#999999" cx="2" cy="2" r="2" />
                    <circle fill="#999999" cx="8" cy="2" r="2" />
                    <circle fill="#999999" cx="14" cy="2" r="2" />
                </svg>
            </span> -->
        </paginate>
    </div>
    <Loading v-if="!isLoading" />
</template>
<script setup>
import Loading from '../components/Loading.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue';
import Paginate from "vuejs-paginate-next";
const test = document.querySelector('.genre')

const isLoading = ref(false)
const resultPage = ref(false)

const movies = ref(null)
const searchTv = ref('')
const searchResult = ref('')



const page = ref(1)

function clickCallback(pageNum) {
    isLoading.value = false
    page.value = pageNum

    axios
        .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US&page=${page.value}`)
        .then((res) => {
            movies.value = res.data.results
            isLoading.value = true
        })
}

function clickCallbackSearch(pageNum) {
    isLoading.value = false
    page.value = pageNum

    axios
        .get(`https://api.themoviedb.org/3/search/tv?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US&query=${searchTv.value}&page=${page.value}`)
        .then((res) => {
            searchResult.value = res.data
            isLoading.value = true
            resultPage.value = true
        })

}
function doSearch() {
    if (searchTv.value != '') {
        isLoading.value = false

        axios
            .get(`https://api.themoviedb.org/3/search/tv?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US&query=${searchTv.value}&page=1`)
            .then((res) => {
                searchResult.value = res.data
                isLoading.value = true
                resultPage.value = true
            })

    }
}


clickCallback(1)

// clickCallbackSearch(1)
</script>

<style lang="scss" scoped>
.all-movies {
    padding: 6rem 0;
    width: 100%;
    // height: 100vh;
    // display: flex;
    // // flex-direction: column;
    // // justify-content: space-between;

    .filter {
        .form {
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap-reverse;

            @media (max-width:435px) {
                justify-content: center
            }

            width: 100%;
            height: 90px;
            color: #fff;
            background-color: #1a171e;
            border-radius: 15px;


            h2 {
                color: #fff;
            }

            .search {
                position: relative;
                display: flex;
                align-items: center;

                input {
                    background-color: #111;
                    border: none;
                    outline: none;
                    color: #fff;
                    min-width: 17rem;
                    padding: 15px 2rem;
                    border-radius: 50px;

                    &::placeholder {
                        color: #fff;
                    }
                }

                .search-icon {
                    position: absolute;
                    width: 17px;
                    left: 10px;
                }
            }
        }
    }

    .pagination {
        cursor: pointer;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        margin-top: 20px;
    }

    .page-item {
        // padding: 5px 13px;
        margin-right: 10px;
        margin-top: 30px;

        .page-link {
            padding: 10px 20px;
            border-radius: 5px;
        }

        &:not(&.disabled):hover {
            .page-link {
                background-color: #fff;
                color: #000;
            }

        }

        &.active {
            .page-link {
                background-color: #fff;
                color: #000;
            }
        }
    }

    .movies {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        .movie {
            padding: 15px;
            margin: 10px 0;
            width: 250px;
            border-radius: 40px;
            background-color: #1a171e;

            img {
                width: 100%;
                border-radius: 40px;
            }

            .link {
                color: #fff;
                margin-left: 7px;
                max-width: 300px;
                margin-top: 10px;
                font-size: 18px;
                font-weight: 500;

                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                /* number of lines to show */
                line-clamp: 1;
                -webkit-box-orient: vertical;
            }

            .genre_ids {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: row;

                div {
                    h3 {
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>