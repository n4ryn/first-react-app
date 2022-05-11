// import './Components/Card.css';
// import Demo from "./Demo";

const Card = (props) => {
    console.log('ff', props.fakedata);
    const id = props.id
    const title = props.title
    const body = props.body

    return (
      <>
        <body style = {{height: "50vh", width: "20vw", backgroundColor: "lightgray",  borderRadius: "20px", border: "5px dotted red"}}>
            <header style = {{backgroundColor: "gray", display: "flex", justifyContent: "space-between"}}>
                <h1>{title}</h1>
                <h1>{id}</h1>
            </header>
            <main>{body}</main>
        </body>
      </>
    );
  }
  
  export default Card;