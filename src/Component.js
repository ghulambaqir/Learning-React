import React from 'react'
import Users from './Users'

export default function Component() {

    const users = [{ key: 0, name: "BAQIR", email: "baqir@test.com", contact: "3333" },
    { key: 1, name: "najaf", email: "najaf@test.com", contact: "5555" },
    { key: 2, name: "shakir", email: "shakir@test.com", contact: "1111" },
    ]
    return (
        <div>
            <h1>Reusing the Component</h1>
            {
                users.map((user) =>
                    <Users key={user.key} data={user} />
                )
            }
        </div>
    )
}
