import {React, useState} from 'react';
// import style from './Demo.css';
// import "./Demo.css";
import Button from "./Button";

function Demo (props) {
    const fontstyle = {color: 'red'}
    // console.log(props);
    let [textName, setTextName] = useState('');
    const getInputValue = (e) => {
      // console.log('abc');
      console.log(e.target.value);
      // text = 'test';
      // setText('Hello');
      setTextName(e.target.value);
    }

    return (
      <>
        <h1 style = {fontstyle}>Hi</h1>
        <input type='text' placeholder='Enter Text' onChange={getInputValue}></input>
        <h1>{textName}</h1>
        <Button></Button>
      </>
    );
  }
  
  export default Demo;