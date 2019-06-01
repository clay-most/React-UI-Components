import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="wrapper">
      <CalculatorDisplay text="0" />
      <div className="btns">
        <div className="number">
          <ActionButton buttonStyle="long" text="clear" />
          <NumberButton buttonStyle="default" text="7" />
          <NumberButton buttonStyle="default" text="8" />
          <NumberButton buttonStyle="default" text="9" />
          <NumberButton buttonStyle="default" text="4" />
          <NumberButton buttonStyle="default" text="5" />
          <NumberButton buttonStyle="default" text="6" />
          <NumberButton buttonStyle="default" text="1" />
          <NumberButton buttonStyle="default" text="2" />
          <NumberButton buttonStyle="default" text="3" />
          <ActionButton buttonStyle="long" text="0" />

          <div className="operator">
            <NumberButton buttonStyle="red" text="÷" />
            <NumberButton buttonStyle="red" text="×" />
            <NumberButton buttonStyle="red" text="-" />
            <NumberButton buttonStyle="red" text="+" />
            <NumberButton buttonStyle="red" text="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
