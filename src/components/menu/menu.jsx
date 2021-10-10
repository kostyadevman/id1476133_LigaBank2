import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {MenuType} from '../../const';
import {MENU_SETTINGS} from '../../utils';
import classNames from "classnames";
import {useSelector} from "react-redux";


const Menu = ({menuType}) => {
  const isMenuOpen = useSelector((state) => state.isMenuOpen);

  const _getMenuClassName = (isMenuOpen) => {
    return classNames(
      'menu__list',
      `${MENU_SETTINGS[menuType].listClassName}`,
      {'menu__list--close': !isMenuOpen && menuType === MenuType.header}
    )
  }
  return (
    <nav className={MENU_SETTINGS[menuType].className}>
      <ul className={_getMenuClassName(isMenuOpen)}>
        {MENU_SETTINGS[menuType].items.map((item) => (
          <li className="menu__item" key={item.text}>
            <Link to={item.link} className={MENU_SETTINGS[menuType].linkClassName}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menuType: PropTypes.string.isRequired,
};

export default Menu;
