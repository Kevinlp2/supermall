import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const  home=()=>import('views/home/Home')
const  classa=()=>import('views/classa/Classa')
const  shopping=()=>import('views/shopping/Shopping')
const  archives=()=>import('views/archives/Archives')

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
    }
  ],
  mode:'history'
})

// const originalPush=VueRouter.prototype.push
// VueRouter.prototype.push = function push(location){
//   return originalPush.call(this,location).catch(err => err)
// }

export default VueRouter;
