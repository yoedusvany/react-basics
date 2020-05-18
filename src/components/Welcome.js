import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.name}..... {this.props.heroName}
                {this.props.children}
            </div>
        );
    }
}

export default Welcome;