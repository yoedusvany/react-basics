import React, { Component } from 'react'
import LifecycleB from './LifecicleB';

export default class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             hide: false
        }

        console.log('Life cycle A constructor');
        
    }

    static getDerivedStateFromProps(props, state){
        console.log('life cycle A getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('lifecycle A ComponentDidMount');
        this.setState({
            name: 'Yoe'
        })
    }

    shouldComponentUpdate(){
        console.log('lifecycle A render');
        return true        
    }

    getSnapshotBeforeUpdate(){
        console.log('LIFE CYCLE A GETsNAPSHOTbEFOREuPDATE');
        return null
    }

    componentDidUpdate(){
        console.log('LIFE CYCLE A componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution',
            hide: !this.state.hide
        })
    }

    render() {
        console.log('life cyle A render');
        const {hide} = this.state;

        let showChild = hide ? 'NO MOSTRADO' : <LifecycleB name={this.state.name}> </LifecycleB>;
        
        return (
            <div>
                Lifecycles
                <button onClick={this.changeState}> Change State</button>
                {showChild}
            </div>
        )
    }
}
