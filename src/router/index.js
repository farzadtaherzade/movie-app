import { createRouter, createWebHistory } from 'vue-router'
import MovieDetailView from '../views/MovieDetailView.vue'
import TvDetailView from '../views/TvDetailView.vue'
import ArtistDetailView from '../views/ArtistDetailView.vue'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import TvView from '../views/TvView.vue'
import ArtistsView from '../views/ArtistsView.vue'

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
      path: '/tv',
      name: 'tv',
      component: TvView
    },
    {
      path: '/artists',
      name: 'artists',
      component: ArtistsView
    },
    {
      path: '/movies/:id',
      name: 'detailpage',
      component: MovieDetailView
    },
    {
      path: '/tv/:id',
      name: 'Tvdetailpage',
      component: TvDetailView
    },
    {
      path: '/artist/:id',
      name: 'Artistdetailpage',
      component: ArtistDetailView
    },
  ]
})

export default router
