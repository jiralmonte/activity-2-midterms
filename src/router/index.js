import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
import AddProductView from '../views/AddProductView.vue'
import ProductListView from '../views/ProductListView.vue'
import EditProductView from '../views/EditProductView.vue'
=======
import ProductView from '@/views/ProductView.vue'
>>>>>>> upstream/master

const routes = [
  {
    path: '/',
    name: 'Products',
    component: ProductView
  },
<<<<<<< HEAD
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
=======
>>>>>>> upstream/master
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
