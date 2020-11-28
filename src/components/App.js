import Content from "./Content";
import Navbar from "./Navbar";
import Header from "./Header";
import Profile from "./Profile";
import React from "react";
import store from "./Redux-store";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./dialogsContainer";
import PostContainer from "./postContainer";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <Route path="/content" component={Content} />
        <Route path="/post"    render={() => <PostContainer store={props.store} />} />
        <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
        <Route path="/profile" render={() => <Profile />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
