import React from 'react';
import moment from "moment"


const formatDate = date => moment(date).format("DD MMM YY");



const Profile = (props) => {
    return ([<div className='greeting'>
       <span className="profile__name">{props.firstName} {props.lastName}.</span>
       <span className="profile__birth"> Was born {formatDate(props.birthDate)} in {props.birthPlace}</span>
   </div>])   
}
export default Profile

