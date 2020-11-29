const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Hey" },
    { id: 2, name: "Elena" },
    { id: 3, name: "Hey" },
    { id: 4, name: "How are you?" },
    { id: 5, name: "Hey" },
    { id: 6, name: "H my friend" }
  ],

  newMessageBody: "",

  messages: [
    { id: 1, message: "Kate" },
    { id: 2, message: "Sergey" },
    { id: 3, message: "YoDa" },
    { id: 4, message: "Sega" },
    { id: 5, message: "JKate" },
    { id: 6, message: "ReactSergey" }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      // stateCopy.newMessageBody = //action.body;
      //state.newMessageBody = action.body;

      return {
        ...state,
        newMessageBody: action.body
      };

    case SEND_MESSAGE:
      // let body = state.newMessageBody;
      //   state.newMessageBody = "";
      //  state.messages.push({ id: 7, message: body });

      let body = state.newMessageBody;
      //  stateCopy.newMessageBody = "";
      //  stateCopy.messages.push({id: 7, //message: body });

      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 7, message: body }]
      };

    default:
      return state;
  }
};

export default dialogsReducer;

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});
