import styles from '../../routes/SongPage.css'
import React from 'react'
import {Icon} from 'antd'
class Disk extends React.Component{
    constructor( props){
        super(props)
    }
    changeStyle = event=>{
        event.stopPropagation();
        console.log(1)
      //  props.onChangeStyle()
        console.log(2)
    }
    render(){
        const props=this.props
        return (
            <div className={styles.diskContainer}>
                <div className={styles.songRoll}>
                    {/* <button onClick={(e)=>{console.log(e)}}>click</button> */}
                    <button onClick={()=>{console.log('1111111')}}>click</button>
                    <div className={styles.before}></div>
                    <div style={props.value.rollStyle} className={styles.after}></div>   
                    <div className={styles.imgContainer}>
                       <img style={props.value.imgStyle} src="https://p2.music.126.net/kiThDJ2wlbhgX9d3vvVbWw==/109951163709583836.webp?imageView&amp;thumbnail=721y721&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                    </div> 
                    <div className={styles.iconContainer}>
                        <div className={styles.twoIcon}>
                            <IconFont style={props.value.playBtnStyle} className={styles.playBtn} type="icon-play" />
                            {/* <IconFont className={styles.pauseBtn} type="icon-timeout" /> */}
                        </div>
                    </div>         
                </div>
            </div>
        )
    }

}
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_961967_7e8h3i0rt6.js',
  });

export default Disk