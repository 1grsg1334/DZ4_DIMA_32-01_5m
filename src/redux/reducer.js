import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";
export const rootReducer = combineReducers({
    titleReducer,
    usersReducer
})
























// 1 урок

// const initialState = {
//     title: "old tittle",
//     aboutTitle: "",
//     contactTitle: "",
//     count: 0
// }
//
// export default function reducer(state = initialState, action)  {
//     if (action.type === "CHANGE_TITLE") {
//         return {...state, title: "new title"}
//     } else if (action.type === "CHANGE_ABOUT_TITLE") {
//         return {...state, aboutTitle: "Hello Geeks"}
//     } else if (action.type === "WITH_PARAMS") {
//         return {...state, contactTitle: action.payload}
//     } else if (action.type === "FROM_INPUT") {
//         return {...state, contactTitle: action.payload}
//     } else if (action.type === "INCREASE_NUMBER") {
//         return {...state, count: state.count +1}
//     } else if (action.type === "DECREASE_NUMBER") {
//         return {...state, count: Math.max(state.count - 1, 0)}
//     } else if (action.type === "CLEAR_NUMBER") {
//         return {...state, count: 0}
//     } else if (action.type === "ADD_NUMBER_TEN") {
//         return {...state, count: state.count +10}
//     }
//
//     return state
// }
