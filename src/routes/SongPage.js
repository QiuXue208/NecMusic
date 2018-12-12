import styles from './SongPage.css'
import React from 'react'
import {connect} from 'dva'
import Logo from '../components/SongComponent/Logo'
import Disk from '../components/SongComponent/Disk'
import Lyric from '../components/SongComponent/Lyric'
import Footer from '../components/SongComponent/Footer'
function SongPage(props){
    const onChangeStyle = ()=>{
        console.log('1111')
        props.dispatch({
            type:'song/change'
        })
        console.log('222')
    }
    return (
        <div className={styles.container}>
          <div className={styles.background}>
            <Logo />
            <Disk onChangeStyle={onChangeStyle} value={props.value}/>
            <Lyric />
            <Footer />
          </div>
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