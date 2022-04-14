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
            <swiper-slide v-for="profile in profiles" :key="profile"><img :src="`https://image.tmdb.org/t/p/w500${profile.file_path}`" alt=""></swiper-slide>
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
    props: ['profiles'],
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
    height: fit-content;
    padding: 0px 10%;    cursor: grab;
    &:active {
        cursor: grabbing;
    }
}

.swiper {
    width: 100%;
    height: 100%;

}
.swiper-pagination {
    // top: 200px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    // background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
</style>