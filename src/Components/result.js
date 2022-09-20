import React from 'react';
import '../index.css'

const Result = (props) => {
  return (
    <div className='row'>
      <div className='input col-1'>
        Input&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input className="inputTextbox" type="text" readOnly value={props.inputString} />
      </div>
      <div className='output col-1'>
        Output&nbsp;&nbsp;&nbsp;&nbsp;
        <input className="outputTextbox" type="text" readOnly value={props.outputString} />
      </div>
    </div>
  )
}
export default Result;