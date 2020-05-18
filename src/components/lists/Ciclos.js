import React from 'react'
import Person from './Person'

export default function Ciclos() {
    const persons = [
        {
            id:1,
            name: 'Bruce',
            age: 30,
            skill : 'React'
        },
        {
            id:2,
            name: 'Clark',
            age: 25,
            skill : 'Angular'
        },
        {
            id:3,
            name: 'Diana',
            age: 28,
            skill : 'React'
        },
      
    ]
const personList = persons.map(person => {return <Person person={person} key={person.id}/> })

    return (
        <div>
            {
                personList
            }
        </div>
    )
}
