import React, { Component } from 'react'
import CompB from './CompB'
import CompC from './CompC'

export default class CompA extends Component {
    render() {
        return (
            <div>
                <CompB></CompB>
            </div>
        )
    }
}
