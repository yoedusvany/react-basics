import React from 'react'

export default function Person(props) {
    console.log(props);
    
    return (
        <div><h2>{props.person.name}</h2>{props.person.age}--{props.person.skill}</div>
    )
}
