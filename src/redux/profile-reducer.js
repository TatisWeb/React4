const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const ADD_POST = 'ADD_POST';

const profileReducer = (state,action) => {
      
      switch(action.type){
        case ADD_POST:
        
      let text = 
          state.newPostText;
          state.newPostText = '';   state.posts.push({id:9,message: text , likeCount: 9});
      
     return state;
      
       case UPDATE_NEW_POST: 
  
          state.newPostText =         
            action.newText;
      return state;

      default: 
      return state;
 }
}

export default profileReducer;