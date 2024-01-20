import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");
  const handleupClick = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.alert("Converted to uppercase", "success");
  };

  const handleClear = () => {
    setText("");
  };

  const handleLoClick = () => {
    let temp = Text.toLowerCase();
    setText(temp);
    props.alert("Converted to lowercase", "success");
  };

  const handleExtraSpace = () => {
    let temp = Text.replace(/\s+/g, " ").trim();
    setText(temp);
    props.alert("Extra Spaces removed", "success");
  };

  const handlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alert("Copied to clipboard", "Success");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <br />
        <br></br>
        <div class="mb-3">
          <h1>{props.heading}</h1>

          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0B233F",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "2px solid black" : "2px solid white",
            }}
            rows="6"
            id="myBox"
            value={Text}
            onChange={handleonChange}
            class="form-control"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleupClick}
          class={`btn btn-${props.btntype} mx-3`}
        >
          <b>Convert to uppercase</b>
        </button>
        <button
          type="button"
          class={`btn btn-${props.btntype} mx-3`}
          onClick={handleLoClick}
        >
          <b>Convert to Lowercase</b>
        </button>
        <button
          type="button"
          class={`btn btn-${props.btntype} mx-3`}
          onClick={handlecopy}
        >
          <b>Copy Text</b>
        </button>
        <button
          type="button"
          class={`btn btn-${props.btntype} mx-3`}
          onClick={handleExtraSpace}
        >
          <b>Remove Extra Spaces</b>
        </button>
        <button
          type="button"
          class={`btn btn-${props.btntype} mx-3`}
          onClick={handleClear}
        >
          <b>Clear Text</b>
        </button>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {Text.trim() ? Text.trim().split(/\s+/).length : 0} words and{" "}
          {Text.length} characters.
        </p>
        <h2>Your Preview:</h2>
        <p>{Text === "" ? "Please enter your text" : Text}</p>
      </div>
    </>
  );
}
