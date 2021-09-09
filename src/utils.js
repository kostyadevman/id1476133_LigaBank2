import dayjs from 'dayjs';

export const formatDate = (date) => {
  return dayjs(date).format(`DD.MM.YYYY`).toString()
}

export const prettify = (out) => {
  return Math.round( ( out + Number.EPSILON ) * 10000 ) / 10000
}


export const MENU_SETTINGS = {
  header: {
    className: `header__menu menu`,
    listClassName: `menu__list`,
    linkClassName: `menu__link`
  },
  footer: {
    className: `footer__menu menu`,
    listClassName: `menu__list menu__list--footer`,
    linkClassName: `menu__link menu__link--footer`
  }
};
