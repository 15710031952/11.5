<!--  -->
<template>
<!-- 详情页面 -->
    <div class="Detail">
        <div class="top">
            <button @click="back">返回</button>
        </div>
        <div class="center">

        </div>
    </div>
</template>

<script>
export default {
    name:'Detail',
  data () {
    return {

    };
  },
  created:{
    //   shi(){
    //     console.log(this.$route);
    //   }
  },
  methods:{
      back(){//点击返回上一页
          this.$router.back()
      }
  }
}

</script>
<style lang='scss' scoped>
.Detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top{
        height: 50px;
    }
    .center{
        flex: 1;
    }
}
</style>