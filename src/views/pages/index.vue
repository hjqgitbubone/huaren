<template>
  <div class="Box">
    <!-- <div class="languageSetting" @click="changeLanguage">
      <span v-if="language == 'zh-cn'">EN</span>
      <span v-else-if="language == 'en'">中</span>
       
    </div> -->
    <div class="lun_Box">
      <Lun :zhi="lunArr"></Lun>
    </div>
    <div class="nav_box">
      <div class="uls">
        <ul>
          <li
            v-for="(item, index) in dataArr"
            :key="index"
            :class="iu == index ? 'on' : 'li'"
            @click="indexFn(index)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="dls">
        <dl v-for="(v, i) in dataArr[iu].items" :key="i" @click="infoFn(v.gid)">
          <dt><img :src="v.image" alt="" /></dt>
          <dd class="dd1">
            <p>{{ v.title }}</p>
            <p>{{ v.price }}</p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { getJson, getSwiper, getIndexList } from '../../api/index'
import Lun from '../../components/lun.vue'
export default {
  components: {
    Lun
  },
  props: {},
  data() {
    return {
      lunArr: [],
      lang: 'zh-CN',
      iu: 0,
      dataArr: [[{ items: '' }]]  //总数据
    };
  },
  computed: {},
  methods: {
    //点击切换中英文
    // changeLanguage() {

    // },
    //跳转详情
    infoFn(gid) {
      this.$router.push({
        path:'/info',
        query:{id:gid}
      })
    },
    //二级联动
    indexFn(i) {
      // console.log(i);
      this.iu = i
    },
    //首页数据
    async getIndexList() {
      const result = await getIndexList()
      console.log(result);
      if (result.status == 200) {
        this.dataArr = result.data.data
      }
    },
    //登录 接口sss大的
    async getJson() {
      const params = {
        cellphone: '15729051815',
        password: '123456',
      }
      const result = await getJson(params)
    },
    async getSwiper() {
      const result = await getSwiper()
      if (result.status == 200) {
        this.lunArr = result.data.data
      }
    }
  },
  created() {
    this.getJson()
    this.getSwiper()
    this.getIndexList()
  },
  mounted() { }
};
</script>
<style lang="less" scoped>
.Box {
  width: 100%;
  height: 100%;
  background: pink;
  display: flex;
  flex-direction: column;
  //切换中英文
  .languageSetting {
    width: 22px;
    height: 22px;
    line-height: 24px;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 600;
    flex-shrink: 0;
  }
  .on {
    color: red;
    font-weight: bold;
  }
  .lun_Box {
    width: 100%;
    height: 11.5rem;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .nav_box {
    flex: 1;
    overflow: auto;
    .uls {
      width: 100%;
      height: 60px;

      background: purple;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        li {
          display: flex;
          align-items: center;
          line-height: 60px;
        }
      }
    }
    .dls {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      dl {
        width: 49%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        dt {
          width: 100px;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .dd1 {
          font-size: 12px;
          width: 100px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>