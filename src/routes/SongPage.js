import styles from './SongPage.css'
function SongPage(){
    return (
        <div className={styles.container}>
            <Logo />
            <Disk />
            <Lyric />
            <Footer />
        </div>
    )
}