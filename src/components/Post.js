import React from 'react';
import s from './Post.module.css';

const ProfileName = (props) =>{
return <div className={s.untext}>{props.message} </div>
}

const Post = (props) => { 
  
  let state = props.profilePage;

  let profileElements = state.posts.map( f => 
     <ProfileName message={f.message} id={f.id} />);
  
  let newPostText = state.newPostText;
  
  
  let onSendNewMessage = (text) =>{
  props.updateNewPostText(text);
    
    }
  let onClickNewPost = () => { props.addNewPost();
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