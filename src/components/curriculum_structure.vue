<template>
  <!--课程体系-->
  <div id="hello" style="width:100%;padding-bottom: 40px;overflow: hidden;">
  	
    <div class="top_img" :style="width>1200?'height:452px':(width<1200&&width>900?'height:350px':'height:250px')">
  		<img style="width: 100%;height:100%;" src="../../static/img/pinpai/pin.jpg" alt="" />  
  	</div>
    <div class="top_box">
    	<div class="top_box_c_box" :style="width>1100?'width:1331px;padding:0':(width<1100&&width>=720?'width:auto;padding:0 30px':(width<720?'width:100%;padding:0 20px':''))" @yi-add>
    		<span><p class="left" v-for="(i,index) in tab" @click="p_click(i,index)" :class="{top_box_c_box_p:tab_show==index}">{{i.title}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>|</a></p></span>
            <span :style="width>800?'':'display:none'" @yi-add>
            	<p class="right_p" style="color:#b7d537;"><a>/</a>发声艺术介绍</p>
            	<p class="right_p"><a>/</a>课程体系</p>
            	<p class="right_p">首页</p>
            </span>
    	</div>
    </div>
   
   <div class="act_box" :style="width>800?'':'width:auto;padding:0 20px;'" @yi-add>
   	   <p class="tatl">{{act_box.title}}</p>
   	   <div class="text" v-html="act_box.content"></div>
   	   <!-- <div class="img_box"><img src="../../static/img/kecheng/kecheng_03.jpg"/></div> -->
   </div>
   
  </div>
</template>

<script>

import store from '../vuex/store.js'
import router from '../router/index.js'
import axios from 'axios'
export default {
  
  data () {
    return {
    	 tab:[],
    	 tab_show:0,
    	 //@yi-add
    	 width:1331,
		 
		 act_box:'',
		 
    }
  },
  methods:{
	git_act(){
		axios.get('api/article/2').then(res=>{
			            // console.log(res);
			    	  if(res.code = 200){
			    	 	  this.tab = res.data.data.list; 
						  console.log(this.tab);
						  this.git_ale(this.tab[0].id);
			    	  }
		        }).catch(err=>{
		        	 console.log(err);
		        	 
		        });
	},
	git_ale(id){
		axios.get('api/show/'+id).then(res=>{
			    	  if(res.code = 200){
			    	 	 console.log(res.data.data.Items,'课程体系数据');
						 this.act_box = res.data.data.Items;
			    	  }
		        }).catch(err=>{
		        	 console.log(err);
		        	 
		        });
	},
	
	
  	p_click(i,index){
  	 	this.tab_show = index;
		this.git_ale(i.id);
  	 },
			//@yi-add
			//widthfix
			widthfix() {
				this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
			},
			towidthfix() {
				var th = this;
				setTimeout(function() {
					th.widthfix()
					th.towidthfix()
				}, 10)
			},
  	
  },
  mounted(){
	  this.git_act()
	  
	  
  	  window.scrollTo(0,0);  
  	  store.state.btn_box_show = 2;
			//@yi-add
			this.towidthfix()
  }
}
</script>

<style scoped>
	.img_box img{
		width: 100%;
		height: 100%;
		margin-top: 45px;
		
	}
	.img_box{
		width: 100%;
	}
	.text img{
		width: 100%;
		height: 100%;
		margin-top: 45px;
	}
	.text{
		  width: 100%;
		  font-size: 18px;
		  line-height: 37px;
		  text-align:justify;
		  margin-top:63px;
		  
	}
	 .tatl{
	 	 width: 100%;
	 	 text-align: center;
     font-size: 29px;
     color: #606060;
	 }
	
	 .act_box{
	 	width: 935px;
	 	/*height: 888px;*/
	 	margin: 76px auto;
	 	/*background: red;*/
	 }
	
	.right_p{
		font-size: 15px;
		float: right;
	}
	.top_box_c_box_p{
		 color: #b5d334;
	}
	.top_box_c_box a{
		color: #606060
	}
	.left{
		float: left;
		margin-right:25px;
		font-size: 20px;
	}
	.top_box_c_box:hover{
		cursor: pointer;
	}
	.top_box_c_box{
		width: 1322px;
		height: 100%;
	    margin: 0 auto;
	    line-height: 74px;
	    padding-left: 92px;
	    color: #606060
	}
	.top_box{
		width: 100%;
		height: 74px;
		-moz-box-shadow:0px 2px 11px #B0B0B0; -webkit-box-shadow:0px 2px 11px #B0B0B0; box-shadow:0px 2px 11px #B0B0B0;
	}
	.top_img{
		width: 100%;
		height: 452px;
	}
</style>
