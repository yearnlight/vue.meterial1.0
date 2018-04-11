//异步逻辑
import Vue from 'vue'
import * as types from './mutation-types'

export default {
    [types.CHANGE_THEME] ({ commit }, theme) {
        Vue.material.theming.theme = theme
        commit(types.CHANGE_THEME, theme)
    }
}