<template>
    <div id="app">
      <router-view/>
      <van-tabbar v-model="active">
          <van-tabbar-item to="/home" icon="home-o">标签</van-tabbar-item>
          <van-tabbar-item icon="search">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: 0
            }
        }
    }
</script>
<style>

</style>
