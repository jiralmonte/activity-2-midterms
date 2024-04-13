import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProductView from '../views/AddProductView.vue'
import ProductListView from '../views/ProductListView.vue'
import EditProductView from '../views/EditProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: ProductListView
  },
  {
    path: '/addproduct',
    name: 'addproduct',
    component: AddProductView
  },
  {
    path: '/editproduct',
    name: 'editproduct',
    component: EditProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
