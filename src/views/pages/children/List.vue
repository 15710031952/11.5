<!--  -->
<template>
  <!-- 列表页面 -->
    <div class="List" ref="wrap">
      <div>
        <div v-for="(item) in list" :key="item.id" class="box">
          <div class="item">
            <p>
              <span>{{item.title}}</span>
              <span>{{item.description}}</span>
            </p>
            <img :src="item.banner">
          </div>
          <p>{{`${item.favor}赞同,${item.comment}评论`}}</p>
        </div>
      </div>
      
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'.List',
  data () {
    return {
      page: 1,
      pageSize: 10,
      type: '',
      list: []
    };
  },
  computed:{

  },

  methods:{
    async getData(){
            let data = await axios.get(`/api/list?type=${this.type}&page=${this.page}&pageSize=10`)
            if (this.page==1){
                this.list=data.data;
            }else{
                if(data.data.length===0){
                    alert('拉到底了');
                }
                this.list=[...this.list, ...data.data];
            }
        }
  },
  watch: {
        $route:function(){
            this.type=this.$route.params['type'];
            this.page=1;
            this.getData();
        }
    },
  mounted(){
        this.type=this.$route.params['type'];
        this.getData();
        // 添加滚动事件
        let ele=this.$refs.wrap;
        ele.onscroll=async(e)=>{
            if(this.isFetching){
                return;
            }
            let height=ele.offsetHeight,
                scrollTop=ele.scrollTop,
                childHeight=ele.children[0].offsetHeight;            

            if (height+scrollTop>childHeight-20){
                this.isFetching=true;
                this.page++;
                await this.getData();
                this.isFetching=false;
            }   
        }
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
    margin-top:.3rem;
    padding: 0 .4rem;
    background: #fff;
    .item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        span:nth-child(1){
            font-size: 1.1rem;
            padding-bottom: .2rem
        }
        span:nth-child(2){
            color: #666;
            overflow: hidden;
            text-overflow:ellipsis;//文本溢出显示省略号
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        img{
            width: 7rem;
        }
    }
  }
}
</style>