import './App.css';
import React from 'react';
// import MainPage from "./pages/mainPage/MainPage";
// import UsersPage from "./pages/usersPage/UsersPage";
import PostForm from "./pages/userForm/UserFormInput";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="app">
            {/*<MainPage/>*/}
            {/*<UsersPage/>*/}
            <PostForm/>
        </div>
    );
};

export default App;