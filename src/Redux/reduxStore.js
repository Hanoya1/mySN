import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer ";
import { combineReducers, legacy_createStore } from "redux";
import friendsListReducer from "./friendsListReducer";


let reducers = combineReducers({
   profilePage: profilePageReducer,
   messagesPage: messagesPageReducer,
   friendsList: friendsListReducer
})

let store = legacy_createStore(reducers)

window.store = store

export default store;