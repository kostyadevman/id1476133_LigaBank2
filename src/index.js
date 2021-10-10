import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import App from './components/app/app';
import browserHistory from "./browser-history";
import rootReducer from "./store/reducer";
import './sass/style.scss';

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById(`root`)
);
