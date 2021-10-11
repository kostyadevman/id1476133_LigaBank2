import React from 'react';
import Slider from "../slider/slider";
import Services from "../services/services";
import Calculator from "../calculator/calculator";
import Map from "../map/map";

const Main = () => {
  return (
    <main className="main">
      <h1 className="main__title visually-hidden">Лига банк</h1>
      <Slider />
      <Services />
      <Calculator />
      <Map />
    </main>
  );
};


export default Main;
