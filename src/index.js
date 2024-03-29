import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";
import {rootReducer} from "./redux/reducer";
import App from "./App";
import {Provider} from "react-redux";
// import {thunk} from "redux-thunk";

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);