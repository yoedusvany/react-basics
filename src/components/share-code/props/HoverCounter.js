import React, { Component } from 'react'

export default class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
        )
    }
}
