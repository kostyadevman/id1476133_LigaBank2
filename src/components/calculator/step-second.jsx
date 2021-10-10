import React from "react";
import {useSelector} from "react-redux";
import Cost from "./cost";
import Payment from "./payment";
import Period from "./period";
import InputCheckbox from "./input-checkbox";
import {setIsCasco, setIsInsurance, setIsMomCapital} from "../../store/action";
import {SelectOption} from "../../const";

const StepSecond = () => {

  const selectedOption = useSelector((state) => state.selectedOption);
  const isMomCapital = useSelector((state) => state.isMomCapital);
  const isCasco = useSelector((state) => state.isCasco);
  const isInsurance = useSelector((state) => state.isInsurance);

  return (
    selectedOption !== SelectOption.INIT &&
    <section className="step-second">
      <h3 className="step-second__title">Шаг 2. Введите параметры кредита</h3>
      <form className="step-second__form">
        <Cost />
        <Payment />
        <Period />
        {selectedOption === SelectOption.HOME &&
          <div className="step-second__fieldset--optional">
            <InputCheckbox
              text="Использовать материнский капитал"
              type="mom-capital"
              value={isMomCapital}
              onUpdate={setIsMomCapital}
            />
          </div>
        }
        {selectedOption === SelectOption.AVTO && (
          <div className="step-second__fieldset step-second__fieldset--optional">
            <InputCheckbox
              text="Оформить КАСКО в нашем банке"
              type="casco"
              value={isCasco}
              onUpdate={setIsCasco}
            />
            <InputCheckbox
              text="Оформить Страхование жизни в нашем банке"
              type="insurance"
              value={isInsurance}
              onUpdate={setIsInsurance}
            />
          </div>
        )}
      </form>
    </section>
  );
};

export default StepSecond;
