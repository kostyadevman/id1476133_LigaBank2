import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import InputMask from 'react-input-mask';
import numeralize from "numeralize-ru";
import classNames from "classnames";
import {padToFour} from "../../utils";
import {setIsRequestOpen, setRequestNumber, setSelectedOption, setThankYouOpen} from "../../store/action";
import {Mortgage, PHONE_STRING_LENGTH, SelectOption} from "../../const";

const StepThree = () => {

  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);
  const requestNumber = useSelector((state) => state.requestNumber);
  const cost = useSelector((state) => state.cost);
  const payment = useSelector((state) => state.payment);
  const period = useSelector((state) => state.period);

  const [shake, setShake] = useState(false);

  const [fullNameError, setFullNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [fullName, setFullName] = useState(
    localStorage.getItem(`fullName`)
    ? localStorage.getItem(`fullName`)
    : ``
  );

  const [phone, setPhone] = useState(
    localStorage.getItem(`phone`)
    ? localStorage.getItem(`phone`)
    : ``
  );

  const [email, setEmail] = useState(
      localStorage.getItem(`email`)
    ? localStorage.getItem(`email`)
    : ``
  );


  const _handleFullNameChange = (evt) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    localStorage.setItem(name, value);
    setFullName(value);
  };

  const _handlePhoneChange = (evt) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    localStorage.setItem(name, value);
    setPhone(value);
  };

  const _handleEmailChange = (evt) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    localStorage.setItem(name, value);
    setEmail(value);
  };


  const _handleSubmit = (evt) => {
    evt.preventDefault();
    if (fullNameError || phoneError || emailError) {
      setShake(true);
      setTimeout(() => setShake(false), 500)
      return
    }

    dispatch(setRequestNumber(requestNumber + 1));
    dispatch(setIsRequestOpen(false));
    dispatch(setThankYouOpen(true));
    dispatch(setSelectedOption(SelectOption.INIT));
  }

  const _getRequestClassName = () => {
    return classNames (
      'step-three__request',
      'request',
      {'request--shake': shake}
    )
  }
  const _getInputClassName = (name, isInputError) => {
    return  classNames (
      'request__input',
      `request__input--${name}`,
      {'request__input--error': isInputError}
    );
  }

  const _validatePhone = () => {
    phone.length < PHONE_STRING_LENGTH ? setPhoneError(true) : setPhoneError(false);
  };

  const _validateFullName = () => {
    !fullName ? setFullNameError(true) : setFullNameError(false);
  };

  const _validateEmail = () => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    !re.test(email) ? setEmailError(true) : setEmailError(false)
  }


  useEffect(() => {
    _validateFullName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullName])

  useEffect(() => {
    _validateEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email])

  useEffect(() => {
    _validatePhone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone])


  return (
    <section className="step-three">
      <h3 className="step-three__title">Шаг 3. Оформление заявки</h3>
      <form noValidate className={_getRequestClassName()} onSubmit={_handleSubmit}>
        <table className="request__table">
          <tbody className="request__table-body">
            <tr className="request__item">
              <td className="request__text"> Номер заявки</td>
              <td className="request__value">{`№ ${padToFour(requestNumber)}`}</td>
            </tr>
            <tr className="request__item">
              <td className="request__text">Цель кредита</td>
              <td className="request__value">{Mortgage[selectedOption].REQUEST_TEXT}</td>
            </tr>
            <tr className="request__item">
              <td className="request__text">{Mortgage[selectedOption].COST_TEXT}</td>
              <td className="request__value">
                {`${cost.toLocaleString()} ${numeralize.pluralize(cost,'рубль', 'рубля', 'рублей')}`}
              </td>
            </tr>
            <tr className="request__item">
              <td className="request__text">Первоначальный взнос</td>
              <td className="request__value">
                {`${payment.toLocaleString()} ${numeralize.pluralize(payment,'рубль', 'рубля', 'рублей')}`}
              </td>
            </tr>
            <tr className="request__item">
              <td className="request__text">Срок кредитования</td>
              <td className="request__value">
                {`${period.toLocaleString()} ${numeralize.pluralize(period,'год', 'года', 'лет')}`}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="request__fieldset">
          <label
            className="request__label visually-hidden"
            htmlFor="full-name"
          >
            ФИО
          </label>
          <input
            className={_getInputClassName("full-name", fullNameError)}
            id="full-name" type="text"
            name="fullName"
            placeholder="ФИО"
            value={fullName}
            autoComplete="off"
            autoFocus
            required
            onChange={_handleFullNameChange}
          />
          <label
            className="request__label visually-hidden"
            htmlFor="phone"
          >
            Телефон
          </label>
          <InputMask
            className={_getInputClassName("phone", phoneError)}
            id="phone"
            name="phone"
            type="tel"
            mask="+7 (999) 999-9999"
            maskChar=""
            minLength={PHONE_STRING_LENGTH}
            placeholder="Телефон"
            value={phone}
            autoComplete="off"
            required
            onChange={_handlePhoneChange}
          />
          <label
            className="request__label visually-hidden"
            htmlFor="e-mail"
          >
            E-mail
          </label>
          <input
            className={_getInputClassName("email", emailError)}
            id="e-mail"
            name="email"
            type="email"
            placeholder="E-mail"
            value={email}
            autoComplete="off"
            required
            onChange={_handleEmailChange}
          />
        </div>
        <button
          className="button button--primary request__submit"
          disabled={shake}
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

export default StepThree;
