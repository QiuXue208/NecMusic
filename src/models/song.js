let style1 = {display:'block'}
let style11 = {animationPlayState:'paused'}
let style2 = {display:'none'}
let style22 = {animationPlayState:'running'}
let judgement = false
export default{
    namespace:'song',
    state:{
        playBtnStyle:style1,
        imgStyle:style11,
        rollStyle:style11,
    },
    reducers:{
        change(state){
            console.log('11111')
            console.log('我在reducer')
            state.judgement = !state.judgement
            if(state.judgement){
                return {
                    state:{
                        playBtnStyle:state.style2,
                        imgStyle:style22,
                        rollStyle:style22
                    }
                }
            }else{
                return state
            }
        },
    }
}