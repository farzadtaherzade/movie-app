<template>
    <nav :class="{change_color: scrollPosition > 50}">
        <div class="header">
            <div class="header-left">
                <router-link to="/" class="header-link">
                    <span>VI</span>Moives
                </router-link>

                <ul v-show="!mobile">
                    <router-link :to="{ name: 'home' }" class="link">Home</router-link>
                    <router-link to="/movies" class="link">Movies</router-link>
                    <router-link to="/movies" class="link">Tv Series</router-link>
                    <router-link to="/movies" class="link">Artists</router-link>
                </ul>
            </div>

            <div class="header-right" v-show="!mobile">
                <ul>
                    <router-link to="/movies" class="signup">SIGNUP</router-link>
                    <router-link to="/movies" class="signin">SIGNIN</router-link>
                </ul>
            </div>
            <div class="menu-btn" v-show="mobile" @click="toggleMobileNav" :class="{ open: mobileNav }">
                <div class="menu-btn-burger"></div>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="mobile-nav">
                    <router-link :to="{ name: 'home' }" class="link">Home</router-link>
                    <router-link to="/movies" class="link">Movies</router-link>
                    <router-link to="/movies" class="link">Tv Series</router-link>
                    <router-link to="/movies" class="link">Artists</router-link>
                    <router-link to="/movies" class="link">SIGNUP</router-link>
                    <router-link to="/movies" class="link">SIGNIN</router-link>
                </ul>
            </transition>
        </div>  </nav>
</template>

<script>
export default {
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            scrollPosition: null
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
};
</script>

<style lang="scss" scoped>
.change_color {
    background-color:#111;
}
nav {
    transition:background-color .4s ease-out;
    padding: 24px 1rem;
    height: 6rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .header-left {
            display: flex;
            align-items: center;

            ul {
                display: flex;
                align-items: center;
                margin-left: 30px;

                .link {
                    padding: 0 10px;
                }
            }

            .header-link {
                font-size: 35px;
                color: #fff;

                span {
                    color: #01ad77;
                }
            }
        }

        .header-right {
            .signup {
                padding: 13px 25px;
                border: 1px solid #fff;
                border-radius: 30px;
                margin-right: 10px;
                transition: all 0.3;

                &:hover,
                &:active {
                    color: #000;
                    background-color: #fff;
                }
            }

            .signin {
                padding: 13px 25px;
                border-radius: 30px;
                transition: all 0.3;

                &:hover,
                &:active {
                    color: #000;
                    background-color: #fff;
                }
            }
        }

        .menu-btn {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            // width: 30px;
            // height: 30px;
            cursor: pointer;
            // border: 1px solid #fff;
            transition: all 0.5s ease-in-out;

            .menu-btn-burger {
                width: 25px;
                height: 2px;
                background-color: #f9f9f9;
                // border-radius: ;
                box-shadow: 0 2px 5px rgba(255, 101, 75, 0.2);
                transition: all 0.5s ease-in-out;

                &::after,
                &::before {
                    content: "";
                    position: absolute;
                    width: 25px;
                    height: 2px;
                    background-color: #f9f9f9;
                    box-shadow: 0 2px 5px rgba(255, 101, 75, 0.2);
                    transition: all 0.5s ease-in-out;
                }

                &::before {
                    transform: translateY(-7px);
                }

                &::after {
                    transform: translateY(7px);
                }
            }
        }

        .open .menu-btn-burger {
            transform: translateX(-50px);
            background: transparent;
            box-shadow: none;

            &::before {
                transform: rotate(45deg) translate(35px, -35px);
            }

            &::after {
                transform: rotate(-45deg) translate(35px, 35px);
            }
        }

        .mobile-nav {
            width: 100%;
            height: 100%;
            max-width: 250px;
            display: flex;
            align-items: center;
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #303030;
            transition: all 0.7s ease;

            .link {
                width: 100%;
                padding: 13px;
                margin: 3px;
                transition: 0.1s;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;

                &:hover {
                    background-color: rgb(231, 76, 60, 0.03);
                }
            }

            .router-link-active {
                background-color: rgb(231, 76, 60, 0.03);
                border-right: 5px solid rgb(231, 76, 60);
            }
        }

        .mobile-nav-leave-active,
        .mobile-nav-enter-active {
            transition: all 0.7s ease;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
            transform: translateX(-250px);
        }

        .mobile-nav-enter-to {
            transform: translateX(0px);
        }
    }
}
</style>
