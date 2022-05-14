import React from 'react'
import Comment from './Comment'

 const userInfo = {
    name: "Tom",
    avatarUrl:"https://avatars.githubusercontent.com/u/69631?s=200&v=4"
}

 const App = () => {
    return(<Comment
    author={userInfo}
    text='Good Job'
    date ={new Date()}
/>)
}
export default App