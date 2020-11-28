import React from "react";
import s from "./Post.module.css";

const Myposts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
  };

  return (
    <div>
      <div className={s.postsBlock}>
        <h3> Dialogs</h3>

        <div>
          {" "}
          <textarea placeholder="test" ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}> Add post </button>
        </div>
      </div>

      <div className={s.posts}>{postsElements} </div>
    </div>
  );
};
export default Myposts;
