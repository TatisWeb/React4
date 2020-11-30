import profileReducer from '../redux/profile-reducer';
import dialogsReducer from '../redux/dialogs-reducer';
import {combineReducers, createStore} from 'redux';
import usersReducer from '../redux/users-reducer';

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);
  
export default store;
window.store = store;