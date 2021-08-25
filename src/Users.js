import React from 'react'

export default function Users(props) {
    return (
        <div>
            <h1>USER: {props.data.name}</h1>
            <h1>Email: {props.data.email}</h1>
            <h1>Contact: {props.data.contact}</h1>

        </div>
    )
}
