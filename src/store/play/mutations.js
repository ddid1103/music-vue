import state from './state'
export default {
    addSongList(state,params){
        state.songList = params
    },
    changeIndex(state,params){
        if(params == 'next'){
             if(state.nowIndex == state.songList.length-1 ){
                state.nowIndex = state.songList.length-1
             }else{
                 state.nowIndex++
             }   
        }else if(params == 'prev'){ 
            if(state.nowIndex<=0){
                state.nowIndex=0
            }else{
                 state.nowIndex--
            }
        }
        // console.log(state.nowIndex)
        else if(params == 'sj'){
            state.nowIndex = Math.round(Math.random()*(state.songList.length-1))
        }  
    }

}