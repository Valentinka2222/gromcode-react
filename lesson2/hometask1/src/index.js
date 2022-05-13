import './list.css'
import React from 'react';
import ReactDOM from 'react-dom';

const rootelement = document.querySelector('#root')

const seconds = new Date().getSeconds()
const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

const styles = {
    color: textColor,
    backgroundColor,
}

const element = [
<h1 className="title">Todo List</h1>,
<main className="todo-list">
    <div className="actions">
        <input className="task-input" type="text"/>
        <button className="btn create-task-btn">Create</button>
    </div>
    <ul className="list"></ul>
</main>
]

ReactDOM.render(element,rootelement)