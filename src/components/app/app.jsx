import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import Header from '../layout/header/header';
import Main from '../main/main';
import PageNotFound from '../page-not-found/page-not-found';
import Footer from "../layout/footer/footer";
import {AppRoute} from '../../const';
import robotoRegular from "../../fonts/Roboto-Regular.woff2";
import robotoMedium from "../../fonts/Roboto-Medium.woff2";
import robotoBold from "../../fonts/Roboto-Bold.woff2";
const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="preload" href={robotoRegular} as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href={robotoMedium} as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href={robotoBold} as="font" type="font/woff2" crossOrigin="anonymous"/>
      </Helmet>
      <Header />
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
