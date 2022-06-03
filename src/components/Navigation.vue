<template>
  <nav :class="{ change_color: scrollPosition > 50 }">
    <div class="header">
      <div class="header-left">
        <router-link to="/" class="header-link">
          <span>VI</span>Moives
        </router-link>

        <ul v-show="!mobile">
          <router-link :to="{ name: 'home' }" class="link">Home</router-link>
          <router-link :to="{ name: 'movies' }" class="link"
            >Movies</router-link
          >
          <router-link :to="{ name: 'tv' }" class="link">Tv Series</router-link>
          <router-link :to="{ name: 'artists' }" class="link"
            >Artists</router-link
          >
        </ul>
      </div>

      <div
        class="menu-btn"
        @click="toggleMobileNav"
        :class="{ open: mobileNav }"
        v-if="mobile"
      >
        <div class="menu-btn-burger"></div>
      </div>

      <div class="header-right" v-show="!mobile">
        <ul :class="{ d: $store.state.isAuthenticated }">
          <router-link
            :to="{ name: 'SignIn' }"
            class="signup"
            v-if="!$store.state.isAuthenticated"
            >SIGN IN</router-link
          >
          <router-link
            :to="{ name: 'SignUp' }"
            class="signin"
            v-if="!$store.state.isAuthenticated"
            >SIGN UP</router-link
          >
          <router-link
            :to="{ name: 'favorites' }"
            class="fav-icon"
            v-if="true"
          >
            <div class="num">
              <small v-if="$store.state.resultData.length < 1">0</small>
              <small v-if="$store.state.resultData.length > 0">{{
                $store.state.resultData[$store.state.resultData.length - 1]
                  .length
              }}</small>
            </div>
            <img src="../assets/icons/icons8-heart-25.png" alt=""
          /></router-link>
          <router-link
            class="name"
            v-if="$store.state.isAuthenticated"
            :to="{ name: 'profile' }"
            >{{ this.$store.state.data.first_name.charAt(0) }}
            {{ this.$store.state.data.last_name.charAt(0) }}</router-link
          >
        </ul>
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="mobile-nav">
          <router-link :to="{ name: 'home' }" class="link">Home</router-link>
          <router-link :to="{ name: 'movies' }" class="link"
            >Movies</router-link
          >
          <router-link :to="{ name: 'tv' }" class="link">Tv Series</router-link>
          <router-link :to="{ name: 'artists' }" class="link"
            >Artists</router-link
          >
          <router-link
            :to="{ name: 'SignIn' }"
            class="link"
            v-if="!$store.state.isAuthenticated"
          >
            SIGN IN</router-link
          >
          <router-link
            :to="{ name: 'SignUp' }"
            class="link"
            v-if="!$store.state.isAuthenticated"
          >
            SIGN UP
          </router-link>
          <div class="icons">
            <router-link
              class="name"
              v-if="$store.state.isAuthenticated"
              :to="{ name: 'profile' }"
              >{{ this.$store.state.data.first_name.charAt(0) }}
              {{ this.$store.state.data.last_name.charAt(0) }}</router-link
            >
            <router-link
              :to="{ name: 'favorites' }"
              class="fav-icon"
              v-if="!$store.state.isAuthenticated"
            >
              <div class="num">
                <small v-if="$store.state.resultData.length < 0">0</small>
                <small v-if="$store.state.resultData.length > 0">{{
                  $store.state.resultData[$store.state.resultData.length - 1]
                    .length
                }}</small>
              </div>
              <img src="../assets/icons/icons8-heart-25.png" alt=""
            /></router-link>
          </div>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      scrollPosition: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
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
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
.change_color {
  background-color: #111;
}
nav {
  transition: background-color 0.4s ease-out;
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
      ul {
        // display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 14px;
          border: 1px solid #fff;
          border-radius: 50%;
          margin-right: 10px;
          width: 46px;
          height: 46px;
          transition: all 0.3s;
          cursor: pointer;
          &:hover,
          &:active {
            color: #000;
            background-color: #fff;
          }
        }
        .num {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 23px;
          height: 23px;
          position: absolute;
          background-color: #f00;
          border-radius: 50%;
          top: -6px;
          left: -6px;
          small {
          }
        }
        .fav-icon {
          position: absolute;
          top:5px;
          right:250px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 14px;
          border: 1px solid #fff;
          border-radius: 50%;
          margin-right: 10px;
          width: 44px;
          height: 44px;
          img {
            width: 30px;
          }
        }
        .signup {
          padding: 13px 25px;
          border-radius: 30px;
          border: 1px solid #fff;
          margin-right: 10px;
          width: 44px;
          height: 44px;
          transition: all 0.3s;
          cursor: pointer;
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
    }
    .menu-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 30px;
      cursor: pointer;
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
      .icons {
        display: flex;
        margin-top: auto;
        margin-bottom: 30px;

        .fav-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 14px;
          border: 1px solid #fff;
          border-radius: 50%;
          margin-right: 10px;
          width: 44px;
          height: 44px;
          .num {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 23px;
            height: 23px;
            position: absolute;
            background-color: #f00;
            border-radius: 50%;
            top: -6px;
            left: -6px;
            small {
            }
          }
          img {
            width: 30px;
          }
        }
        .name {
          padding: 12px 13px;
          border: 1px solid #fff;
          border-radius: 50%;
          margin-right: 10px;
          width: 44px;
          height: 44px;
          transition: all 0.3;
          cursor: pointer;
          &:hover,
          &:active {
            color: #000;
            background-color: #fff;
          }
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
.d {
  display: flex;
}
</style>
