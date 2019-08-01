export default {
    currentSong (state){
        // console.log(state.songList)
        // console.log(state.nowIndex)
        if(state.songList.length === 0){
            return {}
        }
        let albummid = state.songList[state.nowIndex].albummid
        let imgUrl = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg?max_age=2592000`
        let songmid = state.songList[state.nowIndex].songmid
        //let sonUrl = `http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400${songmid}.m4a?guid=5652185824&vkey=066A79ACA23E10A85FFF6F618D43571AF0EF3F2B1907F6A412A2FC1B2FD77C770D288C21081B391E1E1B41556751F9CDF791B737A85B7773&uin=0&fromtag=38`
        let sonUrl = `http://dl.stream.qqmusic.qq.com/C400${songmid}.m4a?guid=2119917271&vkey=5AB7B84442DE135ECC6A29B693CBCB6FEA0FA0E8C8DD02820B7BE03A7F3BCACC8B70A1748D66F7BF436E871D1A685F452F0A25A22DAD9E13&uin=0&fromtag=38`
        let song = state.songList[state.nowIndex]
        song.imgUrl = imgUrl
        song.sonUrl = sonUrl
        return song
    }
}
//图片ID https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg?max_age=2592000
//http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C4000039MnYb0qxYhV.m4a?guid=5652185824&vkey=066A79ACA23E10A85FFF6F618D43571AF0EF3F2B1907F6A412A2FC1B2FD77C770D288C21081B391E1E1B41556751F9CDF791B737A85B7773&uin=0&fromtag=38
// 歌词 http://ustbhuangyi.com/music/api/lyric?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&songmid=0039MnYb0qxYhV&platform=yqq&hostUin=0&needNewCode=0&categoryId=10000000&pcachetime=1552185670888