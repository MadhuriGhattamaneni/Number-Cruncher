import React from 'react';
import '../index.css'
const Button = (props) => {
  return (
    <input
      className='cell'
      type="button"
      value={props.label}
      onClick = {props.evaluate}
    />
  );
}
export default Button;