import React from "react";
import Dialogs from "./Dialogs";
import s from "./Post.module.css";
import { NavLink } from "react-router-dom";
import {sendMessageCreator,
        updateNewMessageBodyCreator
} from "../redux/dialogs-reducer";


const DialogItem = props => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.untext}>{props.message} </div>;
  let state = props.state.getState().dialogsPage;
};

const DialogsContainer = props => {
  
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = body => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessageBody={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;