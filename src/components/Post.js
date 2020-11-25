import React from 'react';
import s from './Post.module.css';
import {addNewPostCreator, updateNewPostCreator} from '../redux/profile-reducer';

const ProfileName = (props) =>{
return <div className={s.untext}>{props.message} </div>
}

const Post = (props) => { 
  
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
     
     <div className="post-item">
     <div className={s.item}> 
    
     <img className="img-post" src="https://i.ibb.co/Fzxbqzn/nastol-com-ua-138035.jpg" alt="post"/>
       <p > New Post</p>
     <div> Name { profileElements } </div>
     </div>
     
     <div className={s.btn}>
     <textarea placeholder='send new message'
     onChange={onSendNewMessage}
     value={newPostText}
     
       ></textarea>
     <button onClick={onClickNewPost}>Add New Message </button>   
     </div>
     
    </div>);
}

export default Post;