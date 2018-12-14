import styles from '../../routes/SongPage.css'
import guideImg from'../../assets/guide.png'

var p = document.createElement('p')
p.className = 'lyric'
p.innerText = '作曲：王艳薇'
console.log(p)

var xhr = new XMLHttpRequest()
console.log(xhr)
xhr.open('GET','../../json/song.json')
xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log('success')
        console.log(xhr.responseText)
    }
}
xhr.send()


function Lyric(){
    return (
        <div className={styles.songInfo}>
            <h2>爱的重量（电视剧《爱情的开关》主题曲暨片头曲）</h2>
            <div className={styles.songLyricsContainer}>
                <div className={styles.songRoll}>
                    <p className={styles.lyric}>作词:王艳薇</p>
                    <p className={styles.lyric}>失去的瞬间</p>
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