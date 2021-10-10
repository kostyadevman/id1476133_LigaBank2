import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {isEscEvent} from "../../utils";


const Modal = ({isOpen, onClose, ...props}) => {

  const _handleEscPress = (evt) => {
    isEscEvent(evt, () => {
      onClose();
    })
  }

  useEffect(() => {

    if (!isOpen) {
      return
    }

    document.addEventListener(`keydown`, _handleEscPress)
    document.body.style.overflow = `hidden`;

    return () => {
      document.removeEventListener(`keydown`, _handleEscPress)
      document.body.style.overflow = `unset`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const _handleCloseClick = (evt) => {
    evt.preventDefault();
    onClose();
  };

  return (
    isOpen &&
    <section className="modal" onClick={_handleCloseClick}>
      <div className="modal__wrapper" onClick={(evt) => evt.stopPropagation()}>
        {props.children}
      </div>
    </section>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,

};

export default Modal;


