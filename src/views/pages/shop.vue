<template>
  <div class="wrapper">
          <Child>
             <!-- 匿名插槽 -->
              <div class="c1">这是插槽</div>
              
               <!-- 具名插槽 -->
              <template v-slot:tou> <h3>这是头</h3></template><br>
              <template v-slot:main><div>身体</div></template>

              <!-- 作用域插槽 -->
              <template v-slot:son="scope">作用于插槽例子:{{scope.user.lastName}}</template>
            
          </Child> 
         <div>这是test分支</div>
  </div>
  
</template>

<script>
import Child from '../../components/child.vue'
export default {
  components: {Child},
  props: {},
  data() {
    return {
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
  .c1{
    width: 100px;
    height: 51px;
    border: 1px solid red;
    background: linear-gradient(to right;cyan,palegreen,yellow);
    
  }
</style>