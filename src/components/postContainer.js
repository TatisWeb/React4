import React from 'react';
import s from './Post.module.css';
import {addNewPostCreator, updateNewPostCreator} from '../redux/profile-reducer';
import Post from "./Post";

const ProfileName = (props) =>{
return <div className={s.untext}>{props.message} </div>
}

const PostsContainer = (props) => { 
  
  let state = props.store.getState().profilePage;

  let profileElements = state.posts.map( f => 
     <ProfileName message={f.message} id={f.id} />);
  
  let newPostText = state.newPostText;
  
  
  let onSendNewMessage = (e) =>{
  let text = e.target.value;
    props.store.dispatch(updateNewPostCreator(text));
    
  
    }
  let onClickNewPost = () => {props.store.dispatch(addNewPostCreator())
      };
    



    return( 
     
  
      <Post updateNewPostText={onSendNewMessage} addNewPost={onClickNewPost} profilePage={state}/>
);
      }
export default PostsContainer;