import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsRequestOpen, setMenuSelectOpen, setSelectedOption} from "../../store/action";
import {Mortgage, selectOptions} from "../../const";

const StepFirst = () => {

  const dispatch = useDispatch();
  const isMenuSelectOpen = useSelector((state) => state.isMenuSelectOpen);
  const selectedOption = useSelector((state) => state.selectedOption);

  const _handleSelectClick = (evt) => {
    evt.preventDefault();
    dispatch(setMenuSelectOpen(!isMenuSelectOpen));
  };

  const _handleItemClick = (evt) => {
    dispatch(setSelectedOption(evt.target.dataset.option));
    dispatch(setMenuSelectOpen(false));
    dispatch(setIsRequestOpen(false));
  }

  return (
    <section className="step-first">
      <h3 className="step-first__title">Шаг 1. Цель кредита</h3>
      <div className="step-first__wrapper">
        <button
          className="step-first__button-select"
          onClick={_handleSelectClick}
        >
          {Mortgage[selectedOption].SELECT_TEXT}
          {
            isMenuSelectOpen
            ? <span className="step-first__arrow step-first__arrow--open" />
            : <span className="step-first__arrow step-first__arrow--close" />
          }
        </button>
        {
          isMenuSelectOpen &&
            <ul className="step-first__option-list">
              {selectOptions.map((item) => (
                <li
                  className="step-first__option-item"
                  key={item.id}>
                  <button
                    className="step-first__option-button"
                    onClick={_handleItemClick}
                    data-option={item.type}
                  >
                    {Mortgage[item.type].SELECT_TEXT}
                  </button>
                </li>
              ))}
            </ul>
        }
      </div>
    </section>
  );
};

export default StepFirst;
