import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);
//Import components of routes
import Home from '@/components/Home';
import Login from '../layouts/login';
import About from '@/components/About';

var routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path:"/login",
        name:"Login",
        meta:{
          layout:"login"
        },
        component:Login
    },
    {
        path:"/dashboard",
        name:"Home",
        meta:{
          layout:"default"
        },
        component:Home
    },
    {
        path:"/about",
        name:"About",
        meta:{
          layout:"default"
        },
        component:About
    }
];

export default new Router({
    mode: 'history',
    routes
})