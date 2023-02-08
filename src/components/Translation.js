import React from "react";

export default function Translation({ doText, setInput, result }) {
  return (
    <div className="result-page">
      <span
        className="text-area"
        role="textbox"
        contentEditable
        onInput={(e) => setInput(e.target.innerText)}
      >

      </span>
      <button className="action-btn" onClick={doText}>
        ANSWER QUESTİON
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}