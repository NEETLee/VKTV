<template>
    <div class="home">
        <top-bar></top-bar>
        <van-swipe :autoplay="3000" :height="150">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <van-image :src="image"></van-image>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
    import TopBar from "../components/TopBar";

    export default {
        components: {TopBar},
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
            }
        }
    }
</script>
