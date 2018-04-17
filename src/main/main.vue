<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <md-button title="隐藏菜单" class="md-icon-button" v-if="menuVisible" @click="toggleMenu">
                    <md-icon>keyboard_backspace</md-icon>
                </md-button>
                <md-button title="显示菜单" class="md-icon-button" v-if="!menuVisible" @click="toggleMenu">
                    <md-icon>menu</md-icon>
                </md-button>
                <h2 class="md-title" style="flex: 1">SkY FORM</h2>
                <md-menu md-size="medium" md-align-trigger md-direction="bottom-end">
                    <md-button title="主题" class="md-icon-button" md-menu-trigger>
                        <md-icon>invert_colors</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item @click="setTheme('default')">默认(亮蓝)</md-menu-item>
                        <md-menu-item @click="setTheme('black-green-light')">亮黑</md-menu-item>
                        <md-menu-item @click="setTheme('default-dark')">暗绿</md-menu-item>
                    </md-menu-content>
                </md-menu>
                <md-menu md-size="medium" md-align-trigger md-direction="bottom-end">
                    <md-button title="账户" class="md-icon-button" md-menu-trigger>
                        <md-icon>perm_identity</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item>账号：admin</md-menu-item>
                        <md-divider></md-divider>
                        <md-menu-item>角色：super</md-menu-item>
                        <md-menu-item>登录时间：2018-4-10 11:45:09</md-menu-item>
                    </md-menu-content>
                </md-menu>
                <md-button title="退出系统" class="md-icon-button" v-on:click="signOut">
                    <md-icon>power_settings_new</md-icon>
                </md-button>
            </md-app-toolbar>

            <md-app-drawer md-permanent="clipped" v-if="menuVisible">
                <md-list>

                    <router-link to="/resource" tag="md-list-item">
                        <md-icon>filter_drama</md-icon>
                        <span class="md-list-item-text">云资源</span>
                    </router-link>

                    <router-link to="/alarm" tag="md-list-item">
                        <md-icon>notifications_none</md-icon>
                        <span class="md-list-item-text">告警</span>
                    </router-link>

                    <router-link to="/event" tag="md-list-item">
                        <md-icon>event_note</md-icon>
                        <span class="md-list-item-text">事件</span>
                    </router-link>

                    <router-link to="/log" tag="md-list-item">
                        <md-icon>content_paste</md-icon>
                        <span class="md-list-item-text">日志</span>
                    </router-link>

                </md-list>
            </md-app-drawer>

            <md-app-content>
                <!--<keep-alive>-->
                    <router-view></router-view>
                <!--</keep-alive>-->
            </md-app-content>
        </md-app>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default{
        data(){
            return {
                menuVisible:true,
                prefix:"md-theme-",
                theme:"default",
                metaColors:false
            }
        },
        watch:{
            theme:function(n,o){//监控主题
                Vue.prototype.$material.theming.theme = n;//切换theme
            },
            "$route": "changeRoute"
        },
        methods:{
            changeRoute:function(){

            },
            getThemeName:function(e){//获取当前主题
                var t = e || this.theme;
                return this.prefix + t
            },
            setTheme:function(t){
                this.theme = t;
            },
            toggleMenu:function(){
                this.menuVisible = !this.menuVisible;
            },
            signOut:function () {

            }
        },
        computed:{
            themeTarget:function () {//获取当前主题载体
                return document.documentElement;
            }
        },
        mounted: function() {

        }
    }
</script>
<style scoped>
    .md-drawer{
        width: 250px;
    }
    .md-app{
        height: 100vh;
    }
    .md-list-item-default{
        cursor: pointer;
    }
    .md-list-item-default:hover{
        background-color: rgba(0,0,0,0.06);
    }
    .router-link-exact-active{
        background-color: rgba(0,0,0,0.06);
    }
</style>
