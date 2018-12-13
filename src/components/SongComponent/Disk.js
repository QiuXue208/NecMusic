import styles from '../../routes/SongPage.css'
import React from 'react'
import {Icon} from 'antd'

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_961967_7e8h3i0rt6.js',
  });

function Disk (props){
    return (
        <div className={styles.diskContainer}>    
            <div onClick={()=>console.log('22222')}  className={styles.songRoll}>
                {/* <button onClick={()=>{console.log('1111111')}}>click</button> */}
                <div className={styles.disc}>
                  <div className={styles.discOver}></div>
                </div> 
                <div className={styles.imgContainer}>
                    <img src="https://p2.music.126.net/kiThDJ2wlbhgX9d3vvVbWw==/109951163709583836.webp?imageView&amp;thumbnail=721y721&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                </div> 
                <div className={styles.iconContainer}>
                    <div className={styles.iconBack}></div>
                    <IconFont style={props.value.playBtnStyle} className={styles.playBtn} type="icon-play" />          
                </div>         
            </div>
        </div>
    )
}

export default Disk