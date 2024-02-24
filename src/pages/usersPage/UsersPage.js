import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {addUserAction, changeInputAction, clearUserAction, deleteAllAction} from "../../redux/actions";


function UsersPage() {

    const dispatch = useDispatch()

    const {value, users} = useSelector(state => state.usersReducer)

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(value))
    }

    const clearUser = () => {
        dispatch(clearUserAction())
    }

    return (
        <div>
            <input value={value} type="text" placeholder="name" onChange={changeInput}/>
            <button onClick={ addUser }>add</button>
            <button onClick={ clearUser }>clear</button>
            <button onClick={ () => dispatch(deleteAllAction())}>delete all</button>

            {users && users.map((user, idx) => <h1 key={idx}>{user}</h1>)}
        </div>
    )
}

export default UsersPage
