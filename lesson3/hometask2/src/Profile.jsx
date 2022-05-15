import React from 'react';
import moment from "moment"


const formatDate = date => moment(date).format("DD MMM YY");



const Profile = (userData) => {
    return ([<div className='greeting'>
       <span className="profile__name">{userData.firstName} {userData.lastName} </span>
       <span className="profile__birth">Was born {formatDate(userData.birthDate)} in {userData.birthPlace}</span>
   </div>])   
}
export default Profile

