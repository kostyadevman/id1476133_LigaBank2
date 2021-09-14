import React from "react";
import Media from "react-media";
import {mediaQueries} from "../../media";
import {Tabs, TabList, TabPanel, Tab} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Service from "./service";
import classNames from "classnames";
import {Swiper, SwiperSlide} from "swiper/react";
import {getId} from "../../utils";
import {SLIDER_DELAY} from "../../const";


export const data = [
  {
    id: 0,
    name: 'deposit',
    tabName: 'Вклады',
    title: 'Вклады Лига Банка – это выгодная инвестиция в свое будущее',
    advantages: [{id: getId(), text: 'Проценты по вкладам до 7%'}, {id: getId(), text: 'Разнообразные условия'}, {id: getId(), text: 'Возможность ежемесячной капитализации или вывод процентов на банковскую карту'}],
    isButton: true,
  },
  {
    id: 1,
    name: 'credits',
    tabName: 'Кредиты',
    title: 'Лига Банк выдает кредиты под\u00A0любые цели',
    advantages: [{id: getId(), text: 'Ипотечный кредит'}, {id: getId(), text: 'Автокредит'}, {id: getId(), text: 'Потребительский кредит'}],
    isButton: false,
    text: 'Рассчитайте ежемесячный платеж и\u00A0ставку по кредиту воспользовавшись нашим ',
    linkText: 'кредитным калькулятором',
    link: 'calculator',
  },
  {
    id: 2,
    name: 'insurance',
    tabName: 'Страхование',
    title: 'Лига Страхование — застрахуем все\u00A0что захотите',
    advantages: [{id: getId(), text: 'Автомобильное страхование'}, {id: getId(), text: 'Страхование жизни и здоровья'}, {id: getId(), text: 'Страхование недвижимости'}],
    isButton: true,
  },
  {
    id: 3,
    name: 'online',
    tabName: 'Онлайн-сервисы',
    title: 'Лига Банк — это огромное количество онлайн-сервисов для\u00A0вашего удобства',
    advantages: [{id: getId(), text: 'Мобильный банк, который всегда под рукой'}, {id: getId(), text: 'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру'}],
    isButton: true,
  },
];

  const _getServiceClassName = (name) => {
    return classNames(
      'tabs__name',
      `tabs__name--${name}`,
    )
  }

const Services = () => {
  return (
    <section className="services container container--services">
      <h2 className="services__title visually-hidden">Предложения банка</h2>
        <Media queries={mediaQueries}>
          {matches =>
            matches.DESKTOP

              ? <Tabs className="tabs"> {/* DESKTOP */}
                  <TabList className="tabs__tab-list">
                    {data.map((service) => (
                      <Tab
                        className="tabs__tab"
                        selectedClassName="tabs__tab--selected"
                        key={service.id}
                      >
                        <span className={_getServiceClassName(service.name)}>{service.tabName}</span>
                      </Tab>
                    ))}
                  </TabList>
                  {data.map((service) => (
                    <TabPanel
                      className="tabs__tab-panel"
                      selectedClassName="tabs__tab-panel--selected"
                      key={service.id}
                    >
                      <Service service={service}/>
                    </TabPanel>
                  ))}
                </Tabs>
              : <Swiper
                  centeredSlides
                  autoplay={{ delay: SLIDER_DELAY, disableOnInteraction: false }}
                  pagination={{clickable: true}}
                  preloadImages={false}
                  loop={true}
                >  {/* MOBILE || TABLET  */}
                  {data.map((service) => (
                    <SwiperSlide key={service.id}>
                      <Service service={service}/>
                    </SwiperSlide>
                  ))}
                </Swiper>
          }
        </Media>
    </section>
  );
};

export default Services;
