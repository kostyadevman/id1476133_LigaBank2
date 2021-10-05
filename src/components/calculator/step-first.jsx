import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setMenuOpen, setMenuSelectOpen, setSelectedOption} from "../../store/action";
import {selectOptions} from "../../const";

const data = {
  title: "Шаг 1. Цель кредита"
}

const StepFirst = () => {

  const dispatch = useDispatch();
  const isMenuSelectOpen = useSelector((state) => state.isMenuSelectOpen);
  const selectedOption = useSelector((state) => state.selectedOption);

  const _handleSelectClick = (evt) => {
    evt.preventDefault();
    dispatch(setMenuSelectOpen(!isMenuSelectOpen));
  };

  const _handleItemClick = (evt) => {
    evt.preventDefault();
    dispatch(setSelectedOption(evt.target.innerText));
    dispatch(setMenuSelectOpen(false));
  }

  return (
    <section className="step-first">
      <h3 className="step-first__title">{data.title}</h3>
      <button
        className="step-first__button-select"
        onClick={_handleSelectClick}
      >
        {selectedOption}
      </button>
      {
        isMenuSelectOpen &&
          <ul className="step-first__option-list">
            {selectOptions.map((item) => (
              <li
                className="step-first__button-option"
                onClick={_handleItemClick}
              >
                {item.text}
              </li>
            ))}
          </ul>
      }
    </section>
  );
};

export default StepFirst;
