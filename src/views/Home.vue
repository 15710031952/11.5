<!--  -->
<template>
    <div class="Home">
      <div class="center">
        <router-view />
      </div>
      <div class="footer">
        <span v-for="(item,key) in list" :key="key" @click="btntab(key)">
          <!-- <router-link to="item.path">{{item.name}}</router-link> -->
          {{item.name}}
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      list:[//下方tab切换
        {name:'首页',path:'/home/one'},
        {name:'想法',path:'/home/two'},
        {name:'大学',path:'/home/three'},
        {name:'消息',path:'/home/four'},
        {name:'我的',path:'/home/five'}
      ]
    };
  },
  methods:{
    btntab(key){//点击进行tab切换
      this.$router.push(this.list[key].path)
    }
  }
}

</script>
<style lang='scss' scoped>
.Home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .center{
    flex: 1;
    overflow: auto;
  }
  .footer{
    height: 50px;
    display: flex;
    justify-content: space-around;
    span{
      line-height:50px;
    }
  }
}
</style>