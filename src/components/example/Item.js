import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.item}</td>
                <td>{this.props.item.date.toLocaleDateString()}</td>
            </tr>
        )
    }
}
