import React, {useState} from "react";

export default function TextForm(props) {

    const [text, setText] = useState("")
    // text = "Wrong way to change the text state";

    const handleUpClick = () => {
        // console.log("UpperCase Button was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAllert("Converted to UpperCase !", "success ")
    }

    const handleLowClick = () => {
      let lowText = text.toLowerCase()
      setText(lowText)
      props.showAllert("Converted to LowerCase !", "success ")
    }

    const handleOnChange = (event) => {
        // console.log("Onchange Method")
        setText(event.target.value)
    }

    const handleClearClick = () => {
      let ClearText = ""
      setText(ClearText)
      props.showAllert("Text cleared !", "success ")
    }

    const handleCopyClick = () => {
      let text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAllert("Copied to Clipboard !", "success ")
    }

    const handleRemoveExtraSpacesClick = () => {
      let extra_spaces = text.split(/[ ]+/)
      setText(extra_spaces.join(" "))
      props.showAllert("Removed extra spaces !", "success")
    }
    
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h3>Enter text to analyze</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-dark" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-dark hh" onClick={handleLowClick}>Convert To LowerCase</button>
      <button className="btn btn-dark hh" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-dark hh" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-dark hh" onClick={handleRemoveExtraSpacesClick}>Rem Extr spaces</button>
    </div>
    
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p><strong>{text.split(" ").length}</strong> words, <strong>{text.length}</strong> charactors</p>
      <p><strong>{0.008 * text.split(" ").length}</strong> Minutes to read it </p>

      <h4>Preview</h4>
      <p>{text.length>0?text: "Enter text above to see preview here ! "}</p>
    </div>
    </>
  );
}
