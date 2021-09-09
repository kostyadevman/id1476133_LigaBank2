import React from 'react';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={AppRoute.ROOT} className="header__logo logo">
    </Link>
  );
};

export default Logo;
