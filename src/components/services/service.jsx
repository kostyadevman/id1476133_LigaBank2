import React from "react";
import PropTypes from "prop-types";
import Slide from "../slide/slide";
import {AppRoute, MediaPoint} from "../../const";
import { HashLink } from 'react-router-hash-link';


const Service = ({service}) => {
  return (
    <div className="service">
      <div className="service__wrapper">
        <h3 className="service__title">{service.title}</h3>
        <ul className="service__list">
          {service.advantages.map((item) => (
            <li key={item.id} className="service__item">{item.text}</li>
          ))}
        </ul>
        {service.isButton &&
          <HashLink
            className="button button--primary service__button"
            to={AppRoute.PAGE_NOT_FOUND}
          >
            Узнать подробнее
          </HashLink>
        }
        {service.text && <p className="service__text">
          {service.text}
          {service.link &&
            <HashLink
              className="service__link"
              to={`/#${service.link}`}
            >
              <b>{service.linkText}</b>
            </HashLink>}
        </p>}

      </div>
      <picture>
        <source
          type='image/webp'
          srcSet={`${process.env.PUBLIC_URL}/images/services/tab${service.id}.webp 1x, ${process.env.PUBLIC_URL}/images/services/tab${service.id}@2x.webp 2x`}
          media={`(min-width: ${MediaPoint.DESKTOP_MIN}px)`}
        />
        <source
          type='image/webp'
          srcSet={`${process.env.PUBLIC_URL}/images/services/tab${service.id}_tablet.webp 1x, ${process.env.PUBLIC_URL}/images/services/tab${service.id}_tablet@2x.webp 2x`}
          media={`(min-width: ${MediaPoint.TABLET_MIN}px)`}
        />
        <source
          type='image/webp'
          srcSet={`${process.env.PUBLIC_URL}/images/services/tab${service.id}_phone.webp 1x, ${process.env.PUBLIC_URL}/images/services/tab${service.id}_phone@2x.webp 2x`}
        />
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/services/tab${service.id}.jpg 1x, ${process.env.PUBLIC_URL}/images/services/tab${service.id}@2x.jpg 2x`}
          media={`(min-width: ${MediaPoint.DESKTOP_MIN}px)`}
        />
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/services/tab${service.id}_tablet.jpg 1x, ${process.env.PUBLIC_URL}/images/services/tab${service.id}_teblet@2x.jpg 2x`}
          media={`(min-width: ${MediaPoint.TABLET_MIN}px)`}
        />
        <img
          className="service__img"
          width="289"
          height="260"
          src={`${process.env.PUBLIC_URL}/images/services/tab${service.id}_phone.jpg`}
          srcSet={`${process.env.PUBLIC_URL}/images/services/tab${service.id}_phone@2x.jpg 2x`}
          alt={`slide ${service.id}`}
        />
    </picture>
    </div>
  );
};

Slide.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tabName: PropTypes.string.isRequired,
    advantage: PropTypes.array.isRequired,
    text: PropTypes.string
  })
};

export default Service;
