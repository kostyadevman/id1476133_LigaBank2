import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";


const InputCheckbox = ({text, type,  value, onUpdate}) => {

  const dispatch = useDispatch();
  const _handleCheckChange = () => {
    dispatch(onUpdate(!value));
  };


  return (
    <>
      <input
        className="step-second__checkbox visually-hidden"
        id={type}
        type="checkbox"
        onChange={_handleCheckChange}
        checked={value}
      />
      <label
        className="step-second__label step-second__label--checkbox"
        htmlFor={type}
      >
        {text}
      </label>
    </>
  );
};

InputCheckbox.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default InputCheckbox;
