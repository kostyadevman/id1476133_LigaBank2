export const API_KEY=`e7ab5b4cf26346d8f5ea`

export const AppRoute = {
  ROOT: `/`,
  SERVICES: `/services`,
  CREDIT: `/credit`,
  CURRENCY_EXCHANGE: `/currency-exchange`,
  CONTACTS: `/contacts`,
  QUESTIONS: `/questions`,
  SIGN_IN: `/sign-in`,
  PAGE_NOT_FOUND: `/page-not-found`
};


export const LogoType = {
  header: `header`,
  footer: `footer`
};

export const MenuType = {
  header: `header`,
  footer: `footer`
};

export const SLIDER_DELAY = 4000;

export const Slides = [
  {
    id: 1,
    name: 'calculator',
    title: 'Лига Банк',
    subTitle: 'Кредиты на любой случай',
    buttonText: 'Рассчитать кредит',
    isDark: true,
    link: 'calculator'
  },
  {
    id: 2,
    name: 'promo',
    title: 'Лига Банк',
    subTitle: 'Ваша уверенность в\u00A0завтрашнем дне',
    isDark: false
  },
  {
    id: 3,
    name: 'department',
    title: 'Лига Банк',
    subTitle: 'Всегда рядом',
    buttonText: 'Найти отделение',
    isDark: false,
    link: 'map'
  }
];

export const MediaPoint = {
  MOBILE_MIN: 320,
  MOBILE_MAX: 767,
  TABLET_MIN: 768,
  TABLET_MAX: 1023,
  DESKTOP_MIN: 1024,
};

export const Mortgage = {
  init: {
    SELECT_TEXT: 'Выберите цель кредита',
  },
  home: {
    SELECT_TEXT: 'Ипотечное кредитование',
    COST_TEXT: 'Стоимость недвижимости',
    OFFER_TEXT: 'Сумма ипотеки',
    DENY_TEXT: 'ипотечные кредиты',
    REQUEST_TEXT: 'Ипотека',
    MIN: 1200000,
    MAX: 25000000,
    STEP: 100000,
    PAYMENT_MIN_PERCENT: 10,
    PAYMENT_MAX_PERCENT: 100,
    PAYMENT_STEP_PERCENT: 5,
    PERIOD_MIN: 5,
    PERIOD_MAX: 30,
    PERIOD_STEP: 1,
    MORTGAGE_MIN: 500000,
    MOM_CAPITAL: 470000,
    RATE_LOW: 0.007083,
    RATE_LOW_PERCENT: '8,50%',
    RATE_HIGH: 0.00783,
    RATE_HIGH_PERCENT: '9,40%',
    RATE_MILESTONE: 15,
    COEFFICIENT_PAYMENT_MONTH: 0.45
  },
  avto: {
    SELECT_TEXT: 'Автомобильное кредитование',
    COST_TEXT: 'Стоимость автомобиля',
    OFFER_TEXT: 'Сумму автокредита',
    DENY_TEXT: 'автокредиты',
    REQUEST_TEXT: 'Автокредит',
    MIN: 500000,
    MAX: 5000000,
    STEP: 50000,
    PAYMENT_MIN_PERCENT: 20,
    PAYMENT_MAX_PERCENT: 100,
    PAYMENT_STEP_PERCENT: 5,
    PERIOD_MIN: 1,
    PERIOD_MAX: 5,
    PERIOD_STEP: 1,
    MORTGAGE_MIN: 200000,
    RATE_LOW: 0.0125,
    RATE_LOW_PERCENT: '15%',
    RATE_HIGH: 0.013333,
    RATE_HIGH_PERCENT: '16%',
    CASCO_OR_INSURANCE: 0.007083,
    CASCO_OR_INSURANCE_PERCENT: '8,50%',
    CASCO_AND_INSURANCE: 0.002917,
    CASCO_AND_INSURANCE_PERCENT: '3,50%',
    COST_MILESTONE: 2000000,
    COEFFICIENT_PAYMENT_MONTH: 0.45
  }
};

export const SelectOption = {
  INIT: 'init',
  AVTO: 'avto',
  HOME: 'home'
}

export const selectOptions = [
  {id: 1, type: SelectOption.HOME},
  {id: 2, type: SelectOption.AVTO}
]

export const MONTH_IN_YEAR = 12;

export const PHONE_STRING_LENGTH = 17;

