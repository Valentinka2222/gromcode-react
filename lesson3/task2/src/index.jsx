import React from 'react';
import SearchField from './Search.jsx'
import ReactDOM from 'react-dom';
import './index.scss'
import './search.scss'

const rootelement = document.querySelector('#root')
ReactDOM.render(<SearchField name="Tom"/>, rootelement)