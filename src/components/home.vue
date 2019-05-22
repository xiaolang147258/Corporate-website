<template>
  <!--首页-->
  <div id="hello" style="width:100%;overflow: hidden;">
      <div class="swip_box" :style="width>1100?'height:700px;':(width<1100&&width>=720?'height:500px;':(width<720?'height:300px;':''))" @yi-add>
				<div class="swiper-container" :style="'width:100%;height:'+swipheight" @yi-add>
				  <div class="swiper-wrapper">
				  	<!--有图片了就把img宽度去掉就行-->
				    <div class="swiper-slide">
				    	<img src="" alt="" style="background-color: coral;"/>
				    </div>
				    <div class="swiper-slide">
				    	<img src="" alt="" />
				    </div>
				    <div class="swiper-slide">
				    	<img src="" alt="" />
				    </div>
				  </div>
				  <div class="swiper-pagination"></div>
				</div>      
      </div>
      
      <div class="top_2_box" :style="width>1100?'width:1331px;padding:0':(width<1100&&width>=720?'width:898px;padding:0':(width<720?'width:100%;padding:0 30px':''))" @yi-add>
      	
      	  <div @mouseenter="truesa1=true" @mouseleave="truesa1=false" class="top_2_box_box" style="-moz-box-shadow:0px 3px 18px #9DBC18; -webkit-box-shadow:0px 3px 18px #9DBC18; box-shadow:0px 3px 18px #9DBC18;" :style="width<1100&&width>=720?'margin-bottom:30px;':(width<720?'width:auto;margin:auto;float:none;margin-bottom:60px;':'')" @yi-add>
      	  	<img src="../../static/img/shouyeaaa_03.jpg" alt="" />
      	  	 <transition name="el-zoom-in-top">
                <div v-show="truesa1" class="mengs" style="background: rgba(157, 188, 24, 0.7);">
                	   <p>教学特色</p>
                	   <div style="color: rgba(157, 188, 24, 0.7);">More</div>
                </div>
           </transition>
      	  </div>
      	  
      	  <div @mouseenter="truesa2=true" @mouseleave="truesa2=false" class="top_2_box_box" style="-moz-box-shadow:0px 3px 18px #e77e31; -webkit-box-shadow:0px 3px 18px #e77e31; box-shadow:0px 3px 18px #e77e31;" :style="width<1100&&width>=720?'margin-bottom:30px;':(width<720?'width:auto;margin:auto;float:none;margin-bottom:60px;':'')" @yi-add>
      	  	<img src="../../static/img/shouyeaaa_05.jpg" alt="" />
      	  	<transition name="el-zoom-in-top">
                <div v-show="truesa2" class="mengs" style="background: rgba(231, 126, 49, 0.7);">
                	   <p>发声动态</p>
                	   <div style="color: rgba(231, 126, 49, 0.7);">More</div>
                </div>
            </transition>
      	  </div>
      	  
      	  <div @mouseenter="truesa3=true" @mouseleave="truesa3=false" class="top_2_box_box" style="margin:0;-moz-box-shadow:0px 3px 18px #9DBC18; -webkit-box-shadow:0px 3px 18px #9DBC18; box-shadow:0px 3px 18px #9DBC18;" :style="width<1100&&width>=720?'margin:30px auto 0;float:none;':(width<720?'width:auto;margin:auto;float:none;margin-bottom:60px;':'')" @yi-add>
      	  	<img src="../../static/img/shouyeaaa_07.jpg" alt="" />
      	  	<transition name="el-zoom-in-top">
                <div v-show="truesa3" class="mengs" style="background: rgba(157, 188, 24, 0.7);">
                	   <p>合作加盟</p>
                	   <div style="color: rgba(157, 188, 24, 0.7);">More</div>
                </div>
            </transition>
      	  </div>
      	  <div style="clear: both;"></div>
      </div>
      
      <div class="fasheng_p"><img src="../../static/img/fasheng.jpg" alt="" /></div>
      
      <div class="top_3_box" :style="width>1100?'width:1331px;padding:0':(width<1100&&width>=720?'width:908px;padding:0':(width<720?'width:100%;padding:0 30px':''))" @yi-add>
      	  <img src="../../static/img/top3.jpg" :style="width<1100&&width>=720?'margin-bottom:30px;left:15px':(width<720?'width:100%;margin:auto;float:none;margin-bottom:60px;':'')" @yi-add/>
      	  <img src="../../static/img/to4.jpg" :style="width<1100&&width>=720?'margin-bottom:30px;left:15px':(width<720?'width:100%;margin:auto;float:none;margin-bottom:60px;':'')" @yi-add/>
      	  <div style="clear: both;" v-if="width<1100&&width>720?true:false"></div>
      	  <img style="margin:0;" src="../../static/img/to5.jpg" :style="width<1100&&width>=720?'margin:30px auto 0;float:none;':(width<720?'width:100%;margin:auto;float:none;margin-bottom:60px;':'')" @yi-add/>
      	  <div style="clear: both;"></div>
      </div> 
      <div class="gen"><img src="../../static/img/gengduo.jpg"/></div>
      <div class="fasheng_p" style="overflow:hidden;"><img style="margin-top:-10px;" src="../../static/img/feng.jpg" alt="" /></div>
      
      <div class="xin_box" :style="width>1100?'width:1421px;padding:0;':(width<1100&&width>=720?'width:928px;padding:0;':(width<720?'width:100%;padding:0 30px':''))" @yi-add>
      	  <div class="xin_box_c" v-for="(i,index) in 6" :style="width<1100&&width>=720?'margin-left:55px':(width<720?'width:100%;padding:0 30px;margin-left:30px':'')" @yi-add>
      	  	 <div class="xin_box_c_box" >
      	  	 	<div class="meng"><img src="../../static/img/bo.png" alt="" /></div>
      	  	 	<img class="xin_box_c_box_img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3220681365,3634029949&fm=27&gp=0.jpg" alt="" />
      	  	 </div>
      	  	 <div class="p_box">鞠萍姐携手各位大咖同台亮相鞠萍姐携手各位大咖同台亮相</div>
      	  </div>
      	  <div style="clear:both;"></div>
      </div>
      
      <div class="gen" :style="width>1100?'width:1421px;padding:0;':(width<1100&&width>=720?'width:928px;padding:0;left:-10px':(width<720?'width:100%;padding:0 30px':''))" @yi-add><img src="../../static/img/gengduo.jpg"/></div>
      
      <img v-show="false" class="to_top" src="../../static/img/to_top.png"/>
      
  </div>
