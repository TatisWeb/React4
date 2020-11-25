import profileReducer from '../redux/profile-reducer';
import dialogsReducer from '../redux/dialogs-reducer';

const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
  
  _state : {
    
    profilePage : {
        
    posts: [
           {id:1, message: 'hi', likeCount:15},
           {id:2, message: 'hey a you develooers?', likeCount: 17},
           {id:3, message: 'hi, its my firt post', likeCount: 20},
           {id:4, message: 'hi, its my fird post', likeCount: 20},
           {id:5, message: 'hey a you develooers?', likeCount: 17},
           {id:6, message: 'hi, its my firt post', likeCount: 20},
           {id:7, message: 'hi, its my react app post', likeCount: 20}
        
           ],
      newPostText : ''        
    },
    
  dialogsPage: {
   
   dialogs: [
      {id: 1, name: 'Hey'},
      {id: 2, name: 'Elena'},
      {id: 3, name: 'Hey'},
      {id: 4, name: 'How are you?'},
      {id: 5, name: 'Hey'},
      {id: 6, name: 'H my friend'}  
           ],
    
   newMessageBody : '',
      
   messages: [
       {id: 1, message: 'Kate'},
       {id: 2, message: 'Sergey'},
       {id: 3, message: 'YoDa'},
       {id: 4, message: 'Sega'},
       {id: 5, message: 'JKate'},
       {id: 6, message: 'ReactSergey'}
            ]
  },
  
    sideBar: {}
  },
  
   
   _callSubscriber() {
       alert("hello");
      },

    dispatch (action) {
      
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      
           
      this._callSubscriber(this._state);
              },

 Subscribe(observer) { 
   this._callSubscriber = observer;
        },
  
    getState(){
    return this._state;
    }
  
    }

  
export default store;
window.store = store;