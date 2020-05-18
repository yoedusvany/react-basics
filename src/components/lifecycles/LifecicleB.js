import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: this.props.name
        }

        console.log('Life cycle B constructor');
        
    }

    static getDerivedStateFromProps(props, state){
        console.log('life cycle B getDerivedStateFromProps');
        return null;
    }

    componentDidMount(prevProps, prevState, snashot){
        console.log(prevProps);
        console.log(prevState);
        console.log('lifecycle B ComponentDidMount');
        
    }

    shouldComponentUpdate(){
        console.log('lifecycle B render');
        return true        
    }

    getSnapshotBeforeUpdate(){
        console.log('LIFE CYCLE B GETsNAPSHOTbEFOREuPDATE');
        return null
    }

    componentDidUpdate(){
        console.log('LIFE CYCLE B componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('component unmounting');
    }
    
    render() {
        console.log('life cycle B render');
        
        return (
            <div>
                Lifecycles B {this.state.name}
            </div>
        )
    }
}
