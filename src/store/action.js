import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  SET_MENU_OPEN:  `app/setMenuOpen`,
  SET_MENU_SELECT_OPEN: `app/setMenuSelectOpen`,
  SET_THANK_YOU_OPEN: `app/setThankYouOpen`,
  SET_AUTH_OPEN: `app/setAuthOpen`,
  SET_SELECTED_OPTION: `data/setSelectedOption`,
  SET_IS_COST_ERROR: `app/setIsCostError`,
  SET_IS_REQUEST_OPEN: `app/setIsRequestOpen`,

  SET_COST: `data/setCost`,
  SET_PAYMENT: `data/setPayment`,
  SET_PERIOD: `data/setPeriod`,
  SET_IS_MOM_CAPITAL: `data/setIsMomCapital`,
  SET_IS_CASCO: `data/setIsCasco`,
  SET_IS_INSURANCE: `data/setIsInsurance`,
  SET_REQUEST_NUMBER: `date/setRequestNumber`
};

export const setMenuOpen = createAction(ActionType.SET_MENU_OPEN, (status) => {
  return {
    payload: status
  }
});

export const setThankYouOpen = createAction(ActionType.SET_THANK_YOU_OPEN, (status) => {
  return {
    payload: status
  }
});

export const setAuthOpen = createAction(ActionType.SET_AUTH_OPEN, (status) => {
  return {
    payload: status
  }
});

export const setMenuSelectOpen = createAction(ActionType.SET_MENU_SELECT_OPEN, (status) => {
  return {
    payload: status
  }
});

export const setSelectedOption = createAction(ActionType.SET_SELECTED_OPTION, (option) => {
  return {
    payload: option
  }
});

export const setCost = createAction(ActionType.SET_COST, (cost) => {
  return {
    payload: cost
  }
});

export const setIsCostError = createAction(ActionType.SET_IS_COST_ERROR, (status) => {
  return {
    payload: status
  }
});

export const setPayment = createAction(ActionType.SET_PAYMENT, (payment) => {
  return {
    payload: payment
  }
});

export const setPeriod = createAction(ActionType.SET_PERIOD, (period) => {
  return {
    payload: period
  }
});

export const setIsMomCapital = createAction(ActionType.SET_IS_MOM_CAPITAL, (status) => {
  return {
    payload: status
  }
});

export const setIsCasco = createAction(ActionType.SET_IS_CASCO, (status) => {
  return {
    payload: status
  }
});

export const setIsInsurance = createAction(ActionType.SET_IS_INSURANCE, (status) => {
  return {
    payload: status
  }
});

export const setRequestNumber = createAction(ActionType.SET_REQUEST_NUMBER, (number) => {
  return {
    payload: number
  }
});

export const setIsRequestOpen = createAction(ActionType.SET_IS_REQUEST_OPEN, (status) => {
  return {
    payload: status
  }
});
