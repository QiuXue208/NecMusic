import styles from '../../routes/SongPage.css'
import guideImg from'../../assets/guide.png'
import jsonData from '../../json/song.json'

function Lyric(){
    var audio = document.querySelector('audio')
    let array = jsonData.lyric.split('\n')
    var pLists = array.map((item,key)=>{
        let matches = item.match(/^\[(.*)\](.*)/)
        let times = matches[1].match(/^(.*):(.*)/)
        let minutes = times[1]
        let seconds = times[2]
        let secondsTime =seconds.match(/^(.*)\.(.*)/)
        let newSeconds = parseInt(secondsTime[1]) + '.'  + secondsTime[2]
        let lyricTime = minutes*60 + parseFloat(newSeconds,10)
        // console.log(lyricTime)
        return <p key={key} id={key} className={styles.lyric + '' + styles.active} data-time={lyricTime}>{matches[2]}</p>
    })
    // setInterval(()=>{
    //     console.log(audio.currentTime)
    // },500)
    for(let i=0;i<pLists.length;i++){
        let timerId = setInterval(()=>{
            let currentTime = audio.currentTime
            // console.log(currentTime)
            if(i<pLists.length - 1){
                let prevTime = pLists[i].props['data-time']
                let nextTime = pLists[i+1].props['data-time']
                if(currentTime >= prevTime && currentTime <= nextTime ){
                    let currentPTag = document.getElementById(`${i}`)
                    currentPTag.style = 'color:#fefefe;'
                    let delta = nextTime-prevTime
                    setTimeout(()=>{
                        currentPTag.previousSibling.style = 'color:#A9A2A0;'
                        currentPTag.parentNode.style = `transform:translateY(${-35*i}px)`
                    },delta)
                }
            }else{
                //处理最后一句歌词
            }
        },500)

    }
    return (
        <div className={styles.songInfo}>
            <h2>{jsonData.songName}</h2>
            <div className={styles.songLyricsContainer}>
                <div className={styles.songRoll}>
                 {pLists}
                </div>
            </div>
            <a className={styles.songLink} href="#">查看完整歌词></a>
            <div className={styles.songGuide}>
              <img src={guideImg} />
            </div>
        </div>
    )
}
export default Lyric