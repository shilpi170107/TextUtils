
import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    const handleUpclick = () => {
        console.log("convert to upper case");
        let newText = text.toUpperCase();
        setText(newText);
       
    }

     const handleLoclick = () => {
        console.log("convert to lower case");
        let newText = text.toLowerCase();
        setText(newText);
       
    }

    const handleClearclick = () => {
        console.log("clear the content");
        let newText = ""
        setText(newText);
       
    }


    return (

        <>  
        

        <div className="container">
            <h1 >{props.heading}</h1>

            <div  className="mb-3">
                <textarea 
                    value={text}
                    className="form-control"
                    onChange={handleonchange}
                    id="mybox"
                    rows="3">
                </textarea>
            </div>

            <button 
                className="btn btn-primary mx-2"
                onClick={handleUpclick}>
                Convert to Upper Case
            </button>
             <button
                className="btn btn-success mx-2"
                onClick={handleLoclick}>
                Convert to Lower Case
            </button>
            <button
                className="btn btn-danger mx-2"
                onClick={handleClearclick}>
               Clear the Content
            </button>


            <h2 >Your Text Summary</h2>
            <p >{text.split(" ").length} words and {text.length} characters</p>
            <p >{0.008*text.split(" ").length} Minutes Read</p>

            <h3 >Preview</h3>
            <p >{text}</p>

        </div>

        </>
    )
}
