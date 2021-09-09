import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import {MediaPoint} from "../../const";

  const _getSlideClassName = (name, isDark) => {
    return classNames(
      'slide',
      `slide--${name}`,
      {'slide--dark': isDark},
    )
  };

  const _getButtonClassName = (isDark) => {
    return classNames(
      'button',
      'slide__button',
      isDark ? 'button--secondary' : 'button--primary'
    )
  }

  const _getContentClassName = (name) => {
    return classNames(
      'slide__content',
      `slide__content--${name}`,
    )
  }

const Slide = ({data}) => {
  return (
    <div className={_getSlideClassName(data.name, data.isDark)}>
      <div className={_getContentClassName(data.name)}>
        <div className="slide__wrapper">
          <p className="slide__title">{data.title}</p>
          <p className="slide__subtitle">{data.subTitle}</p>
          {data.buttonText && (
            <button className={_getButtonClassName(data.isDark)}>{data.buttonText}</button>
          )}
        </div>
        <picture>
          <source
            type='image/webp'
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${data.id}.webp 1x, ${process.env.PUBLIC_URL}/images/slides/slide${data.id}@2x.webp 2x`}
            media={`(min-width: ${MediaPoint.DESKTOP_MIN}px)`}
          />
          <source
            type='image/webp'
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${data.id}_tablet.webp 1x, ${process.env.PUBLIC_URL}/images/slides/slide${data.id}_tablet@2x.webp 2x`}
            media={`(min-width: ${MediaPoint.TABLET_MIN}px)`}
          />
          <source
            type='image/webp'
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${data.id}_phone.webp 1x, ${process.env.PUBLIC_URL}/images/slides/slide${data.id}_phone@2x.webp 2x`}
          />
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${data.id}.jpg 1x, ${process.env.PUBLIC_URL}/images/slides/slide${data.id}@2x.jpg 2x`}
            media={`(min-width: ${MediaPoint.DESKTOP_MIN}px)`}
          />
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${data.id}_tablet.jpg 1x, ${process.env.PUBLIC_URL}/images/slides/slide${data.id}_teblet@2x.jpg 2x`}
            media={`(min-width: ${MediaPoint.TABLET_MIN}px)`}
          />
          <img
            className="slide__img"
            src={`${process.env.PUBLIC_URL}/images/slides/slide${data.id}_phone.jpg`}
            srcSet={`${process.env.PUBLIC_URL}/images/slides/slide${data.id}_phone@2x.jpg 2x`}
            alt={`slide ${data.id}`}
          />
        </picture>

      </div>
    </div>
  );
};

Slide.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    isDark: PropTypes.bool.isRequired
  })
}

export default Slide;

