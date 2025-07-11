
import  {Link } from "react-router-dom";


function SecondFunctions(props){
  return(
    <div className="funcContainer">
      <button className="funcButton A">        
        <Link to="/primary" style={{textDecoration:"none"}}>{"Back"}</Link>  
      </button>
      <button className="funcButton B" value={"\\cosh{("} onClick={props.AppendDigit}>cosh</button>
      <button className="funcButton C" value={"\\sinh{("} onClick={props.AppendDigit}>sinh</button>
      <button className="funcButton D" value={"\\tanh{("} onClick={props.AppendDigit}>tanh</button>
      <button className="funcButton L" value={"SCIENTIFIC MODE"} onClick={props.SciNot}>Sci</button>
      <button className="funcButton F"  onClick={props.Toggle}>{props.ToggleButton}</button>
      <button className="funcButton G" value={"\\arccos{("} onClick={props.AppendDigit}>acos</button>
      <button className="funcButton H" value={"\\arcsin{("} onClick={props.AppendDigit}>asin</button>      
      <button className="funcButton I" value={"\\arctan{("} onClick={props.AppendDigit}>atan</button>
      <button className="funcButton E" value={"!"} onClick={props.AppendDigit}>x!</button>
      <button className="funcButton J" value={"{e}"} onClick={props.AppendDigit}>e</button>
      <button className="funcButton K" value={"\\%"} onClick={props.AppendDigit}>%</button>      
      <button className="funcButton O" value={"\\pi"} onClick={props.AppendDigit}>{"\u03C0"}</button>
      <button className="funcButton M" value={"{("} onClick={props.AppendDigit}>{" ( "}</button>
      <button className="funcButton N" value={")}"} onClick={props.AppendDigit}>{" ) "}</button>            
      <button className="funcButton P" value={"\\arcosh{("} onClick={props.AppendDigit}>acosh</button>
      <button className="funcButton Q" value={"\\arsinh{("} onClick={props.AppendDigit}>asinh</button>
      <button className="funcButton R" value={"\\artanh{("} onClick={props.AppendDigit}>atanh</button>
      
    </div>
  );
}

export default SecondFunctions;



