import Vue from 'vue'
import VueRouter from 'vue-router'

import Reveal from './components/Reveal.vue'
import GuestTable from './components/GuestTable.vue'
import GuestForm from './components/GuestForm.vue'
import Welcome from './components/Welcome'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome
            
        },
        {
            path: '/Reveal',
            name: 'Reveal',
            component: Reveal
            
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