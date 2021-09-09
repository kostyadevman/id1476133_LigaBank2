import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './sass/style.scss';
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "./browser-history";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./store/reducer";
import {createAPI} from "./services/api";

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById(`root`)
);
