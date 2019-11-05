<!--  -->
<template>
  <!-- 列表页面 -->
    <div class="List">
      <div v-for="(item) in list" :key="item.id" class="box">
          <p>
            <span>{{item.title}}</span>
            <span>{{item.description}}</span>
          </p>
          <img :src="item.banner">
          <p>{{`${item.favor}赞同,${item.comment}评论`}}</p>
      </div>
    </div>
</template>

<script>
export default {
    name:'.List',
  data () {
    return {
      list:[]
    };
  },
  methods:{
    
  }
  
}

</script>
<style lang='scss' scoped>
.List{
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: auto;
  .box{
    height: 100px;
    margin-top: 10px;
    background: #fff;
  }
}
</style>