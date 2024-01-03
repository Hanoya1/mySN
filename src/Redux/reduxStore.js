import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer ";
import { combineReducers, legacy_createStore } from "redux";
import friendsListReducer from "./friendsListReducer";
import usersPageReducer from "./usersPageReducer";


let reducers = combineReducers({
   profilePage: profilePageReducer,
   messagesPage: messagesPageReducer,
   friendsList: friendsListReducer,
   usersPage: usersPageReducer
})

let store = legacy_createStore(reducers)

window.store = store

export default store;