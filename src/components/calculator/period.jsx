import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import numeralize from "numeralize-ru";
import Slider from "rc-slider";
import {Mortgage} from "../../const";
import {setPeriod} from "../../store/action";
import {setValueInRange} from "../../utils";



const Period = () => {

  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);
  const period = useSelector((state) => state.period);
  const [isFocus, setIsFocus] = useState(false);

  const _handleSliderChange = (value) => {
    dispatch(setPeriod(value));
  };

  const _handlePeriodChange = (evt) => {
    evt.preventDefault();
    dispatch(setPeriod(parseInt(evt.target.value) || 0));
  };

  const _handlePeriodFocus = (evt) => {
    evt.preventDefault();
    setIsFocus(true);
  };

  const _handlePeriodBlur = (evt) => {
    evt.preventDefault();
    setIsFocus(false);
    dispatch(setPeriod(setValueInRange(Mortgage[selectedOption].PERIOD_MIN, Mortgage[selectedOption].PERIOD_MAX, period)));
  };
  const _prettify = () => {
    return isFocus
      ? period
      : `${period.toLocaleString()} ${numeralize.pluralize(period,'год', 'года', 'лет')}`;
  }

  return (
    <div className="step-second__fieldset period">
      <label
        className="step-second__label"
        htmlFor="period"
      >
        Срок кредитования
      </label>
      <input
        className="step-second__input"
        id="period"
        type="text"
        autoComplete="off"
        value={_prettify()}
        onChange={_handlePeriodChange}
        onFocus={_handlePeriodFocus}
        onBlur={_handlePeriodBlur}
      />
        <label
          className="step-second__label visually-hidden"
          htmlFor="period-slider"
        >
          Выберите срок кредитования
        </label>
        <Slider
          id="period-slider"
          min={Mortgage[selectedOption].PERIOD_MIN}
          max={Mortgage[selectedOption].PERIOD_MAX}
          step={Mortgage[selectedOption].PERIOD_STEP}
          value={period}
          onChange={_handleSliderChange}
        />
        <span className="period__min">{`${Mortgage[selectedOption].PERIOD_MIN} лет`}</span>
        <span className="period__max">{`${Mortgage[selectedOption].PERIOD_MAX} лет`}</span>
    </div>
  );
};

export default Period;
