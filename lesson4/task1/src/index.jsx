import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import App from './App'



const rootelement = document.querySelector('#root')

const element = <App/>;


ReactDOM.render(element,rootelement)