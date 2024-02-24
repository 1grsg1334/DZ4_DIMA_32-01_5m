import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const ContactsPage = () => {

    const [input, setInput] = useState("")

    const title = useSelector(state => state.contactTitle)
    const dispatch = useDispatch()
    const withParans = () => {
        dispatch({
            type: "WITH_PARAMS",
            payload: "Front-end Developer"
        })
    }

    const addInput = () => {
        dispatch({
            type: "FROM_INPUT",
            payload: input
        })
    }

    return (
        <div>
            <h1> { title } </h1>
            <button onClick={withParans}>change tittle with parans</button>
            <h1>---------------------------</h1>
            <input type="text" onChange={(event) => setInput(event.target.value)}/>
            <button onClick={addInput}>add</button>
        </div>
    );
};

export default ContactsPage;