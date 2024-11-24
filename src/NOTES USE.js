import React from "react";

// 1. create class instance #fff
class Counter extends React.Component {
  // 3. to use state #40c057
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    // 1. event handlers #fa5252
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // 2. event handlers #fa5252
  handleDecrement() {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  }
  handleIncrement() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  // 2. render and return #fff
  render() {
    const date = new Date("june 21 2017");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        {/* 3. event handlers #fa5252 */}
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <span>{date.toDateString()}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