</template>

<script>

import store from '../vuex/store.js'
import router from '../router/index.js'
import axios from 'axios'
import swcss from '../../static/swiper.min.css'// @yi-add
import swjs from '../../static/swiper.min.js'// @yi-add
export default {
  
  data () {
    return {
    	//
    	 truesa1:false,
    	 truesa2:false,
    	 truesa3:false,
    	 //@yi-add
    	 width:'1331px',
    	 swipheight:'700px',
    	 widthflag:0,
    }
  },
  methods:{
	  git_act(){
		  axios.get('api/article/1'
		        ).then(res=>{
					 console.log(res.data)
		        	if(res.data.code==200){
		        		 // console.log(res.data)
		        		 
		        	}else{
		        		vant.Toast('Something went wrong.(发生了错误 )');
		        	}
		      }).catch(err=>{
		             console.log(err);
		      });  
	  },
	  
	  
 		//@yi-add
 		swipers(){
 			setTimeout(function(){//异步运行，不然一开始宽度很诡异
	 			new swjs('.swiper-container',{
	 				loop:true,
	 				autoplay:{
	 					delay:3000,
	 					disableOnInteraction: false,
	 				},
	 				pagination: {
				    el: '.swiper-pagination',
				  },
	 			}) 				
 			},0)
 		},
 		//widthfix
 		widthfix(){
 			this.width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth
 			this.swipheight = this.width>1100?'700px':(this.width<1100&&this.width>719?'500px':(this.width<719?'300px':''))
 			for(var i=0;i<$('.swiper-slide>img').length;i++){
 				$('.swiper-slide>img').eq(i).css('margin-left',-$('.swiper-slide>img').eq(i).width()/2)
 			}
 		},
 		towidthfix(){
 			var th = this;
 			setTimeout(function(){
 				th.widthfix()
 				th.towidthfix()
 			},10)
 		},
  },
  mounted(){
	  this.git_act();
  	  window.scrollTo(0,0);  
  	  store.state.btn_box_show = 0;
  	  this.towidthfix()
  	  this.swipers()
  }
}
</script>

