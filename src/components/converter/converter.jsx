import React from 'react';
import Form from '../form/form';
import History from '../history/history';

const Converter = () => {
  return (
    <section className="converter container">
      <h1 className="converter__title">Конвертер валют</h1>
      <Form />
      <History />
    </section>
  );
};

export default Converter;
