export default function App_content_before(){
  return(
    <form>
      <p ref={resultRef}> 
        {result} 
      </p> 
    <input
    pattern="[0-9]" 
    ref={inputRef} 
    type="number" 
    placeholder="Type a number" 
    /> 
    <button onClick={plus}>{" + "}</button>
    <button onClick={minus}>{" - "}</button>
    <button onClick={times}>{" x "}</button>
    <button onClick={divide}>{" ÷ "}</button>
    <button onClick={resetInput}>{"Reset Input"}</button> 
    <button onClick={resetResult}>{"Reset Result"}</button>
    </form>
    
  );

}

