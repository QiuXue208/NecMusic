import React from 'react'
import Song from './Song'
import styles from '../../routes/IndexPage.css'

function LatestSong(){
        return (
            <section>
               <h2>最新音乐</h2>
               <ul className={styles.latestSongList}>
                   <Song />
                   <Song />
                   <Song />
                   <Song />
                   <Song />
               </ul>
            </section>
        )
    }

export default LatestSong