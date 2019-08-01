import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Recommend from "pages/recommend/recommend"
import Singer from "pages/Singer/Singer"
import Rank from "pages/Rank/Rank"
import Search from "pages/Search/Search"
import Music from "common/Music/Music"

export default new Router({
  routes: [
    {
      path: '/music',
      name: 'Music',
      component: Music,
      children:[
        {
        path: 'recommend',
        name: 'Recommend',
        component: Recommend
      },
      {
        path: 'singer',
        name: 'Singer',
        component: Singer,
      },
      {
        path: 'rank',
        name: 'Rank',
        component: Rank
      },
      {
        path: 'search',
        name: 'Search',
        component: Search
      }]
    },
    
    {
      path: '/',
      redirect:'/music/recommend'
    }
  ]
})

// export default Router