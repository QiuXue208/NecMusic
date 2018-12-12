import styles from '../../routes/SongPage.css'
import {Icon} from 'antd'
function Disk(){
    let IconFont = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_961967_7e8h3i0rt6.js',
      });
    let style1 = {
        display:'block',
    }
    let style11 = {
        animationPlayState:'paused',
    }
    let style2 = {
        display:'none'
    }
    let style22 = {
        animationPlayState:'running'
    }
    let judgement = false
    let playBtnStyle = {}
    let imgStyle = {}
    let rollStyle = {}
    function changeStyle(){
        console.log(1)
        judgement = !judgement
        if(judgement){
            playBtnStyle = style2
            imgStyle = style22
            rollStyle = style22
        }else{
            playBtnStyle = style1
            imgStyle = style11
            rollStyle = style11
        }
        console.log(2)
    }
    return (
        <div className={styles.diskContainer}>
            <div onClick={changeStyle} className={styles.songRoll}>
                <div className={styles.before}></div>
                <div style={rollStyle} className={styles.after}></div>   
                <div className={styles.imgContainer}>
                   <img style={imgStyle} src="https://p2.music.126.net/kiThDJ2wlbhgX9d3vvVbWw==/109951163709583836.webp?imageView&amp;thumbnail=721y721&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                </div> 
                <div className={styles.iconContainer}>
                    <div className={styles.twoIcon}>
                        <IconFont style={playBtnStyle} className={styles.playBtn} type="icon-play" />
                        {/* <IconFont className={styles.pauseBtn} type="icon-timeout" /> */}
                    </div>
                </div>         
            </div>
        </div>
    )
}
export default Disk