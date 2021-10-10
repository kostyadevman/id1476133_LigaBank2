import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOffer, getSumHome} from "../../utils";
import {Mortgage, SelectOption} from "../../const";
import numeralize from "numeralize-ru";
import {setIsRequestOpen} from "../../store/action";

const Offer = () => {

  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);
  const cost = useSelector((state) => state.cost);
  const payment = useSelector((state) => state.payment);
  const period = useSelector((state) => state.period);
  const isMomCapital = useSelector((state) => state.isMomCapital);
  const isCasco = useSelector((state) => state.isCasco);
  const isInsurance = useSelector((state) => state.isInsurance);
  const sum = selectedOption === SelectOption.HOME ? getSumHome(cost, payment, isMomCapital) : cost - payment;

  const offer = getOffer(cost, payment, period, isMomCapital, isCasco, isInsurance, selectedOption);

  const _handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(setIsRequestOpen(true));
  };

  return (
    <section className="offer">
      <div className="offer__wrapper">
        {sum < Mortgage[selectedOption].MORTGAGE_MIN
          ?
          <div className="offer__deny">
            <p className="offer__title">
              {`Наш банк не выдает
              ${Mortgage[selectedOption].DENY_TEXT}
              меньше
              ${Mortgage[selectedOption].MORTGAGE_MIN.toLocaleString()} ${numeralize.pluralize(Mortgage[selectedOption].MORTGAGE_MIN, 'рубль', 'рубля', 'рублей')}.`}
            </p>
            <p className="offer__deny-text">Попробуйте использовать другие параметры для расчёта.</p>
          </div>
          :
          <>
            <p className="offer__title">Наше предложение</p>
            <ul className="offer__list">
              <li className="offer__item">
                <p
                  className="offer__value">{`${offer.sum.toLocaleString()} ${numeralize.pluralize(offer.sum, 'рубль', 'рубля', 'рублей')}`}</p>
                <p className="offer__text">{Mortgage[selectedOption].OFFER_TEXT}</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">{offer.rate.text}</p>
                <p className="offer__text">Процентная ставка</p>
              </li>
              <li className="offer__item">
                <p
                  className="offer__value">{`${offer.paymentMonth.toLocaleString()} ${numeralize.pluralize(offer.paymentMonth, 'рубль', 'рубля', 'рублей')}`}</p>
                <p className="offer__text">Ежемесячный платеж</p>
              </li>
              <li className="offer__item">
                <p
                  className="offer__value">{`${offer.income.toLocaleString()} ${numeralize.pluralize(offer.income, 'рубль', 'рубля', 'рублей')}`}</p>
                <p className="offer__text">Необходимый доход</p>
              </li>
            </ul>
            <button
              className="button button--primary offer__button"
              onClick={_handleButtonClick}
            >
              Оформить заявку
            </button>
          </>
        }
      </div>
    </section>
  );
};

export default Offer;
