import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

// View
import MovieDetailView from "../views/MovieDetailView.vue";
import TvDetailView from "../views/TvDetailView.vue";
import ArtistDetailView from "../views/ArtistDetailView.vue";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import FavView from "../views/FavView.vue";
import TvView from "../views/TvView.vue";
import ArtistsView from "../views/ArtistsView.vue";
import ProfileView from "../views/ProfileView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView,
    },
    {
      path: "/tv",
      name: "tv",
      component: TvView,
    },
    {
      path: "/artists",
      name: "artists",
      component: ArtistsView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavView,
    },
    {
      path: "/movies/:id",
      name: "detailpage",
      component: MovieDetailView,
    },
    {
      path: "/tv/:id",
      name: "Tvdetailpage",
      component: TvDetailView,
    },
    {
      path: "/artist/:id",
      name: "Artistdetailpage",
      component: ArtistDetailView,
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: LoginView,
      meta: { loginRedirect: true },
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: RegisterView,
      meta: { loginRedirect: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.state.isAuthenticated) {
      next();
    } else {
      next("/sign-in");
    }
  } else if (to.meta.loginRedirect) {
    if (store.state.isAuthenticated) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
