const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


const dialogReducer = (state, action ) => {
if (action.type === 'UPDATE_NEW_MESSAGE_BODY'){
        state.dialogsPage.newMessageBody = action.body;
 
            } 
      else if (action.type === 'SEND_MESSAGE'){
        let body = state.dialogsPage.newMessageBody;
state.dialogsPage.newMessageBody = '';
state.dialogsPage.messages.push({id: 7, message: body })
      }
              }
return state;

}

export default dialogReducer;
