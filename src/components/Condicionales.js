import React, { Component } from "react";

class Condicionales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  //IF-ELSE
  /*render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Yoe</div>;
    } else {
      return <div>Welcome Guest</div>;
    }*/

  //USING JAVASCRIPT VARIABLES FOR STORE ELEMENTS
  /*render() {
    let message;

    if (this.state.isLoggedIn) {
      message = <div>Welcome Yoe</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }

    return <div>{message}</div>;
    */


  //USING TERNARY OPERATOR
  /*render(){
      return (
        this.state.isLoggedIn 
        ?
        <div>Welcome Yoe</div>
        :
        <div>Welcome Guest</div>
    )*/


  render(){
    return this.state.isLoggedIn && <div>Welcome Yoe</div>
  
  }
}

export default Condicionales;
