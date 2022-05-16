import React from 'react';
import Profile  from "./Profile"
import './index.scss'
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root')
ReactDOM.render(<Profile   firstName= 'James'
  lastName= 'Bond'
  birthDate= '1991-01-17T11:11:11.819Z'
  birthPlace= 'London'></Profile>,rootElement)