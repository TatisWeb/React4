import ReactDom from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import store from './components/Redux-store.js';
import App from   './components/App.js';
import {Provider} from 'react-redux';

let renderEntireTree = (state) => {
  ReactDom.render(
    <BrowserRouter>
      <Provider store={store}>
      <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree();

export default renderEntireTree;
