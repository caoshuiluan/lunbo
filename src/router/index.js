import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/../src/components/HelloWorld'
import fuzujian from '@/../src/components/fuzujian'
import zizujian from '@/../src/components/zizujian'
import yemian from '@/../src/components/yemian'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fuzujian',
      name: 'fuzujian',
      component: fuzujian
    },
    {
      path: '/zizujian',
      name: 'zizujian',
      component: zizujian
    },
    {
      path: '/yemian',
      name: 'yemian',
      component: yemian
    },
    
    
  ]
})
