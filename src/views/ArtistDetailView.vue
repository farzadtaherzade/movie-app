<script setup>
import ArtistMovieSlider from '../components/ArtistMovieSlider.vue'
import Loading from '../components/Loading.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios';

//logo
import PlaySvg from '@/assets/icons/play2.svg'

const route = useRoute()
const paramsId = route.params.id

const isLoaded = ref(false)

const moviesData = ref();
const moviesTrailer = ref();
const profiles = ref()
onMounted(() => {
    document.onreadystatechange = () => {
        if (document.readystate == 'complete') {
            isLoaded.value = true
        }
    }
})

axios
    .get(`https://api.themoviedb.org/3/person/${paramsId}?api_key=a67aeb2a76989aba8a19ccda9d5879ba&language=en-US`)
    .then((res) => {
        moviesData.value = res.data
        isLoaded.value = true
    })

axios
    .get(`
https://api.themoviedb.org/3/person/${paramsId}/images?api_key=a67aeb2a76989aba8a19ccda9d5879ba`)
    .then((res) => {
        profiles.value = res.data.profiles
    })

</script>

 <template>
    <div class="detail" v-if="isLoaded">
        <div class="movies-detail-wrapper">
            <img :src="`https://image.tmdb.org/t/p/w500${moviesData.profile_path}`" alt class="banner" />

            <div class="right">
                <div class="title-save-movie">
                    <h1>{{ moviesData.name }}</h1>
                </div>
                <h2>Gender: {{ moviesData.gender == 2 ? "Male" : "Female" }}</h2>
                <div class="networks">
                    <h2>Known For Ddepartment: </h2>
                    <h3>
                        {{ moviesData.known_for_department }}
                    </h3>
                </div>
                <h2>
                    Birthday: {{
                        new Date(moviesData.birthday).toLocaleString('en-us', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })
                    }} in {{moviesData.place_of_birth}}
                </h2>

                <!-- <h2>Revenue: {{
                    moviesData.revenue.toLocaleString('en-us', {
                        style: 'currency',
                        currency: 'USD'
                    })
                }}</h2> -->
                <h2>biography: {{ moviesData.biography }}</h2>
            </div>
        </div>
        <ArtistMovieSlider :profiles=profiles />
    </div>
    <Loading v-if="!isLoaded" />
</template>

<style lang="scss" scoped>
.detail {
    width: 100%;
    min-height: 148vh;

    @media (min-width:1028px) {
        min-height: 130vh;
    }

    .banner-movies {
        position: relative;
        width: 100%;
        height: 50vh;
        background-size: cover;
        background-color: #fff;
        background-image: linear-gradient(rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.4));
        background-repeat: no-repeat;
        background-position: center;
        // box-shadow: -5px 5px -5px -1px rgba(0, 0, 0, 1);

        @media (max-width:1028px) {
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

    .movies-detail-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;

        padding: 8rem 10%;

        @media (min-width:1028px) {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
        }

        .banner {
            max-width: 250px;
            height: fit-content;
            border-radius: 25px;

            @media (min-width:1028px) {
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

            @media (min-width:1028px) {
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

                    transition: background-color .3s;

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
                    font-size: .8rem;
                    margin-bottom: .2rem;
                }

                h1 {
                    font-weight: bold;
                    font-size: 2rem;
                    color: #fff;

                    @media (min-width:1028px) {
                        font-size: 3rem;
                    }
                }
            }

            h2 {
                margin-bottom: 2rem;
                font-size: 17px;

                @media (min-width:1028px) {
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