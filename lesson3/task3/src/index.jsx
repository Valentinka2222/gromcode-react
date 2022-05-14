import React from 'react';
import Comment from "./Comment"
import './styles.scss'
import ReactDOM from 'react-dom';

const rootelement = document.querySelector('#root')

const userInfo = {
    name: "Tom",
    avatarUrl:"https://avatars.githubusercontent.com/u/69631?s=200&v=4"
}


ReactDOM.render(<Comment
    author={userInfo}
    text='Good Job'
    date ={new Date()}
/>, rootelement)


