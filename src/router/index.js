import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/GoodsList',
      name: 'GoodsList',
      component: () => import('@/views/GoodsList')
    }
  ]
})
