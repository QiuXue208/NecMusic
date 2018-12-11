import React from 'react'
import styles from '../../routes/IndexPage.css'

function HotSong (){
    return (
        <div className={styles.hotSong}>
            <div className={styles.hotSongContainer}>
                <div className={styles.hotSongIcon}></div>
                <div className={styles.updateDate}>更新日期:11月30日</div>
            </div>
        </div>
    )
}

export default HotSong