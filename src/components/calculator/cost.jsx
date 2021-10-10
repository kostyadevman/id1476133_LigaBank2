import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import numeralize from "numeralize-ru";
import {decreaseValue, increaseValue, isValueInRange} from "../../utils";
import {setCost, setIsCostError} from "../../store/action";
import {Mortgage} from "../../const";

const Cost = () => {

  const selectedOption = useSelector((state) => state.selectedOption);
  const cost = useSelector((state) => state.cost);
  const isCostError = useSelector((state) => state.isCostError);
  const dispatch = useDispatch();

  const [isFocus, setIsFocus] = useState(false);

  const _handleCostChange = (evt) => {
    evt.preventDefault();
    dispatch(setCost(parseInt(evt.target.value) || 0));
  };

  const _validateCost = () => {
    !isValueInRange(Mortgage[selectedOption].MIN, Mortgage[selectedOption].MAX, cost)
      ? dispatch(setIsCostError(true))
      : dispatch(setIsCostError(false));
  }

  const _handleCostBlur = (evt) => {
    evt.preventDefault();
    setIsFocus(false);
    _validateCost();
  }

  const _handleCostFocus = (evt) => {
    evt.preventDefault();
    setIsFocus(true);
  }

  useEffect(() => {
    !isFocus && _validateCost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cost]);


  const _handlePlusClick = (evt) => {
    evt.preventDefault();
    dispatch(setCost(increaseValue(Mortgage[selectedOption].MAX, Mortgage[selectedOption].STEP, cost)));
  };

  const _handleMinusClick = (evt) => {
    evt.preventDefault();
    dispatch(setCost(decreaseValue(Mortgage[selectedOption].MIN, Mortgage[selectedOption].STEP, cost)));
  };

  const _prettify = () => {
    return isFocus
      ? parseInt(cost)
      : `${cost.toLocaleString()} ${numeralize.pluralize(cost,'рубль', 'рубля', 'рублей')}`;
  }

  const _getCostClassName = () => {
    return classNames (
  'step-second__fieldset',
      'cost',
      {'cost--error': isCostError && !isFocus}
    )


  }
  return (
      <div className={_getCostClassName()}>
        <label className="step-second__label" htmlFor="cost">{Mortgage[selectedOption].COST_TEXT}</label>
        <input
          className="step-second__input cost__input"
          autoComplete="off"
          id="cost"
          type="text"
          inputMode="numeric"
          value={_prettify()}
          min={Mortgage[selectedOption].MIN}
          max={Mortgage[selectedOption].MAX}
          onChange={_handleCostChange}
          onBlur={_handleCostBlur}
          onFocus={_handleCostFocus}
        />
        <span className="cost__hint">{`От ${Mortgage[selectedOption].MIN.toLocaleString()} до ${Mortgage[selectedOption].MAX.toLocaleString()} рублей`}</span>
        <div className="cost__plus" onClick={_handlePlusClick}/>
        <div className="cost__minus"  onClick={_handleMinusClick} />
      </div>
  );
};

export default Cost;
