import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export default class CompC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName) => {
                    return <div>Hello {userName}</div>
                    }
                }
            </UserConsumer>
        )
    }
}
