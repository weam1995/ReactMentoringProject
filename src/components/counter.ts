import {useState, createElement} from 'react';

const Counter = ({initialValue}:CounterProps)=>{
    const [value, setValue] = useState(initialValue);
    const incrementCounter = (e:Event) => {
        setValue(value+1);
    }
    const decrementCounter = (e:Event) => {
        setValue(value-1);
    }

    const counterValueElement =  createElement('h1',{}, value);
    const incrementButtonElement = createElement('button', {
        onClick: incrementCounter,
    }, "Increment Counter");
      
    const decrementButtonElement = createElement('button', {
        onClick: decrementCounter,
    }, "Decrement Counter");

    const counterElement = createElement('div',{},
    counterValueElement, 
    incrementButtonElement,
    decrementButtonElement
    );
    return counterElement;


}
export default Counter;

