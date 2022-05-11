// import './Components/Card.css';
// import Demo from "./Demo";

const Card = (props) => {
    console.log('ff', props.fakedata);
    const id = props.id
    const title = props.title
    const body = props.body

    return (
      <>
        <body style = {{height: "500px", width: "400px", backgroundColor: "lightgray", color: "#333", borderRadius: "20px", border: "5px solid #333", margin: "auto", marginBottom: "20px"}}>
            <header style = {{backgroundColor: "gray", padding: "0px 10px 0px 10px", color: "#FFF", display: "flex", justifyContent: "space-between", borderRadius: "14px 14px 10px 10px"}}>
                <h1>{title}</h1>
                <h1>{id}</h1>
            </header>
            <main style = {{padding: "10px"}}>{body}</main>
        </body>
      </>
    );
  }
  
  export default Card;