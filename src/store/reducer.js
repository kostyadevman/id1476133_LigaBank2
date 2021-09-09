import {ActionType} from "./action";


const initialState = {
  menuOpen: false,
  operations: [],
  currency: {
    from: ``,
    two: ``
  },
  fromValue: ``,
  fromCurrencyCode: `RUB`,
  toValue: ``,
  toCurrencyCode: `USD`,
  date: new Date()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_MENU:
      return {
        ...state,
        menuOpen: action.payload
      }
    case ActionType.ADD_OPERATION:
      return {
        ...state,
        operations: [
          ...state.operations,
          {
            fromValue: state.fromValue,
            fromCurrencyCode: state.fromCurrencyCode,
            toValue: state.toValue,
            toCurrencyCode: state.toCurrencyCode,
            date: state.date
          }]
      };
    case ActionType.DELETE_OPERATIONS:
      return {
        ...state,
        operations: []
      };
    case ActionType.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      }
    case ActionType.SET_DATE:
      return {
        ...state,
        date: action.payload
      }
    case ActionType.SET_FROM_VALUE:
      return {
        ...state,
        fromValue: action.payload
      }
    case ActionType.SET_FROM_CURRENCY_CODE:
      return {
        ...state,
        fromCurrencyCode: action.payload
      }
    case ActionType.SET_TO_VALUE:
      return {
        ...state,
        toValue: action.payload
      }
    case ActionType.SET_TO_CURRENCY_CODE:
      return {
        ...state,
        toCurrencyCode: action.payload
      }
    default:
      return state
  }
};


export {reducer};
