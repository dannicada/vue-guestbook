import Vue from 'vue'
import VueRouter from 'vue-router'

import GuestTable from './components/GuestTable.vue'
import GuestForm from './components/GuestForm.vue'
import Welcome from './components/Welcome'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    //base: '/home',

    routes: [
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

export default router;