import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import {ActionCreator} from '../../store/action';
import {convertDirection, currencyCodes, DAYS_AGO} from '../../const';
import {convert} from '../../store/api-actions';


const flatpickrOptions = {
  minDate: new Date().fp_incr(-DAYS_AGO),
  maxDate: `today`,
  dateFormant: `d-m-Y`,
  date: `today`
}

const Form = () => {
  const dispatch = useDispatch();
  const fromValue = useSelector((state) => state.fromValue);
  const fromCurrencyCode = useSelector((state) => state.fromCurrencyCode);
  const toValue = useSelector((state) => state.toValue);
  const toCurrencyCode = useSelector((state) => state.toCurrencyCode);
  const date = useSelector((state) => state.date);

  useEffect(() => {
    dispatch(convert())
  }, [dispatch, date, fromCurrencyCode, toCurrencyCode])

  const _handleDateChange = (date) => {
    dispatch(ActionCreator.setDate(date))
  }

  const _handleFromValueChange = (evt) => {
    const value = evt.target.value;
    dispatch(ActionCreator.setFromValue(value))
    dispatch(convert())
  }

  const _handleFromCodeChange = (evt) => {
    const code = evt.target.value;
    dispatch(ActionCreator.setFromCurrencyCode(code))
  }

  const _handleToValueChange = (evt) => {
    const value = evt.target.value
    dispatch(ActionCreator.setToValue(value))
    dispatch(convert(convertDirection.TO_FROM))
  }

  const _handleToCodeChange = (evt) => {
    const code = evt.target.value;
    dispatch(ActionCreator.setToCurrencyCode(code))
  }

  const _handleSaveClick = (evt) => {
    evt.preventDefault();
    dispatch(ActionCreator.addOperation())
  }

  return (
    <form className="converter__form form">
      <div className="form__wrapper">
        <label className="form__label" htmlFor="have">У меня есть</label>
        <div className="form__input-wrapper">
          <input
            autoComplete="off"
            className="form__input"
            value={fromValue}
            type="number"
            id="have"
            name="fromRate"
            onChange={_handleFromValueChange}
          />
          <label className="visually-hidden" htmlFor="have-currency">У меня есть. Валюта</label>
          <select
              className="form__select"
              name="fromCurrency"
              id="have-currency"
              value={fromCurrencyCode}
              onChange={_handleFromCodeChange}
          >
          {currencyCodes.map((code, id) =>
            <option value={code} key={id}>{code}</option>
          )}
          </select>
        </div>
      </div>
      <div className="form__wrapper">
        <label className="form__label" htmlFor="want">Хочу приобрести</label>
        <div className="form__input-wrapper">
          <input
              autoComplete="off"
              className="form__input"
              type="number"
              value={toValue}
              id="want"
              name="toRate"
              onChange={_handleToValueChange}
          />
          <label className="visually-hidden" htmlFor="want-currency">Хочу приобрести. Валюта</label>
          <select
              className="form__select"
              name="toCurrency"
              id="want-currency"
              value={toCurrencyCode}
              onChange={_handleToCodeChange}
          >
          {currencyCodes.map((code, id) =>
            <option value={code} key={id}>{code}</option>
          )}
          </select>
        </div>
      </div>
      <label className="visually-hidden" htmlFor="date"/>
      <Flatpickr
        options={flatpickrOptions}
        className="form__date"
        value="today"
        onChange={_handleDateChange}
      />
      <button
          className="form__submit"
          onClick={_handleSaveClick}
      >
        Сохранить результат
      </button>
    </form>
  );
};

export default Form;
