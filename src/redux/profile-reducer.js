const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const ADD_POST = 'ADD_POST';

const profileReducer = (state,action) => {
      
      if (action.type === 'ADD_POST') {
        
      let text = 
          state.profilePage.newPostText;
          state.profilePage.newPostText = '';   state.profilePage.posts.push({id:9,message: text , likeCount: 9});
      }
      
      else if 
         (action.type === 'UPDATE_NEW_POST')        {    
          state.profilePage.newPostText = action.newText;
          }
      
  return state;
}

export default profilePage;
