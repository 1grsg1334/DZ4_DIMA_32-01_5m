import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./Сounter.css"

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch(); //

    const increaseNumber = () => {
        dispatch({
            type: "INCREASE_NUMBER"
        });
    }

    const decreaseNumber = () => {
        dispatch({
            type: "DECREASE_NUMBER"
        });
    }

    const clearNumber = () => {
        dispatch({
            type: "CLEAR_NUMBER"
        });
    }

    const numberTen = () => {
        dispatch({
            type: "ADD_NUMBER_TEN"
        });
    }
    return (
        <div className={"counter"}>
            <h1>Счетчик</h1>
            <h2>{count}</h2>
            <button onClick={increaseNumber}>Добавить</button>
            <button onClick={decreaseNumber}>Удалить</button>
            <button onClick={clearNumber}>Очистить</button>
            <button onClick={numberTen}>+10</button>
        </div>
    );
};

export default Counter;