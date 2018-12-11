import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SongPage from './routes/SongPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/song" component={SongPage} />
    </Router>
  );
}

export default RouterConfig;
