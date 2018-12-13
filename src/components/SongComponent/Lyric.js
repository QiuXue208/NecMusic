import styles from '../../routes/SongPage.css'
function Lyric(){
    return (
        <div className={styles.songInfo}>
            <h2>爱的重量（电视剧《爱情的开关》主题曲暨片头曲）</h2>
            <div className={styles.songLyricsContainer}>
                <div className={styles.songRoll}>
                    <p className={styles.singer}>作词:王艳薇</p>
                    <p className={styles.lyric}>失去的瞬间</p>
                </div>
            </div>
        </div>
    )
}
export default Lyric