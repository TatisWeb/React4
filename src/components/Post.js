import React from 'react';
import s from './Post.module.css';
import {addMessage} from './state';
import {addPost} from './state';

const PostText = (props) =>{
return <div className={s.untext}>{props.likeCount} </div>
}

const ProfileName = (props) =>{
return <div className={s.untext}>{props.name} </div>

}


const Post = (props) => { 

    let profileElements = props.state.profiles.map( f => 
     <ProfileName name={f.name} id={f.id} />);
      
    let postElements = props.state.posts.map( p =>
     <PostText likeCount={p.likeCount} id={p.id} />);


let newPostElement = React.createRef();

let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
};

let addMessage = () =>{
    let text = newPostElement.current.value;
    props.addMessage(text);
    newPostElement.current.value = '';
};




    return( 
     
     <div className="post-item">
     <div className={s.item}> 
    
     <img className="img-post" src="https://i.ibb.co/Fzxbqzn/nastol-com-ua-138035.jpg" alt="post"/>
     <div> Like { postElements } </div>
     <div> Name { profileElements } </div>
     </div>
     
     <div className={s.btn}>
     <textarea ref={newPostElement}></textarea>
     <button onClick={addPost }>Add New Message </button>   
     </div>
     
    </div>);
}

export default Post;