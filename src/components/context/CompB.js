import React, { Component } from 'react'
import UserContext, { UserConsumer } from './UserContext'
import CompC from './CompC'

class CompB extends Component {

    //usando esta forma solo podemos subscribirnos a componentes de tipo clase y a un solo contextType
    static contextType = UserContext

    render() {
        return (
            <div>
                COntext is {this.context}
                <CompC></CompC>
            </div>
        )
    }
}

//RECOMMENDED
//CompB.contextType = UserContext

export default CompB