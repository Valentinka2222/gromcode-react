import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ConnectionStatus from './ConnectionStatus';

const rootelement = document.querySelector('#root');

ReactDOM.render(<ConnectionStatus />, rootelement);
