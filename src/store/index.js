import Vue from 'vue'
import Vuex from 'vuex'
import play from './play'
Vue.use(Vuex)
let store = new Vuex.Store({
    modules:{
        play
    }
})
export default store