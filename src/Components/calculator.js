import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  render() {
    // Change code below this line
    return (
      <div className="myCalculator">
        <div className="the-whole-box">
          <div className="calculatorScreen">
            <span className="answer">0</span>
          </div>

          <div className="calculatorButtons">
            <button type="button" className="top-buttons" value="AC">AC</button>
            <button type="button" className="top-buttons">&plusmn;</button>
            <button type="button" className="top-buttons" value="%">%</button>
            <button type="button" className="top-buttons special" value="/">/</button>

            <button type="button" className="number" value="number">7</button>
            <button type="button" className="number" value="number">8</button>
            <button type="button" className="number" value="number">9</button>
            <button type="button" className="multiplication-sign special" value="sign">X</button>

            <button type="button" className="number" value="number">4</button>
            <button type="button" className="number" value="number">5</button>
            <button type="button" className="number" value="number">6</button>

            <button type="button" className="subtraction-sign special" value="sign">-</button>
            <button type="button" className="number" value="number">1</button>
            <button type="button" className="number" value="number">2</button>
            <button type="button" className="number" value="number">3</button>
            <button type="button" className="addition-sign special" value="sign">+</button>

            <button type="button" className="number-span" value="0">0</button>
            <button type="button" className="addition-sign special" value="equality">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
