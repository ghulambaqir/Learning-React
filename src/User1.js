import React from 'react'

export default function User1(props) {
    const name = "Baqir"
    return (
        <div>
            <h1>Lifting State up</h1>
            <h2>User: </h2>
            <button onClick={() => props.func(name)}>Click</button>
        </div>
    )
}
