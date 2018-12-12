export default{
    namespace:'song',
    state:{
        judgement:false,
        playBtnStyle:{
            display:'block',
        },
        imgStyle:{
            animationPlayState:'paused'
        },
        rollStyle:{
            animationPlayState:'running'
        }
    },
    reducers:{
        changeStyle(state,{payload:style}){
            if(changeJudge){
                return {
                    state:style
                }
            }else{
                return state
            }
        },
        changeJudge(state){
            return {
                state:{
                    judgement:!state.judgement
                }
            }
        }
    }
}