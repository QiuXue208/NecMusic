let styleOne = {
    playBtnStyle:{display:'block'},
    imgStyle:{animationPlayState:'paused'},
    rollStyle:{animationPlayState:'paused'}
}
let styleTwo = {
    playBtnStyle:{display:'none'},
    imgStyle:{animationPlayState:'running'},
    rollStyle:{animationPlayState:'running'}
}
var judgement = false
var audio = document.createElement('audio')
audio.src = "http://pjpeuy1al.bkt.clouddn.com/%E7%88%B1%E7%9A%84%E9%87%8D%E9%87%8F.mp3"
audio.autoplay = true

let timerId = setInterval(()=>{
    // console.log(audio.currentTime)
},500)
export default{
    namespace:'song',
    state:styleTwo,
    reducers:{
        change(state){
            judgement = !judgement
            if(judgement){
                return styleOne
            }else{
                return styleTwo
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