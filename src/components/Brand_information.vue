<template>
	<!--品牌信息-->
	<div id="hello" style="width:100%;padding-bottom:81px;overflow: hidden;">

		<div class="top_img" :style="width>1200?'height:452px':(width<1200&&width>900?'height:350px':'height:250px')">
			<img style="width: 100%;height:100%;" src="../../static/img/ding.jpg" alt="" />
		</div>
		<div class="top_box">
			<div class="top_box_c_box" :style="width>1100?'width:1331px;padding:0':(width<1100&&width>=720?'width:auto;padding:0 30px':(width<720?'width:100%;padding:0 30px':''))" @yi-add>
				<span><p class="left" v-for="(i,index) in tab" @click="p_click(i,index)" :class="{top_box_c_box_p:tab_show==index}" v-if="width<614?index<=1:index<=tab.length-1">{{i.title}}&nbsp;&nbsp;&nbsp;&nbsp;<a>|</a></p></span>
						<span :style="width>800?'':'display:none'" @yi-add>
						
            	<p class="right_p" style="color:#b7d537;"><a>/</a>发声艺术介绍</p>
            	<p class="right_p"><a>/</a>品牌信息</p>
            	<p class="right_p">首页</p>
				
				
            </span>
			</div>
		</div>

		<div class="btn_box" :style="width>800?'display:block;':'display:none'" @yi-add>
			<p class="tabls">{{tab_title}}</p>

			<div class="btn_box_box_f">
				<div class="btn_box_box" id="box1" v-for="(i,index) in left_box" @click="to_newdetails(i.id)">
					<div id="shan1" class="shan"></div>
					<p class="p_ta">{{i.title}}</p>
					<div class="img_box"><img :src="i.pic" alt="" /></div>
					<p class="tet_box">{{i.site}}</p>
					<div class="shu_xian_box" id="dian1"></div>
				</div>
			</div>

			<div class="shu_xian" v-show="left_box.length!=0&&right_box.length!=0"></div>

			<div class="btn_box_box_f_s">
				<div class="btn_box_box" id="box2" v-for="(i,index) in right_box" @click="to_newdetails(i.id)">
					<div id="shan2" class="shan"></div>
					<p class="p_ta">{{i.title}}</p>
					<div class="img_box"><img :src="i.pic" alt="" /></div>
					<p class="tet_box">{{i.site}}</p>
					<div id="dian2"></div>
				</div>
			</div>

		</div>
		
		<div style="position: relative;" :style="width>800?'display:none;':'display:block'" @yi-add>
			<p class="tabls" style="margin-top: 72px;">发声艺术介绍</p>
				<div class="shu_xian"  v-show="left_box.length!=0&&right_box.length!=0" style="height:100%;position: absolute;left: 0;top:20px;"></div>
				<div class="btn_box_box3 box2" v-for="(i,index) in left_box" style="height: auto;" @click="to_newdetails(i.id)">
					<div id="shan2" class="shan"></div>
					<p class="p_ta">{{i.title}}</p>
					<div class="img_box" style="width: 100%;height: auto;"><img :src="i.pic"/></div>
					<p class="tet_box tet_box2">{{i.site}}</p>
					<div id="dian2"></div>
				</div>
				<div class="btn_box_box3 box2" v-for="(i,index) in right_box" style="height: auto;" @click="to_newdetails(i.id)">
					<div id="shan2" class="shan"></div>
					<p class="p_ta">{{i.title}}</p>
					<div class="img_box" style="width: 100%;height: auto;"><img :src="i.pic"/></div>
					<p class="tet_box tet_box2">{{i.site}}</p>
					<div id="dian2"></div>
				</div>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	import router from '../router/index.js'
	import axios from 'axios'
	export default {
		data() {
			return {
				tab:[],
				tab_show: 0,
				//@yi-add
				width: 0,
                
				action:'',
				
				left_box:[],
				
				right_box:[],
				
				tab_title:'',
			}
		},
		methods: {
			git_act(){
				axios.get('api/article/1').then(res=>{
					            // console.log(res);
					    	  if(res.code = 200){
					    	 	  this.tab = res.data.data.list; 
								  console.log(this.tab);
								  this.git_ale(this.tab[0].id);
								  this.tab_title = this.tab[0].title;
					    	  }
				        }).catch(err=>{
				        	 console.log(err);
				        	 
				        });
			},
			git_ale(id){
				this.left_box = [];
				this.right_box = [];
				axios.get('api/list/'+id).then(res=>{
					    	  if(res.code = 200){
					    	 	 console.log(res.data.data.list,'数据');
								 let act = res.data.data.list;
								 for(var i=0;i<act.length;i++){
									 if(i%2==0){//判断基数偶数
										this.right_box.push(act[i]) 
									 }else{
										this.left_box.push(act[i]) 
									 }
								 }
								 console.log(this.left_box)
								 console.log(this.right_box)
					    	  }
				        }).catch(err=>{
				        	 console.log(err);
				        	 
				        });
			},
			
			
			to_newdetails(id){
				localStorage.id = id;
				router.push({
					path:'./News_details',
				});
			},
			p_click(i, index){
				this.tab_show = index;
				this.git_ale(i.id);
				 this.tab_title = i.title;
			},
			//@yi-add
			//widthfix
			widthfix(){
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
		mounted() {
			this.git_act();
			
			window.scrollTo(0, 0);
			store.state.btn_box_show = 1;
			//@yi-add
			this.towidthfix()
		}
	}
</script>

<style scoped>
	#box1:hover #dian1 {
		background: #b7d537;
		transition: 0.4s;
	}
	
	#box1:hover #shan1 {
		background: url('../../static/img/right2.jpg');
		transition: 0.4s;
	}
	
	#box1:hover ,.box2:hover{
		background: #b7d537;
		transition: 0.4s;
	}
	
	#box2:hover #dian2,.box2:hover #dian2 {
		background: #b7d537;
		transition: 0.4s;
	}
	
	#box2:hover #shan2,.box2:hover #shan2 {
		background: url('../../static/img/right2.jpg');
		-webkit-transform: rotate(180deg);
	}
	
	#box2:hover {
		background: #b7d537;
		transition: 0.4s;
	}
	
	#shan2 {
		width: 22px;
		height: 38px;
		position: absolute;
		left: -22px;
		top: 23px;
		background: url('../../static/img/left1.jpg');
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	
	#dian2 {
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: #d0d0d0;
		position: absolute;
		left: -42px;
		top: -5px;
	}
	.box2>#dian2{
		left: -50px;
		top: -12px;
		width: 15px;
		height: 15px;
	}
	
	.btn_box_box_f_s {
		width: 436px;
		float: right;
		margin-right: 8px;
		padding-top: 55px;
	}
	
	.btn_box_box,.btn_box_box2,.btn_box_box3 {
		width: 436px;
		height: 454px;
		border-radius: 6px;
		background: white;
		margin-top: 62px;
		-moz-box-shadow: 0px 0px 14px #BFBFBF;
		-webkit-box-shadow: 0px 0px 14px #BFBFBF;
		box-shadow: 0px 0px 14px #BFBFBF;
		padding: 23px 23px 0 23px;
		box-sizing: border-box;
		position: relative;
		transition: 0.4s;
	}
	.btn_box_box2{/*@yi-add*/
		width: auto;
		margin-right: 80px;
		margin-left: 80px;
	}
	.btn_box_box3{/*@yi-add*/
		width: auto;
		margin-right: 80px;
		margin-left: 80px;
	}
	
	.tet_box,.tet_box2 {
		width: 397px;
		height: 130px;
		font-size: 15px;
		text-align: justify;
		display: -webkit-box;
		display: -moz-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		color: #606060;
		line-height: 25px;
	}
	.tet_box2{
		width: 100%;
	}
	
	.p_ta {
		font-size: 25px;
		float: left;
		width: 100%;
		margin-bottom: 14px;
	}
	
	.img_box img {
		width: 100%;
		height: 100%;
	}
	
	.img_box {
		width: 397px;
		height: 231px;
		margin: 0 auto;
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 20px;
	}
	
	.shan {
		width: 22px;
		height: 38px;
		position: absolute;
		right: -22px;
		top: 23px;
		background: url('../../static/img/rihgt.jpg');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		/*color:transparent*/
		/*BACKGROUND-COLOR: transparent;opacity:0;*/
	}
	
	.btn_box_box:hover {
		cursor: pointer;
	}
	
	.btn_box_box_f {
		width: 436px;
		float: left;
		margin-left: 8px;
	}
	
	.btn_box_box {
		width: 436px;
		height: 454px;
		border-radius: 6px;
		background: white;
		margin-top: 62px;
		-moz-box-shadow: 0px 0px 14px #BFBFBF;
		-webkit-box-shadow: 0px 0px 14px #BFBFBF;
		box-shadow: 0px 0px 14px #BFBFBF;
		padding: 23px 23px 0 23px;
		box-sizing: border-box;
		position: relative;
	}
	
	#dian5 {
		margin-top: 442px;
	}
	
	#dian4 {
		margin-top: 46px;
	}
	
	#dian3 {
		margin-top: 442px;
	}
	
	#dian2 {
		margin-top: 46px;
	}
	
	.shu_xian_box {
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: #d0d0d0;
		position: absolute;
		right: -42px;
		top: 36px;
	}
	
	.shu_xian {
		width: 1px;
		height: 1518px;
		background: #d0d0d0;
		/*margin: 0 auto;*/
		margin-top: 51px;
		position: relative;
		padding-top: 49px;
		float: left;
		margin-left: 36px;
	}
	
	.tabls {
		font-size: 29px;
		color: #606060;
		width: 100%;
		text-align: center;
	}
	
	.btn_box {
		width: 962px;
		height: 1656px;
		margin: 0 auto;
		margin-top: 72px;
		/*text-align: center;*/
		/*border: 1px solid #464444;*/
		position: relative;
	}
	
	.right_p {
		font-size: 15px;
		float: right;
	}
	
	.top_box_c_box_p {
		color: #b5d334;
	}
	
	.top_box_c_box a {
		color: #606060
	}
	
	.left {
		float: left;
		margin-right: 19px;
		font-size: 20px;
	}
	
	.top_box_c_box:hover {
		cursor: pointer;
	}
	
	.top_box_c_box {
		width: 1322px;
		height: 100%;
		margin: 0 auto;
		line-height: 74px;
		padding-left: 92px;
		color: #606060
	}
	
	.top_box {
		width: 100%;
		height: 74px;
		-moz-box-shadow: 0px 2px 11px #B0B0B0;
		-webkit-box-shadow: 0px 2px 11px #B0B0B0;
		box-shadow: 0px 2px 11px #B0B0B0;
	}
	
	.top_img {
		width: 100%;
		height: 452px;
	}
</style>