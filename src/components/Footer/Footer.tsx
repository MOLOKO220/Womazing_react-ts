import { NavLink } from "react-router-dom";

import "./Footer.scss";
import imgLogo from "./img/Logo.svg";
import imgFeca from "./img/fecabook.png";
import imgInst from "./img/inst.png";
import imgTwiter from "./img/twiter.png";
import imgVisa from "./img/visa.png";

export const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="container Footer__wrapp">
        <div>
          <img src={imgLogo}></img>
          <div>
            <p>© Все права защищены</p>
            <p>Политика конфиденциальности</p>
            <p>Публичная оферта</p>
          </div>
        </div>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            Главная
          </NavLink>
          <div>
            <NavLink
              to="shop"
              className={({ isActive }) => (isActive ? "navActive" : undefined)}
            >
              Магазин
            </NavLink>
            <ul>
              <NavLink to="coat">Пальто</NavLink>
              <NavLink to="sweatshirts">Свитшоты</NavLink>
              <NavLink to="Cardigans">Кардиганы</NavLink>
              <NavLink to="Hoodies">Толстовки</NavLink>
            </ul>
          </div>
          <NavLink
            to="about_us"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            О бренде
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            Контакты
          </NavLink>
        </nav>
        <div>
          <p>+7 (495) 823-54-12</p>
          <p>hello@womazing.com</p>
          <div>
            <img src={imgInst} alt="Inst" />
            <img src={imgFeca} alt="Feca" />
            <img src={imgTwiter} alt="Twiter" />
          </div>
          <img src={imgVisa} alt="Visa" />
        </div>
      </div>
    </div>
  );
};
