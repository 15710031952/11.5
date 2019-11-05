<!--  -->
<template>
    <!-- 首页 -->
    <div class="One">
        <div class="top">
            <span v-for="(item,index) in numlist" :key="index" @click="btntab(index)"> 
                {{item.name}}
            </span>
        </div>
        <div class="center">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name:'One',
  data () {
    return {
        numlist:[//三个路由 三个组件
            {name:'关注',path:'/home/one/list'},
            {name:'推荐',path:'/home/one/tui'},
            {name:'热榜',path:'/home/one/hot'}
        ]
    };
  },
  methods:{
      btntab(key){//点击跳转
          this.$router.push(this.numlist[key].path)
      }
  }
}

</script>
<style lang='scss' scoped>
.One{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top{
        height: 50px;
        display: flex;
        justify-content: space-around;
        span{
            width: 33%;
            line-height: 50px;
            text-align: center;
        }
    }
    .center{
        flex: 1;
        overflow: auto;
        // background: #eee;
    }
}
</style>