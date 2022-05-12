import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

import imgLogo from "./img/Logo.svg";
import imgPhone from "./img/phone.svg";
import imgShop from "./img/shop.svg";
import imgBurgerBtn from "./img/BurgerBtn.svg";
import imgCloseBtn from "./img/CloseBtn.svg";

export const Header: React.FC = () => {
  // hooks
  const burgerMenu = useRef<any>(null);

  const popUpWrapp = useRef<any>(null);
  const popUpForm = useRef<any>(null);
  const popUpSuccess = useRef<any>(null);

  function showMenu(): void {
    burgerMenu.current.classList.toggle("burgerMenu_activ");
  }

  function closeBurger(): void {
    burgerMenu.current.classList.remove("burgerMenu_activ");
  }

  // popup
  function popUpContact(): void {
    popUpWrapp.current.classList.remove("display__none");
  }

  function clineForm(): void {
    popUpForm.current.childNodes[1].value = "";
    popUpForm.current.childNodes[2].value = "";
    popUpForm.current.childNodes[3].value = "";
  }

  function formSuccess(e: any): void {
    e.preventDefault();
    let contact: object = {
      name: popUpForm.current.childNodes[1].value,
      email: popUpForm.current.childNodes[2].value,
      phone: popUpForm.current.childNodes[3].value,
    };
    // sentContact(contact); якобы отправка
    // нужно сделать валидацию
    clineForm();
    popUpForm.current.classList.add("display__none");
    popUpSuccess.current.classList.remove("display__none");
  }

  function closePopUp(): void {
    popUpWrapp.current.classList.add("display__none");
    clineForm();
  }

  function closePopUpSuccess(): void {
    popUpWrapp.current.classList.add("display__none");
    popUpForm.current.classList.remove("display__none");
    popUpSuccess.current.classList.add("display__none");
    clineForm();
  }

  return (
    <div>
      <div className="Header">
        <NavLink to="/">
          <img src={imgLogo} alt="Logo"></img>
        </NavLink>
        <img src={imgBurgerBtn} className="BurgerBtn" onClick={showMenu} />
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            Главная{" "}
          </NavLink>
          <NavLink
            to="shop"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            Магазин{" "}
          </NavLink>
          <NavLink
            to="about_us"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            О бренде{" "}
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            Контакты{" "}
          </NavLink>
        </nav>
        <div className="phone">
          <img src={imgPhone} alt="phone" onClick={popUpContact}></img>
          <div>+7 (495) 823-54-12</div>
        </div>
        <NavLink to="basket">
          <img src={imgShop} alt="shop"></img>
        </NavLink>
      </div>

      <div className="burgerMenu" ref={burgerMenu}>
        <NavLink to="/">
          <img src={imgLogo} alt="Logo"></img>
        </NavLink>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            Главная{" "}
          </NavLink>
          <NavLink
            to="shop"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            Магазин{" "}
          </NavLink>
          <NavLink
            to="about_us"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            О бренде{" "}
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) => (isActive ? "navActive" : undefined)}
          >
            Контакты{" "}
          </NavLink>
        </nav>
        <div className="phone">
          <img src={imgPhone} alt="phone" onClick={popUpContact}></img>
          <div>+7 (495) 823-54-12</div>
        </div>
        <img
          src={imgCloseBtn}
          alt="closeBtn"
          className="closeBtn"
          onClick={closeBurger}
        ></img>
      </div>

      <div className="popup display__none" ref={popUpWrapp}>
        <form ref={popUpForm}>
          <h5>Заказать обратный звонок</h5>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="E-mail" />
          <input type="phone" placeholder="Телефон" />
          <button onClick={formSuccess}>Заказать звонок</button>
          <img
            src={imgCloseBtn}
            alt="closeBtn"
            className="closeBtn"
            onClick={closePopUp}
          ></img>
        </form>

        <div className="popup-success display__none" ref={popUpSuccess}>
          <h5>Заказать обратный звонок</h5>
          <button onClick={closePopUpSuccess}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};
