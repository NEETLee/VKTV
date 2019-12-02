<template>
    <div id="app">
        <van-notice-bar color="#1989fa" background="#ecf9ff" :text=notice left-icon="volume-o"
                        mode="closeable"/>
        <router-view/>
        <floating-ball :theme-color="themeColor" :init-position="initPosition"
                       :popover-events="popoverEvents"></floating-ball>
        <van-tabbar v-model="active">
            <van-tabbar-item to="/" icon="home-o">点歌</van-tabbar-item>
            <van-tabbar-item to="/personal" icon="search">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: 0,
                themeColor: "#316745",
                notice: "欢迎尊贵的VIP5 NEET来到包间，祝您玩得开心~~~",
                initPosition: "50 right",
                popoverEvents: [
                    {
                        parentName: "App",
                        eventName: "show-data-airplane",
                        iconName: "ion ion-ios-airplane",
                        showName: "airplane"
                    },
                    {
                        parentName: "App",
                        eventName: "show-data-football",
                        iconName: "ion ion-ios-american-football",
                        showName: "football"
                    },
                    {
                        parentName: "App",
                        eventName: "show-data-appstore",
                        iconName: "ion ion-ios-appstore",
                        showName: "appstore"
                    },
                    {
                        parentName: "App",
                        eventName: "show-data-github",
                        iconName: "ion ion-logo-github",
                        showName: "github"
                    },
                    {parentName: "App", eventName: "show-data-css3", iconName: "ion ion-logo-css3", showName: "css3"},
                    {
                        parentName: "App",
                        eventName: "show-data-html5",
                        iconName: "ion ion-logo-html5",
                        showName: "html5"
                    }]
            }
        },
        created() {
            this.$on("show-data-add", this.ShowDataAdd);
            this.$on("show-data-heart", this.ShowDataHeart);
            this.$on("show-data-airplane", this.ShowDataAirplane);
            this.$on("show-data-football", this.ShowDataFootball);
            this.$on("show-data-appstore", this.ShowDataAppstore);
            this.$on("show-data-github", this.ShowDataGithub);
        },
        methods: {
            ShowDataAdd() {
                window.console.log("点击了Add图标");
            },
            ShowDataHeart() {
                window.console.log("点击了Heart图");
            },
            ShowDataAirplane() {
                window.console.log("点击了Airplane图标");
            },
            ShowDataFootball() {
                window.console.log("点击了Football图标");
            },
            ShowDataAppstore() {
                window.console.log("点击了Appstore图标");
            },
            ShowDataGithub() {
                window.console.log("点击了Github图标");
            }
        }
    }
</script>
<style>

</style>
