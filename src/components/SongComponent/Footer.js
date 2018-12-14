import styles from '../../routes/SongPage.css'
function Footer(){
    return (
        <footer>
            <a className={styles.open} href="#">打开</a>
            <a className={styles.download} href="#">下载</a>
        </footer>
    )
}
export default Footer