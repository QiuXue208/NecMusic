import styles from '../../routes/SongPage.css'
import guideImg from'../../assets/guide.png'
import jsonData from '../../json/song.json'
// console.log(jsonData)




// var xhr = new XMLHttpRequest()
// console.log(xhr)
// xhr.open('GET','../../json/song.json')
// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState === 4 && xhr.status === 200){
//         console.log('success')
//         console.log(xhr.responseText)
//     }
// }
// xhr.send()


// $(function(){
//     $.getJSON('../../json/song.json',function(response){
//         console.log(response)
//     })
// })




function Lyric(){
    let array = jsonData.lyric.split('\n')
    return (
        <div className={styles.songInfo}>
            <h2>{jsonData.songName}</h2>
            <div className={styles.songLyricsContainer}>
                <div className={styles.songRoll}>
                 { 
                     array.map((item,key)=>{
                        let matches = item.match(/^\[(.*)\](.*)/)
                        // console.log(matches)
                     let times = matches[1].match(/^(.*):(.*)/)
                     console.log(times)
                     let seconds = times[1]*60 + times[2]
                     console.log(seconds)
                        return <p key={key} className={styles.lyric} data-time={matches[1]}>{matches[2]}</p>
                    })
                }
                    {/* <p className={styles.lyric}>作词:王艳薇</p>
                    <p className={styles.lyric}>失去的瞬间</p> */}
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