import React from "react";

export default function Image({ doImage, setInput, result }) {
  
  return (
    <div className="result-page">
        <span
            className="text-area"
            role="textbox"
            contentEditable
            onInput={(e) => setInput(e.target.innerText)}
        >

        </span>
        <button className="action-btn" onClick={doImage}>
            GENERATE IMAGE
        </button>
        {result.length > 0 ?  
        <img className="result-image" src={`${result}`}/>
        : ""}
    </div>
  );
}