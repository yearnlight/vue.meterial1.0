<template>
    <div>
        <md-steppers>
            <md-step id="first" md-label="基础信息">
                <form novalidate @submit.stop.prevent="showSnackbar = true">
                    <div>
                        <div for="snackbar-center" class="md-body-2">Position</div>
                        <md-radio v-model="position" id="snackbar-center" name="snackbar-horizontal" value="center">Centered</md-radio>
                        <md-radio v-model="position" id="snackbar-left" name="snackbar-horizontal" value="left">Left</md-radio>
                    </div>

                    <div>
                        <div class="md-body-2">Duration</div>

                        <md-switch v-model="isInfinity">Infinite</md-switch>

                        <md-field>
                            <label for="snackbar-duration">Miliseconds</label>
                            <md-input type="number" id="snackbar-duration" v-model.number="duration" :disabled="isInfinity"></md-input>
                        </md-field>
                    </div>

                    <md-button type="submit" class="md-primary md-raised">Open Snackbar</md-button>

                    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
                        <span>Connection timeout. Showing limited messages!</span>
                        <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
                    </md-snackbar>
                </form>
            </md-step>

            <md-step id="second" md-label="主机信息">
                <div>
                    <md-progress-bar md-mode="indeterminate"></md-progress-bar>
                    <md-progress-bar class="md-accent" md-mode="indeterminate"></md-progress-bar>
                </div>
            </md-step>

            <md-step id="third" md-label="配置信息">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
            </md-step>
        </md-steppers>
    </div>
</template>

<script>
    export default {
        name: 'StepperHorizontal'
    }
</script>