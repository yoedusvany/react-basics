import React, { Component } from 'react'

export default class RegComp extends Component {
    
    render() {
        console.log('Render Regular component');

        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}
