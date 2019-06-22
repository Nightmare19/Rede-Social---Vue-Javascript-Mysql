import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginComponent from './components/login.vue'
import Profile from './components/profile.vue'
import Registar from './components/registar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/registar",
      name: "registar",
      component: Registar
    }
  ]
})