<style scoped>
	.mengs div{
		 width: 150px;
		 height: 60px;
		 background: white;
		 border-radius: 30px;
		 line-height: 60px;
		 text-align: center;
		 font-size: 24px;
		 margin: 20px auto;
		 
	}
	.mengs p{
		font-size: 30px;
		color: white;
	}
	.mengs{
		 width: 100%;
		 height: 100%;
		 position: absolute;
		 top: 0;
		 left: 0;
		 z-index: 300;
		 text-align: center;
		 padding-top: 90px;
	}
	
	.xin_box_c_box_img{
		width: 100%;
		min-height: 100%;
	}
	.meng img{
		width: 106px;
		height: 106px;
		margin: 73px 149px;
	}
	.xin_box_c_box:hover .meng{
		opacity:1;
		transition:0.5s;
	}
	.xin_box_c_box:hover{
		 cursor: pointer;
	}
	.meng{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.7);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 400;
		opacity:0;
		transition:0.5s;
	}
	.to_top{
		width: 50px;
		height: 50px;
		position: fixed;
		bottom: 100px;
		right:30px;
		z-index:500;
	}
	.p_box{
		font-size: 18px;
		width: 345px;
		margin: 30px auto 0 auto;
		text-align: center;
		 overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
	}
	.xin_box_c_box{
		width: 100%;
		float: left;/*@yi-add*/
		margin-bottom: 30px;/*@yi-add*/
		border-radius:10px;
		overflow:hidden;
		background: #475669;
		position: relative;
	}
	.xin_box_c{
		width: 402px;
		margin-bottom: 60px;/*@yi-add*/
		float: left;
		margin-left: 60px;/*@yi-add*/
		position: relative;/*@yi-add*/
		left: -30px;/*@yi-add*/
	}
	.xin_box{
		width: 1326px;
		margin: 0 auto;
		position: relative;
	}
	.gen img{
		width: 259px;/*@yi-add*/
		height: 100%;
		display: block;/*@yi-add*/
		margin: auto;/*@yi-add*/
	}
	.gen{
		height: 74px;
		margin: 47px auto;
		position: relative;
	}
	.top_3_box img{
		position: relative;/*@yi-add*/
		width: 423px;
		height: 100%;
		display: block;/*@yi-add*/
		float: left;
		margin-right: 30px;
	}
	.top_3_box{
		width: 1331px;
		margin: 10px auto;
	}
	.fasheng_p img{
		width: 100%;
		height: 100%;
	}
	.fasheng_p{
		width: 435px;
		height: 189px;
		margin: 0 auto;
	}
	.top_2_box_box img{
		 width: 100%;
		 height: 100%;
	}
	.top_2_box_box{
		width: 433px;
		height: 100%;
		float: left;
		margin-right: 8px;
		margin-left: 8px;
		position: relative;
		overflow: hidden;
		border-radius: 4px;
	}
	.top_2_box{
		width: 1331px;
		margin: 0 auto;
		margin-top: 78px;
		/*background: red;*/
	}
	.el-carousel__item h3{
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
     margin: 0;
     text-align: center;
  }
	.el-carousel-item{
		height: 100%;
	}
	.el-carousel{
		height: 100%;
	}
	 .swiper-slide:nth-child(2n) {/*@yi-add*/
    background-color: #99a9bf;
  }
  
  .swiper-slide:nth-child(2n+1) {/*@yi-add*/
    background-color: #d3dce6;
  }
  .swiper-slide{
  	overflow: hidden;
  }
  .swiper-slide>img{
  	display: block;
  	position: relative;
  	left: 50%;
  	width: 600px;
  	height: 100%;
  	background-color: #eee;
  }
	.swip_box{
		 width: 100%;
	}
</style>
