import React from 'react';
import s from './Post.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
return <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
</div>

};


const Message = (props) => {
return <div className={s.untext}>{props.message} </div>

}

const Dialogs = (props) => {
   
   
   let dialogsElements = props.state.dialogs.map (
   d => <DialogItem name={d.name} id={d.id} /> );
    
    
    let messagesElements = props.state.messages.map( m => 
    <Message message={m.message} id={m.id} /> );
  
    let newPostElement = React.createRef();
  
    let addMessage = () =>{
    let message = newPostElement.current.value;
    props.addMessage(message);
    newPostElement.current.value = '';
    };
    
    
  
    return ( <div>
  
  <img className="img-dialogs" src="https://i.ibb.co/qkdRLJQ/55018-cifrovoe-iskusstvo-krasivaja-devushka-v-gorod-nochju-marki-raid-lechenija-cb07-komnata-doma-st.jpg" alt="" />
  
  <div className={s.dialogs}>
 
   {  messagesElements }
  
  </div>
  
  <div className="dialog-msg">
 
 { dialogsElements }
  
  </div>
  
  <textarea ref={newPostElement}> </textarea>
  <button onClick={addMessage}> Add post </button>
  
    
    </div>);

    }
    
export default Dialogs;