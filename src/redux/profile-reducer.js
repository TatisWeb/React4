const profileReducer = (state,action) => {


const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const ADD_POST = 'ADD_POST';   
      
      
      if (action.type === 'ADD_POST') {
        
      let text = 
this._state.profilePage.newPostText;
this._state.profilePage.newPostText = '';   this._state.profilePage.posts.push({id:9,message: text , likeCount: 9});
this._callSubscriber(this._state);
      }
      
      else if 
        (action.type === 'UPDATE_NEW_POST')        {    
          this._state.profilePage.newPostText = action.newText;
 this._callSubscriber(this._state);          
         
          }
      
            
  
  return state;
}


