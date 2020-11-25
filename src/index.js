import ReactDom from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import store from './components/Redux-store.js';
import App from   './components/App.js';

let renderEntireTree = (state) => {
  ReactDom.render(
    <BrowserRouter>
      <App store={store}
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  renderEntireTree(state);

} );

export default renderEntireTree;
