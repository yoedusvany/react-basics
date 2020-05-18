import React, { Component } from "react";

export default class FormExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      topic: "",
    };
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeSelect = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    alert(`${this.state.name} ${this.state.topic}`);
    e.preventDefault();
  };

  render() {
    const { name, topic } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input name="name" value={name} onChange={this.onChangeName}></input>
          <select name="topic" value={topic} onChange={this.onChangeSelect}>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
          </select>

          <div>
            {name}
            {topic}
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
