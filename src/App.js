import {useRef, useState, useEffect} from "react"; 
import {create, all} from 'mathjs';
import 'mathlive';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrimFunctions from "./components/PrimFunctions";
import SecondFunctions from "./components/SecondFunctions";
import DigitGrid from "./components/DigitGrid";
import {ComputeEngine} from "https://unpkg.com/@cortex-js/compute-engine?module";
import "./App.css";



function App() {    
  const [expression, setExpression] = useState("");  
  const [result, setResult] = useState("");  
  const [isAngleInDeg, setIsAngleInDeg] = useState(false);
  const [angleUnit, setAngleUnit] = useState("Rad");
  const [angleToggleButton, setAngleToggleButton] = useState("Deg");
  const [sciNotation, setSciNotation] = useState(true);
  const [sciNotationLabel, setSciNotationLabel] = useState("Sci");
  const mf = useRef();


  useEffect(() => {
    mf.current.focus();
    mf.current.mathVirtualKeyboardPolicy = "manual";
    mf.current.addEventListener(
      'keydown', 
      (e) => e.preventDefault(), 
      {capture:true});
  }, [])

  useEffect(() => {
    if (isAngleInDeg) {
      setAngleUnit("Deg");
      setAngleToggleButton('Rad');      
    } else {
      setAngleUnit("Rad");
      setAngleToggleButton('Deg');
    } 
  }, [isAngleInDeg]);

  useEffect(() => {
    if (sciNotation) {
      setSciNotationLabel("Sci");            
    } else {
      setSciNotationLabel("Std");      
    } 
  }, [sciNotation]);

  
 function angleToggle(e){
    e.preventDefault();    
    setIsAngleInDeg((prev) => !prev);    
  };

  function sciNotationToggle(e){
    e.preventDefault();    
    setSciNotation((prev) => !prev);    
  };


  const config = {
    // Scientific notation  {lower and upper boundaries}
    notation: 'auto',
    lowerExp: -3,
    upperExp: 3,
    number: 'BigNumber',
    precision: 64
  };
  const math = create(all, config);
  
  // function closingParentheseHandler(e){
  //   e.preventDefault();
  //   const currentValue = closingParValue || e.target.value;
  //   setExpression((expression) => String(expression) + currentValue);
  //   if (closingParValue !== ""){
  //     setClosingParValue("");
  //   }

  // };
 
  
  function nthRootHandler(e){
    e.preventDefault();
    const len = expression.length;
    if (len > 0){
      // use https://www.debuggex.com/#cheatsheet to test your regex
      let rootPower = (expression.split(/[(\\times)(\\div)\+\- ]/)).at(- 1); 
      let rootExpInLatex = e.target.value + String(rootPower) + "\\;\\;]{(";
      let len_rootPower = rootPower.length;
      setExpression((expression) => String(expression.slice(0, -len_rootPower)) + rootExpInLatex);
    } else{
      setExpression((expression) => String(expression + "Error: Please\\;enter\\;the\\;root\\;order\\;first!")); 
    }     
  };

  // function trigoFuncHandler(e){
  //   e.preventDefault();
  //   if (isAngleInDeg){
  //     setExpToComputeWith((prev) => {return prev + e.target.value + "\\frac{\\pi}{180}\\times"});      
  //   } 
  //   setExpression((prev) => prev + e.target.value);
  //   mf.current.focus();    
  // };

  // function inverseTrigoFuncHandler(e){
  //   e.preventDefault();
  //   if (isAngleInDeg){
  //     setExpToComputeWith((prev) => prev + "(\\frac{180}{\\pi})\\times" + e.target.value);      
  //   } 
  //   setExpression((prev) => prev + e.target.value);
  //   mf.current.focus(); 

  // };

  function appendDigit(e){
    e.preventDefault();
    setExpression((expression) => expression + e.target.value);  
    mf.current.focus();   
  };

  
  function performOperation(e){
    e.preventDefault();

    function roundTozero(num, tolerance="0.0000000001"/*tolerance=e-10*/){
      return (math.abs(num) < Number(tolerance))? 0 : num;
    };

    // I must to replace any "\\large" and "\\;\\;" occurrence in the expression
    // in order to use Compute Engine(CE) to evaluate it. CE does not compile any 
    // expression with these terms. They were only used for rendering purpose.
    let expInArray = expression.replace(/(\\large)|(\\;\\;)/g, "").split("\\");

    if(isAngleInDeg && expInArray.length > 0){      
      for(let i = 0; i < expInArray.length; i++){
        let expItem = expInArray[i];        
        let matchedElems = expItem.match(/^(cos|sin|tan)(\{\()(.*)(\)\})/) || expItem.match(/^(arccos|arcsin|arctan)(\{\(.*\)\})/);       
        if (matchedElems !== null){
          if((matchedElems[1]).at(0) !== "a"){
            expItem = (String(matchedElems[1]) + 
                      String(matchedElems[2]) + "(" +
                      String(matchedElems[3]) + ")" +
                      "\\times\\frac{\\pi}{180}" + 
                      String(matchedElems[4]));
          } else {
            expItem = ("frac{180}{\\pi}\\times" + "\\" +
                      String(matchedElems[0]));                    
          }          
          expInArray[i] = expItem;                  
        }        
      }      
    }  

    try{   
      const ce = new ComputeEngine({precision: 10});
      const exp = ce.parse(expInArray.join("\\")); 
      sciNotation ? setResult(roundTozero(math.format(exp.N().value, {precision:10})))
                  : setResult(roundTozero(exp.N().value));
    } catch(e){
      setResult(e);
    }
  };

  function prependMinus(e){
    e.preventDefault();
    setExpression((expression) => expression + "-");
    mf.current.focus();
  };
  
  function del(e) { 
    e.preventDefault(); 
    if (expression.length > 0){
      if (/[\d.\+\-]/.test(expression.at(-1))){
        setExpression((prev) => prev.slice(0, prev.length - 1));
      } else if(expression.at(-1) === "}"){
        setExpression((prev) => prev.slice(0, prev.length - 2));        
      } else{
        let expToWorkWith = expression.split("\\");
        let _ = expToWorkWith.pop();
        setExpression(expToWorkWith.join("\\"));
      }      
    }          
    mf.current.focus();
  }; 
 
  function clearAll(e) { 
  	e.preventDefault();
    setExpression("");
    setResult("");
    mf.current.focus(); 
  }; 
 
  return ( 
    <div className="App">
      <div className="calculator">      
        <div className="appTitle">
          <h3>Calculator</h3>
        </div>   
        <div className="output">           
          <p style={{textAlign:"left", paddingLeft: "10px", fontSize:"10px", fontWeight:"bold", color:"rgb(16, 86, 237)"}}>{angleUnit} {sciNotationLabel}</p>     
          <math-field 
            ref={mf}
            value={expression} 
            className="mathField"
          >
          </math-field> <br></br>
          <p className="result" >{result}</p>
        </div>
              
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/primary" />}></Route>

              <Route path="/primary" element={<PrimFunctions NthRoot={nthRootHandler} 
                AppendDigit={appendDigit} />}></Route>

              <Route path="/secondary" element={<SecondFunctions AppendDigit={appendDigit} 
                Toggle={angleToggle} SciNot={sciNotationToggle} ToggleButton={angleToggleButton} />}></Route>
            </Routes>
          </BrowserRouter>        
                    
          <DigitGrid HandleEqual={performOperation} AppendDigit={appendDigit} 
            NegateNumber={prependMinus} Del={del} ClearAll={clearAll} />          
      </div>  
    </div>   
  ); 
} 

export default App; 

