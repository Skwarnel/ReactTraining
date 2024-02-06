import React, {useState} from 'react';

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);
    const addTask = () => {
        setToDoList( (prev) => {
            return [...prev, `Zadanie ${prev.length + 1}`]
        })
    }
    return (
        <div>
            <button onClick={addTask}>Dodaj zadanie</button>
            <ul>
                {toDoList.map((elem, index) => {
                    return <li key={index}>{elem}</li>
                })}
            </ul>
        </div>
    );
};

export default ToDoList;