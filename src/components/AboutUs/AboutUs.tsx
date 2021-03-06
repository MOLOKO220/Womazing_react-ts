import React from "react";
import { NavLink } from "react-router-dom";

import "./AboutUs.scss";

import imgFirst from "./img/first.png";
import imgSecond from "./img/second.png";

export const AboutUs: React.FC = () => {
  return (
    <div className="AboutUs container">
      <h5>О бренде</h5>

      <div className="AboutUs__wrapp">
        <img src={imgFirst} />
        <div>
          <h6>Идея и женщина</h6>
          <p>
            Womazing была основана в 2010-ом и стала одной из самых успешных
            компаний нашей страны. Как и многие итальянские фирмы, Womazing
            остаётся семейной компанией, хотя ни один из членов семьи не
            является модельером.
          </p>
          <p>
            Мы действуем по успешной формуле, прибегая к услугам известных
            модельеров для создания своих коллекций. Этот метод был описан
            критиком моды Колином Макдауэллом как форма дизайнерского
            со-творчества, характерная для ряда итальянских prêt-a-porter
            компаний.
          </p>
        </div>
      </div>

      <div className="AboutUs__wrapp">
        <div>
          <h6>Магия в деталях</h6>
          <p>
            ервый магазин Womazing был открыт в маленьком городке на севере
            страны в 2010-ом году. Первая коллекция состояла из двух пальто и
            костюма, которые были копиями парижских моделей.
          </p>
          <p>
            Несмотря на то, что по образованию основательница была адвокатом, ее
            семья всегда была тесно связана с шитьём (прабабушка основательницы
            шила одежду для женщин, а мать основала профессиональную школу кроя
            и шитья). Стремление производить одежду для масс несло в себе
            большие перспективы, особенно в то время, когда высокая мода
            по-прежнему доминировала, а рынка качественного prêt-a-porter
            попросту не существовало.
          </p>
        </div>
        <img src={imgSecond} />
      </div>
      <NavLink to="/shop">
        <button>Перейти в магазин</button>
      </NavLink>
    </div>
  );
};
