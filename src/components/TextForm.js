
import React ,{useState} from 'react';

export default function TextForm(props) {
  const handleUpClick=()=>{
              //console.log("UpperCase was clicked"+text);
               let newText =text.toUpperCase();
               setText(newText);
               props.showAlert(" converted to Uppercase","success");
  }
  const handleLowerClick=()=>{
    //console.log("UpperCase was clicked"+text);
     let newText =text.toLowerCase();
     setText(newText);
     props.showAlert(" converted to Lowercase","success");
  }
  const ClearText=()=>{
    //console.log("UpperCase was clicked"+text);
     let newText ='';
     setText(newText);
     props.showAlert(" Cleared All the Text","success");
  }
  const handleOnChange=(event)=>{
    //console.log("On change");
               setText(event.target.value);
  }
  
  //text="new text"; //wrong way to change state
  //setText("new text"); //correct way to change state 
  const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert(" Copy All the text ","success");
  }
  const handleExtraSpaces = ()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(" ExtraSpaces has been cleared","success");
  }

  const [text, setText] = useState('');

  return (
    <>
          <div className='container' style={{backgroundColor:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
              <div className='mb-3'>
                <textarea className='form-controll ' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id='myBox' rows="8" colom></textarea>
              </div>
              <button className="btn btn-primary mx-3" onClick={handleUpClick}>Contert UpperCase</button>
              <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Contert LowerCase</button>
              <button className="btn btn-primary mx-3" onClick={ClearText}>clear Text</button>
              <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
              <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Space</button>
          </div>
          <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'white':'#042743'}}></div>
          <h2 className ="mx-2">your text summary </h2>
          <p className='container mx-3'>{text.split(" ").length} word and {text.length} character </p>
          <p className='container mx-3'>{0.008 * text.split(" ").length} minutes read </p>
          <h2 className='mx-3'>Previews</h2>
          <p className='mx-3'>{text.length>0?text:"Enter something in the textboxpreviews it here"}</p>
    </>
  )
}
