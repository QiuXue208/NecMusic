import styles from './SongPage.css'
import React from 'react'
import {connect} from 'dva'
import Logo from '../components/SongComponent/Logo'
import Disk from '../components/SongComponent/Disk'
import Lyric from '../components/SongComponent/Lyric'
import Footer from '../components/SongComponent/Footer'
function SongPage({value,dispatch}){
    const onChangeStyle = ()=>{
        dispatch({
            type:'song/change'
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.background}> </div>
                <Logo />               
                <Disk value={value} onChangeStyle={onChangeStyle}/>
                <Lyric />
                <Footer />                
        </div>
    )
}
function mapStateToProps(state){
    return {
        value:state.song
    }
}
export default connect(mapStateToProps)(SongPage)