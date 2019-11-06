<!--  -->
<template>
    <!-- 首页 -->
    <div class="One">
        <div class="top">
            <router-link v-for="(item,index) in numlist" :key="index" tag='span' :to="item.path"> 
                {{item.name}}
            </router-link>
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
            {name:'关注',path:'/home/one/attention'},
            {name:'推荐',path:'/home/one/recommend'},
            {name:'热榜',path:'/home/one/hot'}
        ]
    };
  },
  methods:{
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