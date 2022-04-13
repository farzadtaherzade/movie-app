import { createRouter, createWebHistory } from 'vue-router'
import MovieDetailView from '../views/MovieDetailView.vue'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import TvDetailView from '../views/TvDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/movies/:id',
      name: 'detailpage',
      component: MovieDetailView
    },
    {
      path: '/Tv/:id',
      name: 'Tvdetailpage',
      component: TvDetailView
    },
  ]
})

export default router
