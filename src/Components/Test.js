// import style from './Demo.css';
// import Demo from "./Demo";

const Test = (props) => {
    console.log('ff', props.fakedata);
    // const name = 'aada';
    const color = props.color
    const value = props.code

    return (
      <>
        {/* <h1>Hello</h1> */}
        {/* <Demo fname={name} lname='xyz' age='1'/> */}
        {/* <h2>{name}</h2> */}
        {/* <h1>Test</h1> */}
        {/* <h1>{props.fakedata[0].color}</h1>
        <p>{props.fakeData[0].value}</p>
        <h1>{props.fakedata[1].color}</h1>
        <p>{props.fakeData[1].value}</p>
        <h1>{props.fakedata[2].color}</h1>
        <p>{props.fakeData[2].value}</p> */}
        <h1 key={color} style={{color:value}}>{color}</h1>
      </>
    );
  }
  
  export default Test;