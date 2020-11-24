import React from 'react';
import s from './Post.module.css';
import {NavLink} from 'react-router-dom';
import {sendMessageCreator,
    updateNewMessageBodyCreator   } from './state';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
return <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
</div>

};

const Message = (props) => {
return <div className={s.untext}>{props.message} </div>
let state = props.state.getState().dialogsPage;
}

const Dialogs = (props) => {
   
  let state = props.store.getState().dialogsPage;
   
   let dialogsElements = state.dialogs.map (
   d => <DialogItem name={d.name} id={d.id} /> );
    
     let newMessageBody = state.newMessageBody;
    
    let messagesElements = state.messages.map( m => 
    <Message message={m.message} /> );
  
    
  let onSendMessageClick = () =>{
  props.store.dispatch(sendMessageCreator());
  }
  
  let onNewMessageChange = (e) =>{
    let body = e.target.value;
    props.store.dispatch( updateNewMessageBodyCreator(body));
        }
  
  
  
    return ( <div>
  
  <img className="img-dialogs" src="https://i.ibb.co/qkdRLJQ/55018-cifrovoe-iskusstvo-krasivaja-devushka-v-gorod-nochju-marki-raid-lechenija-cb07-komnata-doma-st.jpg" alt="" />
        <p> Posts </p>
  
  <div className={s.dialogs}>
 
   {  messagesElements }
  
  </div>
  
  <div className="dialog-msg">
 
 { dialogsElements }
  
  </div>
  
  <textarea 
placeholder='Enter your message' 
value={newMessageBody} 
onChange={onNewMessageChange}> 
        </textarea>
  <button onClick={onSendMessageClick}> Send Message </button>
  
    
    </div>);

    }
    
export default Dialogs;