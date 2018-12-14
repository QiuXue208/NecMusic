var style1 = {display:'block'}
var style11 = {animationPlayState:'paused'}
var style2 = {display:'none'}
var style22 = {animationPlayState:'running'}
var judgement = false
var audio = document.createElement('audio')
audio.src = "http://pjpeuy1al.bkt.clouddn.com/%E7%88%B1%E7%9A%84%E9%87%8D%E9%87%8F.mp3"
audio.autoplay = true
export default{
    namespace:'song',
    state:{
        playBtnStyle:style2,
        imgStyle:style22,
        rollStyle:style22,
    },
    reducers:{
        change(state){
            judgement = !judgement
            if(judgement){
                return {
                        playBtnStyle:style1,
                        imgStyle:style11,
                        rollStyle:style11
                    }
            }else{
                return {
                        playBtnStyle:style2,
                        imgStyle:style22,
                        rollStyle:style22
                    }
            }
        },
        playOrPause(state){
            if(audio.paused){
                audio.play()
            }else{
                audio.pause()
            }
            return state
        }
    }
}