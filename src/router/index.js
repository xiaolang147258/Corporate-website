import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home.vue'
import Brand_information from '@/components/Brand_information.vue'
import curriculum_structure from '@/components/curriculum_structure.vue'
import brand_cooperation from '@/components/brand_cooperation.vue'
import about_us from '@/components/about_us.vue'
import News_details from '@/components/News_details.vue'

Vue.use(Router)

export default new Router({
	
  routes: [
      {path: '/home',meta:{title:'首页'},component:home},
      {path: '/Brand_information',meta:{title:'品牌信息'},component:Brand_information},
      {path: '/curriculum_structure',meta:{title:'课程体系'},component:curriculum_structure},
      {path: '/brand_cooperation',meta:{title:'品牌合作'},component:brand_cooperation},
      {path: '/about_us',meta:{title:'关于我们'},component:about_us},
      {path: '/News_details',meta:{title:'品牌信息'},component:News_details},
      
      
      {path: '/*',meta:{title:'首页'},component:home},
  ]
})
