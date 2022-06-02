import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootelement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Sam',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Sam',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Bob',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
];

ReactDOM.render(<UsersList users={users} />, rootelement);
