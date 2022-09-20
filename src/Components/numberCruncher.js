import React from 'react';
import Result from './result.js';
import Button from './button.js';
import '../index.css';

class NumberCruncher extends React.Component {
  constructor() {
    super();

    this.state = {
      inputString: '',
      outputString: ''
    }
    this.evaluate = this.evaluate.bind(this);
  }
  render() {
    return (
      <div className="main">
        <h2> Number Cruncher</h2>
        <div>
          <Result inputString={this.state.inputString} outputString={this.state.outputString} />
          <br></br>
          <div className='row'>
            <Button className='button-style' label={'Clear'} evaluate={this.evaluate} />
            <Button className='button-style' label={'Delete'} evaluate={this.evaluate} />
            <Button className='button-style' label={'='} evaluate={this.evaluate} />
          </div>
          <div>
          <Button className='button-style' label={'8'} evaluate={this.evaluate} />
            <Button className='button-style' label={'9'} evaluate={this.evaluate} />
            <Button className='button-style' label={'.'} evaluate={this.evaluate} />
          </div>
          <div>
          <Button className='button-style' label={'6'} evaluate={this.evaluate} />
            <Button className='button-style' label={'7'} evaluate={this.evaluate} />
            <Button className='button-style' label={'*'} evaluate={this.evaluate} />
          </div>
          <div>
          <Button className='button-style' label={'4'} evaluate={this.evaluate} />
            <Button className='button-style' label={'5'} evaluate={this.evaluate} />
            <Button className='button-style' label={'+'} evaluate={this.evaluate} />
          </div>
          <div>
          <Button className='button-style' label={'2'} evaluate={this.evaluate} />
            <Button className='button-style' label={'3'} evaluate={this.evaluate} />
            <Button className='button-style' label={'/'} evaluate={this.evaluate} />
          </div>
          <div>
            <Button className='button-style' label={'0'} evaluate={this.evaluate} />
            <Button className='button-style' label={'1'} evaluate={this.evaluate} />
            <Button className='button-style' label={'-'} evaluate={this.evaluate} />
          </div>
        </div>
      </div>
    );
  }
  evaluate(event) {

    const value = event.target.value;

    switch (value) {
      case '=': {

        if (this.state.inputString !== '') {
          var ans = '';
          try {
            ans = eval(this.state.inputString);
            console.log(ans);
          }
          catch (err) {
            this.setState({ outputString: "Math Error" });
          }
          if (ans === undefined)
            this.setState({ outputString: "Math Error" });

          else
            this.setState({ outputString: ans, inputString: '' });
          break;
        }
      }
      case 'Clear': {

        this.setState({ inputString: '', outputString: '' });
        break;
      }

      case 'Delete': {
        var str = this.state.inputString;
        str = str.substr(0, str.length - 1);
        this.setState({ inputString: str });
        break;
      }

      default: {

        this.setState({ inputString: this.state.inputString += value })
        console.log(this.state);
        break;
      }
    }
  }
}
export default NumberCruncher;