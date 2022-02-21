<template>
  <div class="child_Box">
      <h2>首尔</h2>
         <!-- 匿名插槽 -->
      <slot></slot>
      <hr>
         <!-- 具名插槽 -->
      <div class="t1">
           <slot name="tou"></slot>
      </div>
      <div class="t2">
          <slot name="main"></slot>
      </div>
       <!-- 作用域插槽 -->
      <div>
        <slot name="son" :user="user">子组件数据{{user.firstName}}</slot>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        user: {
            firstName: '黄家琦',
            lastName: '李知恩'
          }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
    .t1,.t2{
        width: 100px;
        height: 70px;
        background: purple;
    }
    .t2{
        width: 100px;
        height: 70px;
        background: yellow;
    }
</style>