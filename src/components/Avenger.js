import React from 'react'
import '../App.css'

export default function Avenger(props) {
    console.log(props)
    const id = props.match.params.id;
    console.log(id)
    const match = props.avengers.find(avenger => `${avenger.id}` === id)
    return (
        <div>
            <h1>{match.name}</h1>
        </div>
    )
}
