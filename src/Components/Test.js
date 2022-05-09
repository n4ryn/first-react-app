// import style from './Demo.css';
import Demo from "./Demo";

const Test = () => {
    const name = 'aada';
    return (
      <>
        <h1>Hello</h1>
        <Demo fname={name} lname='xyz' age='1'/>
        <h2>{name}</h2>
      </>
    );
  }
  
  export default Test;