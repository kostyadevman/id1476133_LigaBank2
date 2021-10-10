import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import numeralize from "numeralize-ru";
import Slider, {SliderTooltip} from "rc-slider";
import "rc-slider/assets/index.css";
import {Mortgage} from "../../const";
import {setPayment} from "../../store/action";
import {setValueInRange} from "../../utils";


const { Handle } = Slider;

const Payment = () => {

  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);
  const cost = useSelector((state) => state.cost);
  const payment = useSelector((state) => state.payment);
  const [isFocus, setIsFocus] = useState(false);

  const _getPaymentMin = (cost) => {
    return cost *  Mortgage[selectedOption].PAYMENT_MIN_PERCENT/Mortgage[selectedOption].PAYMENT_MAX_PERCENT;
  }

  const _getPercent = (payment, cost) => {
    return Math.round(payment * Mortgage[selectedOption].PAYMENT_MAX_PERCENT / cost);
  }

  const paymentMin = _getPaymentMin(cost);

  useEffect(() => {
    dispatch(setPayment(_getPaymentMin(cost)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cost])

  const handle = props => {
    const { value, dragging, index, ...restProps } = props;

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${_getPercent(value, cost)}%`}
        visible={true}
        defaultVisible={true}
        placement="bottom"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
  );
};

  const _handleSliderChange = (value) => {
    dispatch(setPayment(value));
  }

  const _handlePaymentChange = (evt) => {
    evt.preventDefault();
    dispatch(setPayment(parseInt(evt.target.value) || 0));
  };

  const _handlePaymentFocus = (evt) => {
    evt.preventDefault();
    setIsFocus(true);
  };

  const _handlePaymentBlur = (evt) => {
    evt.preventDefault();
    setIsFocus(false);
    dispatch(setPayment(setValueInRange(paymentMin, cost, payment)));
  };

  const _prettify = () => {
    const paymentRound = Math.round(payment);
    return isFocus
      ? paymentRound
      : `${paymentRound.toLocaleString()} ${numeralize.pluralize(paymentRound,'рубль', 'рубля', 'рублей')}`;
  }

  const marks = {
    [payment]: ''
  }

  return (
      <div className="step-second__fieldset payment">
        <label
          className="step-second__label"
          htmlFor="payment"
        >
          Первоначальный взнос
        </label>
        <input
          className="step-second__input"
          autoComplete="off"
          id="payment"
          type="text"
          value={_prettify()}
          onChange={_handlePaymentChange}
          onFocus={_handlePaymentFocus}
          onBlur={_handlePaymentBlur}
        />
        <label
          className="step-second__label visually-hidden"
          htmlFor="payment-slider"
        >
          Первоначальный взнос в процентах
        </label>
        <Slider
          id="payment-slider"
          min={cost * Mortgage[selectedOption].PAYMENT_MIN_PERCENT/Mortgage[selectedOption].PAYMENT_MAX_PERCENT}
          max={cost}
          step={cost * Mortgage[selectedOption].PAYMENT_STEP_PERCENT/Mortgage[selectedOption].PAYMENT_MAX_PERCENT}
          marks={marks}
          value={payment}
          handle={handle}
          tipProps={{visible:true}}
          onChange={_handleSliderChange}
        />
      </div>
  );
};

export default Payment;
