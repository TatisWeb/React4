import React from "react";
import {
  addNewPostCreator,
  updateNewPostCreator
} from "../redux/profile-reducer";
import Post from "./Post";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    newPostText: state.profilePage,
    profilePage: state.profilePage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onSendNewMessage: text => {
      dispatch(updateNewPostCreator(text));
    },
    onClickNewPost: () => {
      dispatch(addNewPostCreator());
    }
  };
};
const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

export default PostContainer;
