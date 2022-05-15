import React from 'react';
import AgeUser from "./Greeting"

const userInfo = {
     firstName: "Tom",
     lastName:'Frens',
     birthday: new Date('27 Apr 2021')
}

 const App = () => {
    return(<AgeUser
        firstName={userInfo.firstName}
        lastName={userInfo.lastName}
        birthDate={userInfo.birthday}
/>)
}
export default App