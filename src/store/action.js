export const ActionType = {
  OPEN_MENU: `app/openMenu`,
  ADD_OPERATION: `data/addOperation`,
  DELETE_OPERATIONS: `data/deleteOperations`,
  SET_CURRENCY: `data/setCurrency`,
  SET_DATE: `data/setDate`,
  SET_FROM_VALUE: `data/setFromValue`,
  SET_FROM_CURRENCY_CODE: `data/setFromCurrencyCode`,
  SET_TO_VALUE: `data/setToValue`,
  SET_TO_CURRENCY_CODE: `data/setToCurrencyCode`
};

export const ActionCreator = {
  openMenu: (status) => ({
    type: ActionType.OPEN_MENU,
    payload: status
  }),
  addOperation: () => ({
    type: ActionType.ADD_OPERATION,
  }),
  deleteOperations: () => ({
    type: ActionType.DELETE_OPERATIONS,
  }),
  setCurrency: (currency) => ({
    type: ActionType.SET_CURRENCY,
    payload: currency
  }),
  setDate: (date) => ({
    type: ActionType.SET_DATE,
    payload: date
  }),
  setFromValue: (value) => ({
    type: ActionType.SET_FROM_VALUE,
    payload: value,
  }),
  setFromCurrencyCode: (code) => ({
    type: ActionType.SET_FROM_CURRENCY_CODE,
    payload: code
  }),
  setToValue: (value) => ({
    type: ActionType.SET_TO_VALUE,
    payload: value
  }),
  setToCurrencyCode: (code) => ({
    type: ActionType.SET_TO_CURRENCY_CODE,
    payload: code
  }),
};
