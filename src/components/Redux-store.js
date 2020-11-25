import profileReducer from '../redux/profile-reducer';
import dialogsReducer from '../redux/dialogs-reducer';
import {combineReducers, createStore} from 'redux';

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);
  
export default store;
window.store = store;