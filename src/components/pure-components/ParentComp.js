import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './memo/MemoComp'

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Yoe'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Yoe'
            })
        }, 2000)
    }
    
    render() {
        console.log('----************Render Parent component********--------');

        return (
            <div>
                Parent Component
                {/*<RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>*/}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}
