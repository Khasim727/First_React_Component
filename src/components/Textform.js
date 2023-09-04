import React,{useState} from 'react'


export default function Textform(props) {
    const upper=()=>{
        // console.log("upper case was clicked");
        let newText=Text.toUpperCase();
        setText(newText);

    }
    const lower=()=>{
        // console.log("upper case was clicked");
        let newText=Text.toLowerCase();
        setText(newText);

    }
    const clear=()=>{
        // console.log("upper case was clicked");
        let newText=""
        setText(newText);

    }
    const change=(event)=>{
        // console.log("on change");
        setText(event.target.value);

    }
    const [Text, setText]=useState("");
  return (
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea name="" id=""  rows="8" cols="150" value={Text} onChange={change} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={upper} >Convert to Uppercase</button>
      <button className="btn btn-primary  mx-1" onClick={lower} >Convert to Lowercase</button>
      <button className="btn btn-primary  mx-1" onClick={clear} >Clear Text</button>
      {/* adding text summery here */}
      <h1>Your Text Summery</h1>
      <p>{Text.split(" ").length} words and {Text.length}Characters</p>
      <p>{0.008 * Text.split("").length} Minutes  to read all the words </p>
      <h2>Preview</h2>
      <p>{Text.length>1?Text:"Enter any text to preview it"}</p>
    



    </div>
  )
}
