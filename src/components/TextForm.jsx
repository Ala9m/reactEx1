/*import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Upper handle click was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleClearClick = () =>{
      let newText = "";
      setText(newText);
    }

    const handleOnChange = (event) =>{
        //console.log("On chnage")
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    //text = "new text";  wrong way to change the state
    //setText("new text"); correct way to change the state
  return (
    <>
<div className="container">
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>


</div>

<div className="container my-3">
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p><b>{0.008 * text.split(" ").length} Minutes read</b></p>

  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}*/








import './TextForm.css'
import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [isUnderlined, setIsUnderlined] = useState(false);
    const [isBold, setIsBold] = useState(false);

    
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase succeed", "success");
    }
    
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase succeed", "success");
    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
    }

    const handleUnderlineClick = () => {
        setIsUnderlined(!isUnderlined); // Toggle underline state
    }


    const handleCopy = () =>{
        console.log("I am a copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied", "success");
    }


    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    

    const handleBoldClick = () => {
        setIsBold(!isBold); 
    }


    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{color: props.mode==='dark' ? 'white' : '#443f3f'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ textDecoration: isUnderlined ? 'underline' : 'none', fontWeight: isBold ? 'bold' : 'normal', backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode==='dark' ? 'white' : '#443f3f'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleUnderlineClick}>Underline Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                <span className="blds mx-1"><i className="fa-solid fa-bold" onClick={handleBoldClick}></i></span>
                <button className='srbt mx-1'><img src="./images/search.png" alt="" /></button>
            
            </div>

            <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : '#443f3f'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p><b>{0.008 * text.split(" ").length} Minutes read</b></p>

                <h2>Preview</h2>
                <p style={{ textDecoration: isUnderlined ? 'underline' : 'none', fontWeight: isBold ? 'bold' : 'normal' }}>{text.length>0?text:"Enter ur text to preivew"}</p>
            </div>
        </>
    );
}
  