import { createElement } from 'react';
import React from 'react';
type CounterProps = {
  initialValue: number;
};

type CounterState = {
  count: number;
};
class Counter extends React.Component<CounterProps, CounterState> {
  state: CounterState = {
    count: this.props.initialValue,
  };

  setValue(count: number) {
    this.setState({ count });
  }
  incrementCounter = () => {
    this.setValue(this.state.count + 1);
  };

  decrementCounter = () => {
    this.setValue(this.state.count - 1);
  };

  render() {
    const counterValueElement = createElement('h1', {}, this.state.count);
    const incrementButtonElement = createElement(
      'button',
      {
        onClick: this.incrementCounter,
      },
      'Increment Counter'
    );
    const decrementButtonElement = createElement(
      'button',
      {
        onClick: this.decrementCounter,
      },
      'Decrement Counter'
    );
    return createElement(
      'div',
      {},
      counterValueElement,
      incrementButtonElement,
      decrementButtonElement
    );
  }
}
export default Counter;
