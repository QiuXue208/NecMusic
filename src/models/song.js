var style1 = {display:'block'}
var style11 = {animationPlayState:'paused'}
var style2 = {display:'none'}
var style22 = {animationPlayState:'running'}
var judgement = false
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
    }
}