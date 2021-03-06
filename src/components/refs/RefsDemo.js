import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef =null
        this.setCbRef = (element) => {
            this.cbRef = element
        }

    }

    componentDidMount(){
        /*this.inputRef.current.focus();
        console.log(this.inputRef);*/

        //CB REFS
        if(this.cbRef){
            this.cbRef.focus()
        }
        
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <input type='text' ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Text</button>
            </div>
        )
    }
}
