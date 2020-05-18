import React, { Component } from 'react'
import CompA from './CompA'
import { UserProvider } from './UserContext'

export default class CompParent extends Component {
    render() {
        return (
            <div>
                <UserProvider value="Yoe1">
                    <CompA></CompA>
                </UserProvider>
            </div>
        )
    }
}
