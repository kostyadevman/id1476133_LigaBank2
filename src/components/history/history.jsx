import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getVisibleOperations} from '../../store/selectors';
import {formatDate} from '../../utils';
import {ActionCreator} from '../../store/action';

const History = () => {
  const dispatch = useDispatch();
  const operations = useSelector(getVisibleOperations);

  const _handleClearClick = () => {
    dispatch(ActionCreator.deleteOperations())
  }

  return (
    <section className="converter__history history">
      <h3 className="history__title">История конвертация</h3>
      <ul className="history__list">
          {operations.map((operation, id) => (
            <li key={id} className="history__item">
              {console.log(operation)}
              <span className="history__data">{formatDate(operation.date)}</span>
              <span className="history__have-value">{operation.fromValue}</span>
              <span className="history__have-currency">{operation.fromCurrencyCode}</span>
              <svg width="41" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.2 17L40 9 27.2 1M40 9H0" stroke="#1F1E25"/></svg>
              <span className="history__want-value">{operation.toValue}</span>
              <span className="history__want-currency">{operation.toCurrencyCode}</span>
            </li>
          ))}
      </ul>
      <button
        className="history__clear"
        onClick={_handleClearClick}
      >
        Очистить историю
      </button>
    </section>
  );
};

export default History;
