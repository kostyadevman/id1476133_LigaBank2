import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../layout/header/header';
// import Footer from '../layout/footer/footer';
import Main from '../main/main';
import {AppRoute} from '../../const';
import PageNotFound from '../page-not-found/page-not-found';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      {/*<Footer />*/}
    </React.Fragment>
  );
};

export default App;
