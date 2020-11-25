const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


const dialogReducer = (state, action ) => {
if (action.type === 'UPDATE_NEW_MESSAGE_BODY'){
        this._state.dialogsPage.newMessageBody = action.body;
 this._callSubscriber(this._state);
            } 
      else if (action.type === 'SEND_MESSAGE'){
        let body = this._state.dialogsPage.newMessageBody;
this._state.dialogsPage.newMessageBody = '';
this._state.dialogsPage.messages.push({id: 7, message: body });
this._callSubscriber(this._state);
      }
              }
return state;

}

export default dialogReducer;
