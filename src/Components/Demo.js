// import {React, useState} from 'react';
// import style from './Demo.css';
// import "./Demo.css";
// import Button from "./Button";
import Card from "./Card";

function Demo (props) {
    console.log("props data", props.data);
    // let name = props.name;
    const demoData = props.data
    // const fontstyle = {color: 'red'}
    console.log(props);
    

    return (
      <>
        {/* <h1 style = {fontstyle}>Hi</h1>
        <input type='text' placeholder='Enter Text' onChange={getInputValue}></input>
        <h1>{textName}</h1>
        <Button/> */}
        {demoData.map((val, i)=>
          <Card title={val.title} id={val.id} body={val.body}/>
        )}
      </>
    );
  }
  
  export default Demo;