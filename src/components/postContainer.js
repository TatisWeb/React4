import React from 'react';
import s from './Post.module.css';
import {addNewPostCreator, updateNewPostCreator} from '../redux/profile-reducer';
import Post from "./Post";
import StoreContext from './store-context';

const ProfileName = (props) =>{
return <div className={s.untext}>{props.message} </div>
}

const PostsContainer = () => { 
  
    return <StoreContext.Consumer> 
      { store => {
       let state = store.getState().profilePage;

  let profileElements = state.posts.map( f => 
     <ProfileName message={f.message} id={f.id} />);
  
  let newPostText = state.newPostText;
  
  
  let onSendNewMessage = (e) =>{
  let text = e.target.value;
    store.dispatch(updateNewPostCreator(text));
    
  
    }
  let onClickNewPost = () => {store.dispatch(addNewPostCreator())
      };
    
       
return  <Post updateNewPostText={onSendNewMessage} 
  addNewPost={onClickNewPost}
  profilePage={state}/>

      }
      }
</StoreContext.Consumer>

}


export default PostsContainer;