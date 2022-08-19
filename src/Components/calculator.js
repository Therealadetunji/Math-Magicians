import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const handleClick = (event) => {
    const targetValue = event.target.value;
    setState((state) => calculate({
      total: state.total,
      next: state.next,
      operation: state.operation,
    }, targetValue));
  };
  const { total, next, operation } = state;
  return (
    <div>
      <div>
        <h3 className="Text">
          Lets do some Math
        </h3>
      </div>
      <div className="myCalculator">
        <div className="the-whole-box">
          <div className="calculatorScreen">
            <span>
              {total}

              {operation}

              {next}

            </span>
          </div>

          <div className="calculatorButtons">
            <button onClick={handleClick} type="button" className="top-buttons" value="AC">AC</button>
            <button onClick={handleClick} type="button" className="top-buttons">&plusmn;</button>
            <button onClick={handleClick} type="button" className="top-buttons" value="%">%</button>
            <button onClick={handleClick} type="button" className="top-buttons special" value="÷">÷</button>

            <button onClick={handleClick} type="button" className="number top-buttons" value="7">7</button>
            <button onClick={handleClick} type="button" className="number top-buttons" value="8">8</button>
            <button onClick={handleClick} type="button" className="number top-buttons" value="9">9</button>
            <button onClick={handleClick} type="button" className="multiplication-sign special top-buttons" value="x">x</button>

            <button onClick={handleClick} type="button" className="number top-buttons" value="4">4</button>
            <button onClick={handleClick} type="button" className="number top-buttons" value="5">5</button>
            <button onClick={handleClick} type="button" className="number top-buttons" value="6">6</button>

            <button onClick={handleClick} type="button" className="subtraction-sign special top-buttons" value="-">-</button>
            <button onClick={handleClick} type="button" className="number top-buttons" value="1">1</button>
            <button onClick={handleClick} type="button" className="number top-buttons" value="2">2</button>
            <button onClick={handleClick} type="button" className="number top-buttons" value="3">3</button>
            <button onClick={handleClick} type="button" className="addition-sign special top-buttons" value="+">+</button>

            <button onClick={handleClick} type="button" className="number-span top-buttons" value="0">0</button>
            <button onClick={handleClick} type="button" className="addition-sign special top-buttons" value="=">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
