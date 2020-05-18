import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    //TERCERA FORMA--- HACER EL BINDING EN EL CONSTRUCTOR PARA QUE SE EJECUTE UNA SOLA VEZ
    //this.clickHandler = this.clickHandler.bind(this)
  }

  /*clickHandler() {
    this.setState({
      message: "Goodbye",
    });
    console.log(this);
  }*/

  //CUARTA FORMA, USAR ARROW FUNCTIONS
  clickHandler = () => {
      this.setState({
          message: 'Goodbye'
      })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        { /*<button onClick={this.clickHandler.bind(this)}>Click</button> */} {/* ESTA PRIMERA FORMA NO ES RECOMENDADA POR IMPLICACIONES EN EL PERFORMANCE}  */}
        { /*<button onClick={ () => this.clickHandler()}>Click</button> */} {/* ESTA SEGUNDA FORMA NO ES RECOMENDADA POR IMPLICACIONES EN EL PERFORMANCE}  */}
        <button onClick={this.clickHandler}>Click</button> 

      </div>
    );
  }
}
