import React, { PureComponent } from 'react';
import calculate from '../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const targetValue = event.target.value;
    this.setState((state) => calculate({
      total: state.total,
      next: state.next,
      operation: state.operation,
    }, targetValue));
  }

  render() {
    // Change code below this line
    const { total, next, operation } = this.state;
    return (
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
            <button onClick={this.handleClick} type="button" className="top-buttons" value="AC">AC</button>
            <button onClick={this.handleClick} type="button" className="top-buttons">&plusmn;</button>
            <button onClick={this.handleClick} type="button" className="top-buttons" value="%">%</button>
            <button onClick={this.handleClick} type="button" className="top-buttons special" value="÷">÷</button>

            <button onClick={this.handleClick} type="button" className="number" value="7">7</button>
            <button onClick={this.handleClick} type="button" className="number" value="8">8</button>
            <button onClick={this.handleClick} type="button" className="number" value="9">9</button>
            <button onClick={this.handleClick} type="button" className="multiplication-sign special" value="x">x</button>

            <button onClick={this.handleClick} type="button" className="number" value="4">4</button>
            <button onClick={this.handleClick} type="button" className="number" value="5">5</button>
            <button onClick={this.handleClick} type="button" className="number" value="6">6</button>

            <button onClick={this.handleClick} type="button" className="subtraction-sign special" value="-">-</button>
            <button onClick={this.handleClick} type="button" className="number" value="1">1</button>
            <button onClick={this.handleClick} type="button" className="number" value="2">2</button>
            <button onClick={this.handleClick} type="button" className="number" value="3">3</button>
            <button onClick={this.handleClick} type="button" className="addition-sign special" value="+">+</button>

            <button onClick={this.handleClick} type="button" className="number-span" value="0">0</button>
            <button onClick={this.handleClick} type="button" className="addition-sign special" value="=">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
