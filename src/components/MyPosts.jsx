import React from 'react';
import s from './Post.module.css';

const Myposts = (props) =>{
    let postsElements = 
    props.posts.map{ p => <Post message={p.message} likeCount={p.likeCount}/>};

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        
        
    }


return (  
         <div className={s.postsBlock}>
         <h3> My posts </h3>
         <div> <textarea ref={newPostElement}></textarea>
         </div>
         <div>
         <button onClick={ addPost } > Add post </button>
         </div>
         </div>
         
         <div className={s.posts}>
         {postsElement}
         </div>
         </div>


)


}

export default Myposts;