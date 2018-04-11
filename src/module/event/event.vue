<template>
    <div>
        <md-menu md-size="medium" md-align-trigger md-direction="bottom-end">
            <md-button title="账户" class="md-icon-button md-primary md-raised" md-menu-trigger>
                <md-icon>perm_identity</md-icon>
            </md-button>

            <md-menu-content>
                <md-menu-item>账号：admin</md-menu-item>
                <md-menu-item>角色：super</md-menu-item>
                <md-menu-item>登录时间：2018-4-10 11:45:09</md-menu-item>
            </md-menu-content>
        </md-menu>

        <md-menu md-size="big" md-direction="bottom-end">
            <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>near_me</md-icon>
            </md-button>

            <md-menu-content>
                <md-menu-item>
                    <span>Find on map</span>
                    <md-icon>near_me</md-icon>
                </md-menu-item>

                <md-menu-item>
                    <span>Call</span>
                    <md-icon>phone</md-icon>
                </md-menu-item>
            </md-menu-content>
        </md-menu>
    </div>
</template>