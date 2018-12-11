import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Header from '../components/IndexComponent/Header'
import Nav from '../components/IndexComponent/Nav'
import RecommendationList from '../components/IndexComponent/RecommendationList'
import LatestSong from '../components/IndexComponent/LatestSong'
import Footer from '../components/IndexComponent/Footer'
import HotSong from '../components/IndexComponent/HotSong'
import Search from '../components/IndexComponent/Search'

function IndexPage(props) {
  function onChangeCurrentIndex(index){
    props.dispatch({
      type:'index/change',
      payload:index
    })
  }
  return (
    <div>
       <div className={styles.topBar}>
          <Header />
          <Nav currentIndex={props.value.currentIndex}
               onChangeCurrentIndex={onChangeCurrentIndex}
          />
       </div>
       <ul className={styles.showList}>
            <li data-key="0" className={props.value.currentIndex === 0 ? `${styles.show}`:`${styles.nonShow}`}>
                <RecommendationList />
                <LatestSong />
                <Footer />
            </li>
            <li data-key="1" className={props.value.currentIndex === 1 ? `${styles.show}`:`${styles.nonShow}`}>
                <HotSong />
            </li>
            <li data-key="2" className={props.value.currentIndex === 2 ? `${styles.show}`:`${styles.nonShow}`}>
                <Search />
            </li>
        </ul>
    </div>
  );
}

function mapStateToProps(state){
  return {
    value:state.index
  }
}
IndexPage.propTypes = {
};

export default connect(mapStateToProps)(IndexPage);
