import React from "react";

const age = (birthday) => {
    let timeNow = new Date();
    let age = timeNow.getFullYear() - birthday.getFullYear()
    return age
} 

const AgeUser = (props) => {
    return ([<div className="greeting">
        My name is {props.firstName} {props.lastName}. I'm {age(props.date)} years old
    </div>])
};

export default AgeUser