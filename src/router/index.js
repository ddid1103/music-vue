import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
// import Recommend from "pages/recommend/recommend"
// import Singer from "pages/Singer/Singer"
// import Rank from "pages/Rank/Rank"
// import Search from "pages/Search/Search"
// import singerDetail from "pages/singerDetail/singerDetail"
//路由懒加载
const Recommend = ()=> import ("pages/recommend/recommend")
const Singer = ()=> import ("pages/Singer/Singer")
const Rank = ()=> import("pages/Rank/Rank")
const Search = ()=> import("pages/Search/Search") 
const singerDetail = ()=> import("pages/singerDetail/singerDetail")

let router = new Router({
  routes: [
        {
        path: '/recommend',
        name: 'Recommend',
        component: Recommend
      },
      {
        path: '/singer',
        name: 'Singer',
        component: Singer,
        children:[
          {path:'singerdetail',
          name:'singerDetail',
          component:singerDetail,

        }
        ]
      },
      {
        path: '/rank',
        name: 'Rank',
        component: Rank
      },
      {
        path: '/search',
        name: 'Search',
        component: Search,
        // beforeEnter:(to,from,next)=>{
        //   console.log("独享守卫")
        //   console.log(to)
        //   console.log(from)
        //   next()
        // }
      }, 
      {
        path: '/',
        redirect:'/recommend'
      }
  ]
})
// router.beforeEach((to,from,next)=>{
//   console.log(to);
//   console.log(from);
 
  // let login = true;
  // if(to.name == 'Singer'){
  //   if(login){
  //     next()
  //   }else{
  //     next(false)
  //   }
  // }else{
  //   next()
  // }
  
// })

export default router