import React from "react";
import StepFirst from "./step-first";

const Calculator = () => {
  return (
    <section id="calculator" className="calculator container">
      <h2 className="calculator__title">Кредитный калькулятор</h2>
      <StepFirst />
    </section>
  );
};

export default Calculator;
