import "//unpkg.com/mathlive";
import { useRef, useEffect} from "react";
function Output(props){  
  const mf = useRef();

  useEffect(() => {
    mf.current.mathVirtualKeyboardPolicy = "manual";
    mf.current.addEventListener('keydown', (e) => {e.preventDefault();}, {capture:true});
  }, [])
  
  return(
    <div className="output">      
      <input type="text" value={props.Result}  style={{textAlign:"right", fontSize: "15px", border:"none", padding:"5px 10px", outline:"none"}} readOnly></input><br></br> 
      <math-field 
        ref={mf}
        value={props.RawExp} 
        style={{fontSize: "20px", outline:"none"}}></math-field><br></br>
      {/*<input type="text" value={props.}  style={{textAlign:"right", fontSize: "25px", border:"none", padding:"5px 20px", outline:"none"}} autoFocus></input> */}       
        
    </div>    
  );
}

export default Output;