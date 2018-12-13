import styles from './SongPage.css'
import React from 'react'
import {connect} from 'dva'
import Logo from '../components/SongComponent/Logo'
import Disk from '../components/SongComponent/Disk'
import Lyric from '../components/SongComponent/Lyric'
import Footer from '../components/SongComponent/Footer'
function SongPage(props){
    return (
        <div onClick={()=>console.log('container')} className={styles.container}>
            <div className={styles.background}> </div>
                <Logo />
                
                <Disk value={props.value}/>
                <Lyric />
                <Footer />
                  
        </div>
    )
}
function mapStateToProps(state){
    console.log('我在mapStateToProps ')
    return {
        value:state.song
    }
}
export default connect(mapStateToProps)(SongPage)