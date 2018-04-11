import Vue from 'vue'

import Axios from 'axios'

import VueRouter from 'vue-router'

const debug = process.env.NODE_ENV !== 'production'

import { routes } from './routes'

import VueMaterial from 'vue-material'

Vue.config.productionTip = false

import 'vue-material/dist/vue-material.min.css'

import 'vue-material/dist/theme/default.css'
// Vue.material.registerTheme('default', {
//     primary: 'blue',
//     accent: 'red',
//     warn: 'red',
//     background: 'grey'
// })
// Vue.material.setCurrentTheme('night')//设置当前主题
Vue.use(VueMaterial)

//应用http服务
Vue.prototype.$http = Axios

const mappedRoutes = routes.map(route => ({
    ...route,
    component: () => import(`./module/${route.page}`)
}))

//应用router
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: debug ? 'hash' : 'history',
    routes: mappedRoutes
})
