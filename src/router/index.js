import { createRouter, createWebHistory } from 'vue-router'

// const Feedbacks = defineAsyncComponent({
//   loader: () => import('')
// })

const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credentials = () => import('../views/Credentials/index.vue')

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feedbacks',
      name: 'feedbacks',
      components: Feedbacks,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/credentials',
      name: 'credentials',
      components: Credentials,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Home' }
    }
  ]
})

export default router
