const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const ADD_POST = 'ADD_POST';

let initialState = {
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

};

const profileReducer = (state = initialState,action) => {
      
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

export const addNewPostCreator = () => ({
    type: ADD_POST});

export const updateNewPostCreator = (text) => ({
    type: UPDATE_NEW_POST ,
    newText: text
    });