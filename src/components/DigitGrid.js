function DigitGrid(props){

  return(
    <div className="digitContainer">
      <button className="digitButton one" value={"1"} onClick={props.AppendDigit}>{" 1 "}</button>
      <button className="digitButton two" value={"2"} onClick={props.AppendDigit}>{" 2 "}</button>
      <button className="digitButton three" value={"3"} onClick={props.AppendDigit}>{" 3 "}</button>
      <button className="digitButton del" onClick={props.Del}>{"Del"}</button>
      <button className="digitButton ac" onClick={props.ClearAll}>{" AC "}</button>
      <button className="digitButton four" value={"4"} onClick={props.AppendDigit}>{" 4 "}</button>
      <button className="digitButton five" value={"5"} onClick={props.AppendDigit}>{" 5 "}</button>
      <button className="digitButton six" value={"6"} onClick={props.AppendDigit}>{" 6 "}</button>      
      <button className="digitButton divide" value={"\\div"} onClick={props.AppendDigit}>{" ÷ "}</button>
      <button className="digitButton minus" value={"-"} onClick={props.AppendDigit}>{" − "}</button>
      <button className="digitButton seven" value={"7"} onClick={props.AppendDigit}>{" 7 "}</button>
      <button className="digitButton eight" value={"8"} onClick={props.AppendDigit}>{" 8 "}</button>
      <button className="digitButton nine" value={"9"} onClick={props.AppendDigit}>{" 9 "}</button>
      <button className="digitButton plus" value={"+"} onClick={props.AppendDigit}>{" + "}</button>
      <button className="digitButton time" value={"\\times"} onClick={props.AppendDigit}>{" x "}</button>            
      <button className="digitButton neg" value={"\\neg"} onClick={props.NegateNumber}>{" (-) "}</button>
      <button className="digitButton zeroo" value={"0"} onClick={props.AppendDigit}>{" 0 "}</button>
      <button className="digitButton dot" value={"."} onClick={props.AppendDigit}>{" . "}</button>
      <button className="digitButton equal" onClick={props.HandleEqual}>{" = "}</button>
    </div>

  );

}

export default DigitGrid;