import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {MENU_SETTINGS} from '../../utils';
import classNames from "classnames";
import {useSelector} from "react-redux";


const Menu = ({menuType}) => {
  const isMenuOpen = useSelector((state) => state.menuOpen);

  const _getMenuClassName = (isMenuOpen) => {
    return classNames(
      'menu__list',
      {'menu__list--close': !isMenuOpen}
    )
  }
  return (
    <nav className={MENU_SETTINGS[menuType].className}>
      <ul className={_getMenuClassName(isMenuOpen)}>
        <li className="menu__item">
          <Link to={AppRoute.SERVICES} className={MENU_SETTINGS[menuType].linkClassName}>Услуги</Link>
        </li>
        <li className="menu__item">
          <Link to={AppRoute.CREDIT} className={MENU_SETTINGS[menuType].linkClassName}>Рассчитать кредит</Link>
        </li>
        <li className="menu__item">
          <Link to={AppRoute.ROOT} className={MENU_SETTINGS[menuType].linkClassName}>Конвертер валют</Link>
        </li>
        <li className="menu__item">
          <Link to={AppRoute.CONTACTS} className={MENU_SETTINGS[menuType].linkClassName}>Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menuType: PropTypes.string.isRequired,
};
export default Menu;
