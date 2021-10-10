import {createReducer} from "@reduxjs/toolkit";
import {
  setCost,
  setIsCasco,
  setIsCostError,
  setIsInsurance,
  setIsMomCapital, setIsRequestOpen,
  setMenuOpen,
  setMenuSelectOpen,
  setAuthOpen,
  setPayment,
  setPeriod,
  setRequestNumber,
  setSelectedOption, setThankYouOpen
} from "./action";
import {Mortgage, SelectOption} from "../const";



const initialState = {
  isMenuOpen: false,
  isMenuSelectOpen: false,
  isRequestOpen: false,
  isThankYouOpen: false,
  isAuthOpen: false,
  selectedOption: SelectOption.INIT,
  cost: null,
  isCostError: false,
  payment: null,
  period: 1,
  isMomCapital: false,
  isCasco: false,
  isInsurance: false,
  requestNumber: 1
}

const rootReducer = createReducer(initialState, (builder => {
  builder.addCase(setMenuOpen, (state, action) => {
    state.isMenuOpen = action.payload;
  });
  builder.addCase(setThankYouOpen, (state, action) => {
    state.isThankYouOpen = action.payload;
  });
  builder.addCase(setAuthOpen, (state, action) => {
    state.isAuthOpen = action.payload;
  });
  builder.addCase(setMenuSelectOpen, (state, action) => {
    state.isMenuSelectOpen = action.payload;
  });
  builder.addCase(setSelectedOption, (state, action) => {
    state.selectedOption = action.payload;
    state.cost = Mortgage[action.payload].MIN;
    state.period = Mortgage[action.payload].PERIOD_MIN
  });
  builder.addCase(setCost, (state, action) => {
    state.cost = action.payload;
  });
  builder.addCase(setIsCostError, (state, action) => {
    state.isCostError = action.payload;
  })
  builder.addCase(setPayment, (state, action) => {
    state.payment = action.payload;
  });
  builder.addCase(setPeriod, (state, action) => {
    state.period = action.payload;
  });
  builder.addCase(setIsMomCapital, (state, action) => {
    state.isMomCapital = action.payload;
  });
  builder.addCase(setIsCasco, (state, action) => {
    state.isCasco = action.payload;
  });
  builder.addCase(setIsInsurance, (state, action) => {
    state.isInsurance = action.payload
  });
  builder.addCase(setRequestNumber, (state, action) => {
    state.requestNumber = action.payload
  });
  builder.addCase(setIsRequestOpen, (state, action) => {
    state.isRequestOpen = action.payload
  });
  builder.addDefaultCase((state, action) => {});
}));

export default rootReducer;
