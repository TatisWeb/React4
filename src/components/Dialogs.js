import React from "react";
import s from "./Post.module.css";
import { NavLink } from "react-router-dom";
import DialogsContainer from "./dialogsContainer";

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

const Dialogs = props => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let messagesElements = state.messages.map(m => (
    <Message message={m.message} />
  ));

  let onSendMessageClick = () => {
    props.sendMessageBody();
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div>
      <img
        className="img-dialogs"
        src="https://i.ibb.co/qkdRLJQ/55018-cifrovoe-iskusstvo-krasivaja-devushka-v-gorod-nochju-marki-raid-lechenija-cb07-komnata-doma-st.jpg"
        alt=""
      />
      <p> Dialogs </p>

      <div className={s.dialogs}>{messagesElements}</div>

      <div className="dialog-msg">{dialogsElements}</div>

      <textarea
        placeholder="Enter your message"
        value={newMessageBody}
        onChange={onNewMessageChange}
      ></textarea>
      <button onClick={onSendMessageClick}> Send Message </button>
    </div>
  );
};

export default Dialogs;