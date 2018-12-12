import styles from './SongPage.css'
import Logo from '../components/SongComponent/Logo'
import Disk from '../components/SongComponent/Disk'
import Lyric from '../components/SongComponent/Lyric'
import Footer from '../components/SongComponent/Footer'
function SongPage(){
    return (
        <div className={styles.container}>
          <div className={styles.background}>
            <Logo />
            <Disk />
            <Lyric />
            <Footer />
          </div>
        </div>
    )
}
export default SongPage