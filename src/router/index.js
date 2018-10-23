import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);
//Import components of routes
import Home from '@/components/Home';
import About from '@/components/About';

var routes = [
    {
        path:"/",
        name:"Home",
        meta:{
          layout:"default"
        },
        component:Home
    },{
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