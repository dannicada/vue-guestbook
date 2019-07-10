import Vue from 'vue'
import VueRouter from 'vue-router'

import GuestTable from './components/GuestTable.vue'
import GuestForm from './components/GuestForm.vue'
import Welcome from './components/Welcome'
import Callback from './components/Callback.vue'

import auth from '../auth/authService'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/#/',
    routes: [

        {
            path: '/callback',
            name: 'callback',
            component: Callback
        },
        {
            path: "/",
            component: Welcome,
        },
        {
            path: '/home',
            name: 'Welcome',
            component: Welcome
            
        },
        {
            path: '/GuestForm',
            name: 'GuestForm',
            component: GuestForm
            
        },
        {
            path: '/GuestTable',
            name: 'GuestTable',
            component: GuestTable
            
        },
        
    ]
});

router.beforeEach((to, from, next) => {
    if (to.path === "/" || to.path === "/callback" || to.path === "/home" || to.path === "/GuestForm" || auth.isAuthenticated()) {
      return next();
    }
  
   
    auth.login({ target: to.path });
  });

export default router;