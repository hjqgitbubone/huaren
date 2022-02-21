<template>
  <div class="Box">
      <div class="lun_Box" >
         <Lun :zhi="lunArr"></Lun>
      </div>
  </div>
</template>

<script>
import {getJson,getSwiper} from '../../api/index'
import Lun from '../../components/lun.vue'
export default {
  components: {
    Lun
  },
  props: {},
  data() {
    return {
      lunArr:[]
    };
  },
  computed: {},
  methods: {
    //登录 接口sss大的
    async getJson(){
       const params = {
          cellphone:'15729051815',
          password: '123456',
      }
      const result = await getJson(params)
     // console.log(result);s
    },
    async getSwiper(){
      const result = await getSwiper()
      console.log(result);
      if(result.status == 200){
        this.lunArr = result.data.data
      }
    }
  },
  created() {
    this.getJson()
    this.getSwiper()
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.Box{
    width: 100%;
    height: 100%;
    background: pink;
}
  .lun_Box{
    width: 100%;
    height: 10.5rem;
    background: green;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>