import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StrictMode } from 'react';

import "./styles.css";

function App() {

  const [inputAge, setInputAge] = React.useState("");
  const [inputNumberDays, setInputNumberDays] = React.useState("");
  const [result, setResult] = React.useState("");

  const MAX_AGE = 100;

  const handleSubmit = () => {
    setResult('You will need ' + (inputNumberDays * 365) * (MAX_AGE - inputAge) + ' cups of tea to last you until the ripe old age of ' + MAX_AGE);
  }

  return (
    <div className="App">

      <p className="title">The Lifetime Supply Calculator by (Pushpak - 591)</p>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Ages :
          </p>
        </p>
        <input
          className="buttonStyle"
          onChange={(e) => setInputAge(e.target.value)}
          value={inputAge}
          type="text">
        </input>
      </div>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Amount per day :
          </p>
        </p>
        <input
          className="buttonStyle"
          onChange={(e) => setInputNumberDays(e.target.value)}
          value={inputNumberDays}
          type="text">
        </input>
      </div>

      <div>
        <button className="buttonStyle"
          onClick={() => handleSubmit()}
          type="button">Submit</button>
      </div>


      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Your Puppy Age calculation is :
          </p>
        </p>
        <p className="buttonStyle">
          {result}
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, rootElement);
