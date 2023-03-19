import { createRouter, createWebHistory } from 'vue-router'
import ArticleFormPage from '../pages/ArticleFormPage.vue'
import ArticlePage from '../pages/ArticlesPage.vue'
import SingleArticlePage from '../pages/SingleArticlePage.vue'
import AnalyticPage from '../pages/AnalyticPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ArticlePage,
  },
  {
    path: '/form',
    name: 'Form',
    component: ArticleFormPage,
  },
  {
    path: '/article/:id',
    name: 'article',
    component: SingleArticlePage,
  },
  {
    path: '/analytic',
    name: 'Analytic',
    component: AnalyticPage
  }
]
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router