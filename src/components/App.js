import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Input from "./Input";
import ClearButton from "./ClearButton";
import * as math from "mathjs";

class App extends Component {
  state = {
    input: ""
  };

  addtoInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  handleClear = () => {
    this.setState({
      input: 0
    });
  };

  handleEqual = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addtoInput}>7</Button>
            <Button handleClick={this.addtoInput}>8</Button>
            <Button handleClick={this.addtoInput}>9</Button>
            <Button handleClick={this.addtoInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addtoInput}>4</Button>
            <Button handleClick={this.addtoInput}>5</Button>
            <Button handleClick={this.addtoInput}>6</Button>
            <Button handleClick={this.addtoInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addtoInput}>1</Button>
            <Button handleClick={this.addtoInput}>2</Button>
            <Button handleClick={this.addtoInput}>3</Button>
            <Button handleClick={this.addtoInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addtoInput}>.</Button>
            <Button handleClick={this.addtoInput}>0</Button>
            <Button handleClick={this.addtoInput}>-</Button>
            <Button handleClick={this.handleEqual}>=</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.handleClear()}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
