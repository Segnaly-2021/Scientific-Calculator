import  {Link } from "react-router-dom";



function PrimFunctions(props){
  return(
    <div className="funcContainer">
      <button className="funcButton A">        
        <Link to="/secondary" style={{textDecoration:"none"}}>{"More"}</Link>      
      </button>
      <button className="funcButton B" value={"10^{("} onClick={props.AppendDigit}>10<sup>n</sup></button>
      <button className="funcButton C" value={"^{("} onClick={props.AppendDigit}>x<sup>n</sup></button>
      <button className="funcButton D" value={"\\sqrt[\\large"} onClick={props.NthRoot}><sup>n</sup>{"\u221A"}</button>
      <button className="funcButton E" value={"^{(-1)}"} onClick={props.AppendDigit}>x<sup>-1</sup></button>
      <button className="funcButton F" value={"\\log{("} onClick={props.AppendDigit}>log<sub>10</sub></button>
      <button className="funcButton G" value={"\\ln{("} onClick={props.AppendDigit}>ln</button>
      <button className="funcButton H" value={"\\sqrt[\\large3\\;\\;]{("} onClick={props.AppendDigit}><sup>3</sup>{"\u221A"}</button>      
      <button className="funcButton I" value={"\\sqrt{("} onClick={props.AppendDigit}>{"\u221A"}</button>
      <button className="funcButton J" value={"\\cos{("} onClick={props.AppendDigit}>cos</button>
      <button className="funcButton K" value={"\\sin{("} onClick={props.AppendDigit}>sin</button>
      <button className="funcButton L" value={"\\tan{("} onClick={props.AppendDigit}>tan</button>
      <button className="funcButton M" value={"\\exp{("} onClick={props.AppendDigit}>e<sup>x</sup></button>
      <button className="funcButton N" value={"^{3}"} onClick={props.AppendDigit}>x<sup>3</sup></button>
      <button className="funcButton O" value={"^{2}"} onClick={props.AppendDigit}>x<sup>2</sup></button>            
      <button className="funcButton P" value={"{("} onClick={props.AppendDigit}>{" ( "}</button>
      <button className="funcButton Q" value={")}"} onClick={props.AppendDigit}>{" ) "}</button>
      <button className="funcButton R" value={"\\pi"} onClick={props.AppendDigit}>{"\u03C0"}</button>
      
    </div>
  );
}

export default PrimFunctions;