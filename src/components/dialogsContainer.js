import React from "react";
import Dialogs from "./Dialogs";
import s from "./Post.module.css";
import { NavLink } from "react-router-dom";
import {sendMessageCreator,
        updateNewMessageBodyCreator
} from "../redux/dialogs-reducer";

import StoreContext from './store-context';


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.untext}>{props.message} </div>;
  let state = props.state.getState().dialogsPage;
};

const DialogsContainer = () => {
  return (
          <StoreContext.Consumer> 
         { (store) => {
  let state = store.getState().dialogsPage;

  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = body => {
    store.dispatch(updateNewMessageBodyCreator(body));
  };
                  
   return <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessageBody={onSendMessageClick}
      dialogsPage={state}
    />    
          }
          }
          </StoreContext.Consumer>
  );
};

export default DialogsContainer;