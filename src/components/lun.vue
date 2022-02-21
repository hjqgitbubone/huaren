<template>
  <div class="lun">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
         <van-swipe-item v-for="(v,i) in zhi" :key="i">
                <img :src="v.image" alt="">
         </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['zhi'],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
     img{
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>