import ReactDom from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import store from "./components/state.js";
import App from "./components/App.js";

let renderEntireTree = (state) => {
  ReactDom.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

export default renderEntireTree;
