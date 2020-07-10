import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const  home=()=>import('views/home/Home')
const  classa=()=>import('views/classa/Classa')
const  shopping=()=>import('views/shopping/Shopping')
const  archives=()=>import('views/archives/Archives')
const  detail=()=>import('views/detail/Detail')

const VueRouter= new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/classa',
      component:classa
    },
    {
      path:'/shopping',
      component:shopping
    },
    {
      path:'/archives',
      component:archives
    },
    {
      path:'/detail',
      name:'detail',
      component:detail
    },
  ],
  mode:'history'
})


// 解决路由重复报错的问题
const originalPush=Router.prototype.push
Router.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err => err)
}


export default VueRouter;
