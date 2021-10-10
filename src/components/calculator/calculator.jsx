import React from "react";
import {useDispatch, useSelector} from "react-redux";
import StepFirst from "./step-first";
import StepSecond from "./step-second";
import Offer from "./offer";
import StepThree from "./step-three";
import Modal from "../modal/modal";
import ThankYou from "./thank-you";
import {setThankYouOpen} from "../../store/action";
import {SelectOption} from "../../const";


const Calculator = () => {

  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);
  const isCostError = useSelector((state) => state.isCostError);
  const isRequestOpen = useSelector((state) => state.isRequestOpen);
  const isThankYouOpen = useSelector((state) => state.isThankYouOpen);

  const handleModalClose = () => {
    dispatch(setThankYouOpen(false));
  };

  return (
    <section id="calculator" className="calculator container">
        <h2 className="calculator__title">Кредитный калькулятор</h2>
        <div className="calculator__wrapper">
          <StepFirst />
          <StepSecond />
        </div>
        {selectedOption !== SelectOption.INIT && !isCostError && <Offer />}
        {isRequestOpen && !isCostError && <StepThree />}
        <Modal isOpen={isThankYouOpen} onClose={handleModalClose}>
          <ThankYou />
        </Modal>
    </section>
  );
};

export default Calculator;
