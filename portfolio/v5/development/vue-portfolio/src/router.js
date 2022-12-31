import Vue from 'vue'; // jshint ignore:line
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
        {path:'/', name:'Landing', component: () =>import('./components/Lander')},

    ]
});

export default router;