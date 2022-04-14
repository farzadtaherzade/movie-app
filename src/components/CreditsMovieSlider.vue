<template>
    <div class="slider">
        <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
            clickable: true,
        }" :breakpoints="{
    '@0.00': {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    '@0.75': {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    '@1.00': {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    '@1.50': {
        slidesPerView: 5,
        spaceBetween: 50,
    },
}" :modules="modules" class="mySwiper">
            <swiper-slide v-for="credit in credits" :key="credit">
                <router-link :to="{ name: 'Artistdetailpage', params: { id: credit.id } }"><img
                        :src="`https://image.tmdb.org/t/p/w500${credit.profile_path}`" alt="">
                </router-link>
                <h5>{{ credit.name }}</h5>
                <h5>{{ credit.character }}</h5>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['credits'],
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>

<style lang="scss" scoped>
.slider {
    width: 100%;
    padding: 0px 10%;
    cursor: grab;
    margin-top: 100px;

    @media (min-width:1028px) {
        margin-top: 200px;
    }

    &:active {
        cursor: grabbing;
    }

    color: #fff;
}

.swiper {
    width: 100%;
    height: 100%;

}

.swiper-pagination {
    // top: 200px;
}

.swiper-slide {
    font-size: 18px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;

    h5 {
        display: flex;
        flex-direction: column;


        margin-bottom: 20px;
    }

    h5:first-child {}

    background-color: #1a171e;
    padding: 10px;
    border-radius: 20px;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

    cursor: pointer;
}
</style>