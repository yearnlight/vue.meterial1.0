
import Vue from 'vue'

import App from './app.vue'

import { router } from './config'

import { sync } from 'vuex-router-sync'

import 'material-design-icons/iconfont/material-icons.css'

import store from './store'

sync(store, router)

const root = document.getElementsByTagName('body')[0]

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        name: 'SkyCloud',
        router,
        store,
        render: mount => mount(App)
    })

    router.onReady(() => {
        app.$mount(root)
    })
})