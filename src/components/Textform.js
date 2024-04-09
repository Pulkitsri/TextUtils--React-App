import React, {useState} from 'react'


export default function Textform(props) {
    
    //funciton to handle onchange
    const handleOnchange = (event) =>{
        setText(event.target.value);
        //console.log(event.target.value);
    }
    //function to change text to Uppercase
    const handleUpClick = (event)=>{
        let newtext =  text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
       
    }
    //function to change text to Lowercase
    const handleLoClick =(event)=>{
        let newtext =  text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase","success");
    }

    //function to copy text
    const handleClear = (event)=>{
      setText('');
      props.showAlert("Text cleared","success");
    }

    //function to copy text
    const handleCopy=(event)=>{
        console.log("I am copy!!");
        var text =  document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!!","success");
    }

    //funcion to remove extra spaces
    const handleRemoveExtraSpace=(event)=>{
         setText(text.replace(/\s+/g,' ').trim());
        props.showAlert("Removed extara spaces!!","success");

    }

    //function to undo change
    const handleUndo=(event)=>{

    }

    //State
    const [text ,setText] = useState('');
  return (
    <>
    <div className="container"> 
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}> 
        <h2 className="my-2">{props.heading}</h2>
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'} } onChange={handleOnchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length===0}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length===0}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear} disabled={text.length===0}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpace} disabled={text.length===0}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary mx-1 my-1" onClick={handleUndo} disabled={text.length===0}>Undo</button> */}
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
     <h2>Your text summary</h2>
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Nothing to preview here"}</p>

    </div>
    </>
  )
}
