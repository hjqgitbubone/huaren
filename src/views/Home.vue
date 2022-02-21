<template>
  <div class="home">
    <header></header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/shop">购物车</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 6.25rem;
    background: blue;
  }
  section {
    flex: 1;
  }
  footer {
    width: 100%;
    height: 50px;
    background: purple;
  }
}
</style>
