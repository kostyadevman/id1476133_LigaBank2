import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {LOGO_SETTINGS} from "../../utils";


const Logo = ({logoType}) => {
  return (
    <Link to={AppRoute.ROOT} className={LOGO_SETTINGS[logoType].className}>
    </Link>
  );
};

Logo.propTypes = {
  logoType: PropTypes.string.isRequired,
};
export default Logo;
