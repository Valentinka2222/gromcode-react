import React from 'react';
import moment from "moment"

const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};
/*export const App = () => {
    return(<Profile
        firstName={userData.firstName}
        lastName={userData.lastName}
        birthDate={userData.birthDate}
        birthPlace={userData.birthPlace}
/>)
}*/
const formatDate = date => moment(date).format("DD MMM YY");



const Profile = (props) => {
    props=userData
    return (<div className='greeting'>
        <span className="profile__name">{`${props.firstName} ${props.lastName}`}</span><br></br>
       <span className="profile__birth">{`Was born ${formatDate(props.birthDate)} in ${props.birthPlace}`}</span>
   </div>)   
}
export default Profile

