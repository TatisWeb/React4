import {renderEntireTree } from './render';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE _NEW_MESSAGE_BODY';

let state = {
    
    profilesPage : {
        
    posts: [
           {id:1, message: 'hi, its my firt post', likeCount: 15},
           {id:2, message: 'hey a you develooers?', likeCount: 17},
           {id:3, message: 'hi, its my firt post', likeCount: 20},
           {id:4, message: 'hi, its my fird post', likeCount: 20},
           {id:5, message: 'hey a you develooers?', likeCount: 17},
           {id:6, message: 'hi, its my firt post', likeCount: 20},
           {id:7, message: 'hi, its my fird post', likeCount: 20}
 
           
           ],
    
    profiles: [ 
           {id: 1, name: 'Kate'},
           {id: 2, name: 'Julia'},
           {id: 3, name: 'Alexandra'},
           {id: 4, name: 'Geil'},
           {id: 5, name: 'Sam'},
           {id: 6, name: 'SuperWhiteRembo'}
             ]     
    },
    
  messagesPage: {
   
   messages: [
           {id: 1, message:'Hey'},
           {id: 2, message:'How are you?'},
           {id: 3, message:'Hey'},
           {id: 4, message:'How are you?'},
           {id: 5, message:'Hey'},
           {id: 6, message:'How are you?'},
           {id: 7, message:'Were you been, my friend'}  
              ],
    
    //newMessegeBody : "";
    
   dialogs: [
           {id: 1, name: 'Kate'},
           {id: 2, name: 'Sergey'},
           {id: 3, name: 'YoDa'},
           {id: 4, name: 'Sega'},
           {id: 5, name: 'JKate'},
           {id: 6, name: 'ReactSergey'}
            ]
   
   }
          
    }
    export const subscribe = (observe) => {
        };
export const addMessage = (postMessage) => {
    let newMessage = {
        id: 7,
        message: postMessage
    };
    state.messagesPage.messages.push(newMessage);
    renderEntireTree(state);
} ; 

export const  addPost = (postMessage) => {
    let newPost = {
        id: 57,
        name: postMessage
        };

      state.profilesPage.profiles.push(newPost);
      renderEntireTree(state);
      };
      
    
  //  dispatch(action) {
  //   if else {action.type === UPDATE_NEW_MESSAGE_BODY}{dialogs
   //      this.state.dialogs.newMessegeBody = action.body
         
    // }
   // }  
export default state;