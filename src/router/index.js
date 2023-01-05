import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView'
import AccountActivation from '../views/AccountActivation'
import AccountCreated from '../views/AccountCreated'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: HomeView
  },
  {
    path: '/Data',
    name: 'DataPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/Dashboard/:Project',
    name: 'DashboardPage',
    component: RegisterView

  },
  {
    path: '/Home',
    name: 'HomePage',
    component: AccountActivation
  },
  {
    path: '/AccountCreated',
    name: 'AccountCreated',
    component: AccountCreated
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
