import React, { Component } from "react";
import Item from "./Item";

export default class TableCmp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
    };
  }

  addToStart = () => {
    const length = this.state.items.length;

    this.setState((prevState) => ({
      items: [
        {
          id: length,
          item: "item" + length,
          date: new Date(),
        },
        ...prevState.items,
      ],
    }));
  };

  addToEnd = () => {
    const length = this.state.items.length;

    this.setState((prevState) => ({
      items: [
        ...prevState.items,
        {
          id: length,
          item: "item" + length,
          date: new Date(),
        },
      ],
    }));
  };

  clearArray = () => {
    this.setState({
      items: [],
    });
  };

  resetArray = () => {
    this.setState({
      items: this.props.items,
    });
  };

  updateArray = () => {
    this.setState(state => {
      const items = state.items.map(item => item + 1);
 
      return {
        items,
      };
    }, () => {
      console.log(this.state.items)
    });
  };

  render() {
    const itemsLIst = this.state.items.map((item, index) => {
      return <Item key={index} item={item} />;
    });
    return (
      <div>
        <button onClick={this.updateArray}>Update</button>
        <button onClick={this.resetArray}>Reset</button>
        <button onClick={this.clearArray}>Clear</button>
        <button onClick={this.addToStart}>Add to Start</button>
        <button onClick={this.addToEnd}>Add to End</button>
        <table border={1} className={"text-center"}>
          <tr>
            <td>ID</td>
            <td>ITEM</td>
            <td>DATE</td>
          </tr>
          {itemsLIst}
        </table>
      </div>
    );
  }
}
