<template>
    <div class="top-bar">
        <van-icon :style="{display:prevDisplay}" size="1.5rem" name="arrow-left"/>
        <van-search style="flex: 1;" placeholder="搜歌名、搜歌手" shape="round" v-model="search"/>
        <van-icon name="music-o" size="1.5rem" info="40"/>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        data() {
            return {
                search: "",
                prevDisplay: "auto"
            }
        },
    }
</script>

<style scoped>
    .top-bar {
        /*width: 100%;*/
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1vh 1rem;
    }
</style>