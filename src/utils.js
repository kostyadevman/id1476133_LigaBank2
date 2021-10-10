import {AppRoute, MONTH_IN_YEAR, Mortgage, SelectOption} from "./const";

export const getId = () => {
  return Math.random().toString(36);
};

export const isEscEvent = (evt, cb) => {
  if (evt.key === `Escape`) {
    cb();
  }
};

export const LOGO_SETTINGS = {
  header: {
    className: `header__logo logo`
  },
  footer: {
    className: `footer__logo logo`
  }
}

export const MENU_SETTINGS = {
  header: {
    className: `header__menu menu`,
    listClassName: `menu__list`,
    linkClassName: `menu__link`,
    items: [
      {link: AppRoute.SERVICES, text: `Услуги`},
      {link: AppRoute.ROOT, text: `Рассчитать кредит`},
      {link: AppRoute.CURRENCY_EXCHANGE, text: `Конвертер валют`},
      {link: AppRoute.CONTACTS, text: `Контакты`}
    ]
  },
  footer: {
    className: `footer__menu menu`,
    listClassName: `menu__list menu__list--footer`,
    linkClassName: `menu__link menu__link--footer`,
    items: [
      {link: AppRoute.SERVICES, text: `Услуги`},
      {link: AppRoute.ROOT, text: `Рассчитать кредит`},
      {link: AppRoute.CONTACTS, text: `Контакты`},
      {link: AppRoute.QUESTIONS, text: `Задать вопрос`}

    ]
  },
};

export const increaseValue = (max, step, value) => {
  return value + step > max ? value : value + step;
};

export const decreaseValue = (min, step, value) => {
  return value - step < min ? value : value - step;
};

export const isValueInRange = (min, max, value) => {
  return value >= min && value <= max;
};

export const setValueInRange = (min, max, value) => {
  return value < min ? min : (value > max) ? max : value;
};

export const getPercent = (cost, payment) => {
  return (payment * 100) / cost;
};

export const getRateHome = (percent) => {
  return percent < Mortgage[SelectOption.HOME].RATE_MILESTONE
    ?  {value: Mortgage[SelectOption.HOME].RATE_HIGH, text: Mortgage[SelectOption.HOME].RATE_HIGH_PERCENT}
    : {value: Mortgage[SelectOption.HOME].RATE_LOW, text: Mortgage[SelectOption.HOME].RATE_LOW_PERCENT};
};

export const getRateAvto = (cost, isCasco, isInsurance) => {
  let rate = null;

  if (isCasco && isInsurance) {
    rate = {
      value: Mortgage[SelectOption.AVTO].CASCO_AND_INSURANCE,
      text: Mortgage[SelectOption.AVTO].CASCO_AND_INSURANCE_PERCENT
    }
  } else if (isCasco || isInsurance ) {
    rate = {
      value: Mortgage[SelectOption.AVTO].CASCO_OR_INSURANCE,
      text: Mortgage[SelectOption.AVTO].CASCO_OR_INSURANCE_PERCENT
    }
  } else {
     rate = (cost < Mortgage[SelectOption.AVTO].COST_MILESTONE) ?
       {
          value: Mortgage[SelectOption.AVTO].RATE_HIGH,
          text: Mortgage[SelectOption.AVTO].RATE_HIGH_PERCENT
       } :
       {
          value: Mortgage[SelectOption.AVTO].RATE_LOW,
          text: Mortgage[SelectOption.AVTO].RATE_LOW_PERCENT
       }
  }

  return rate;
};

const convertYearsToMonth = (years) => {
  return years * MONTH_IN_YEAR;
};

export const getNecessaryIncome = (paymentMonth, coefficient) => {
  return Math.round(paymentMonth / coefficient);
};

export const getSumHome = (cost, payment, isMomCapital) => {
  const momCapital = isMomCapital ? Mortgage[SelectOption.HOME].MOM_CAPITAL : 0;
  return cost - payment - momCapital;
};

export const getPaymentMonth = (sum, rate, periodInMonth) => {
  return Math.round(sum * (rate + (rate /(Math.pow(1 + rate, periodInMonth) - 1))));
};

export const getOffer = (cost, payment, period, isMomCapital, isCasco, isInsurance, selectedOption) => {
  period = convertYearsToMonth(period);
  const percent = getPercent(cost, payment);
  const rate = selectedOption === SelectOption.HOME ? getRateHome(percent) : getRateAvto(cost, isCasco, isInsurance);
  const sum = selectedOption === SelectOption.HOME ? getSumHome(cost, payment, isMomCapital) : cost - payment;
  const paymentMonth = getPaymentMonth(sum, rate.value, period);
  const income = getNecessaryIncome(paymentMonth, Mortgage[selectedOption].COEFFICIENT_PAYMENT_MONTH)
  return {
    sum: sum,
    rate: rate,
    paymentMonth: paymentMonth,
    income: income
  }
};

export const padToFour = (number) => {
  if (number<=9999) { number = ("000"+number).slice(-4); }
  return number;
}

