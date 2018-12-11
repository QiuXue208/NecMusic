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

function IndexPage() {
  return (
    <div>
       <div className={styles.topBar}>
          <Header />
          <Nav />
       </div>
       <ul className={styles.showList}>
            <li data-key="0">
                <RecommendationList />
                <LatestSong />
                <Footer />
            </li>
            <li data-key="1">
                <HotSong />
            </li>
            <li data-key="2">
                <Search />
            </li>
        </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
