import Content from "./Content";
import Navbar from "./Navbar";
import Header from "./Header";
import Profile from "./Profile";
import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./dialogsContainer";
import PostContainer from "./postContainer";
import UsersContainer from "./users/usersContainer";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <Route path="/content" component={Content} />
        <Route path="/post"    render={() => <PostContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/Users"   render={() => <UsersContainer />} />
     
      </div>
    </BrowserRouter>
  );
};

export default App;
