import React from 'react';
import {useDispatch} from "react-redux";
import {setThankYouOpen} from "../../store/action";

const ThankYou = () => {
  const dispatch = useDispatch();

  const _handleCloseClick = () => {
    dispatch(setThankYouOpen(false));
  };

  return (
    <section className="thank-you">
      <button className="thank-you__close" onClick={_handleCloseClick}/>
      <div className="thank-you__wrapper">
        <p className="thank-you__title">Спасибо за обращение в наш банк.</p>
        <p className="thank-you__text">
          Наш менеджер скоро свяжется с вами
          по указанному номеру телефона.
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
