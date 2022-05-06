import {React, useState} from 'react';
import styles from './Button.module.css';
const Button = () => {
    let [text, setText] = useState('hi');
    const onTest = () => {
      console.log('abc');
      text = 'test';
      setText('Hello');
    }
    return (
      <>
        <button className={styles.custbut} onClick={onTest}>Submit</button>
        <h1>{text}</h1>
      </>
    );
  }
  
  export default Button;