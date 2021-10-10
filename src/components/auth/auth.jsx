import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from "../../const";
import {useDispatch} from "react-redux";
import {setAuthOpen} from "../../store/action";

const Auth = () => {

  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [login, setLogin] = useState(
    localStorage.getItem(`login`)
    ? localStorage.getItem(`login`)
    : ``
  );
  const [password, setPassword] = useState(
    localStorage.getItem(`password`)
    ? localStorage.getItem(`password`)
    : ``
  );

  const _handleVisionClick = (evt) => {
    evt.preventDefault();
    setIsVisible(!isVisible);
  };

  const _handleLoginChange = (evt) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    localStorage.setItem(name, value);
    setLogin(value);
  };

  const _handlePasswordChange = (evt) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    localStorage.setItem(name, value);
    setPassword(value);
  };

  const _handleSubmit = (evt) => {
      evt.preventDefault();
      dispatch(setAuthOpen(false));
  };

  const _handleLogoClick = () => {
    dispatch(setAuthOpen(false));
  };

  const _handleCloseClick = () => {
    dispatch(setAuthOpen(false));
  };

  return (
  <section className="auth">
    <div className="auth__wrapper">
      <button className="auth__close" onClick={_handleCloseClick}/>
      <Link to={AppRoute.ROOT} className="auth__logo" onClick={_handleLogoClick} />
      <h2 className="auth__title visually-hidden">Вход</h2>
      <form className="auth__form" onSubmit={_handleSubmit}>
      <label htmlFor="login" className="auth__label auth__label--login">Логин</label>
      <input
        id="login"
        name="login"
        type="text"
        autoFocus
        className="auth__input"
        value={login}
        onChange={_handleLoginChange}
      />
      <label htmlFor="password" className="auth__label auth__label--password">Пароль</label>
      <input
        id="password"
        name="password"
        type={isVisible ? "text" : "password"}
        className="auth__input"
        value={password}
        onChange={_handlePasswordChange}
      />
      <button type="button" className="auth__vision" onClick={_handleVisionClick} />
      <Link to="/" className="auth__restore">Забыли пароль?</Link>
      <button className="button button--primary auth__submit">Войти</button>
    </form>
    </div>
  </section>
  );
};

export default Auth;
