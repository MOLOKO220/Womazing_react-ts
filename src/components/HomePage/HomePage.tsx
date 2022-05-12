import React, { useRef } from "react";
import "./HomePage.scss";
import imgFSfirst from "./img/FSfirst.png";
import imgFSsecand from "./img/FSsecand.png";
import imgFSthird from "./img/FSthird.svg";
import imgFSArry from "./img/FSArry.svg";
import imgTS1 from "./img/TS1.svg";
import imgTS2 from "./img/TS2.svg";
import imgTS3 from "./img/TS3.svg";
import imgFuSlid1 from "./img/FoSeSlide1.png";
import imgFuSlid2 from "./img/FoSeSlide2.png";
import imgFuSlid3 from "./img/FoSeSlide3.png";
import imgFuArrow from "./img/FSArrow.svg";
import imgRangeData1 from "./img/range1.png";
import imgRangeData2 from "./img/range2.png";
import imgRangeData3 from "./img/range3.png";

import { Link, NavLink } from "react-router-dom";
import { Product } from "../Product/Product";

export const HomePage: React.FC = () => {
  // hooks
  const slideTeack = useRef<any>(null);
  const secondSlideTeack = useRef<any>(null);
  // 2ckfqlth
  const scrolPoint = useRef<any>(null);
  const dotsWrapp = useRef<any>(null);

  // данные для 2 секции
  interface range {
    name: string;
    img: string;
    src: string;
    price: number;
    oldPrece?: number;
  }
  const rangeData: range[] = [
    {
      name: "Футболка USA",
      img: imgRangeData1,
      src: "item1",
      price: 129,
      oldPrece: 229,
    },
    {
      name: "Купальник Glow",
      img: imgRangeData2,
      src: "item2",
      price: 129,
    },
    {
      name: "Свитшот Sweet Shot",
      img: imgRangeData3,
      src: "item3",
      price: 129,
    },
  ];

  // первый слайдер
  function flipSlider(e: any): void {
    // переключение точек
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
      if (e.target != e.target.parentElement.children[i]) {
        e.target.parentElement.children[i].classList.remove("dots-active");
      }
    }
    e.target.classList.add("dots-active");

    // переключение слайдов
    if (e.target.dataset.slider === "first") {
      slideTeack.current.classList.add("slider__first-item");
      slideTeack.current.classList.remove("slider__third-item");
    } else if (e.target.dataset.slider === "second") {
      slideTeack.current.classList.remove("slider__first-item");
      slideTeack.current.classList.remove("slider__third-item");
    } else if (e.target.dataset.slider === "third") {
      slideTeack.current.classList.remove("slider__first-item");
      slideTeack.current.classList.add("slider__third-item");
    }
  }

  function scroling(): void {
    // плавный скролл
    scrolPoint.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // второй слайдер
  function secondDotsFlipSlider(e: any): void {
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
      if (e.target != e.target.parentElement.children[i]) {
        e.target.parentElement.children[i].classList.remove("dots-active");
      }
    }
    e.target.classList.add("dots-active");
    // переключение слайдов
    if (e.target.dataset.slider === "first") {
      secondSlideTeack.current.classList.add("slider__first-item");
      secondSlideTeack.current.classList.remove("slider__third-item");
    } else if (e.target.dataset.slider === "second") {
      secondSlideTeack.current.classList.remove("slider__first-item");
      secondSlideTeack.current.classList.remove("slider__third-item");
    } else if (e.target.dataset.slider === "third") {
      secondSlideTeack.current.classList.remove("slider__first-item");
      secondSlideTeack.current.classList.add("slider__third-item");
    }
  }

  function flopRight(e: any): void {
    if (secondSlideTeack.current.classList.contains("slider__first-item")) {
      secondSlideTeack.current.classList.remove("slider__first-item");
      dotsWrapp.current.children[1].classList.add("dots-active");
      dotsWrapp.current.children[0].classList.remove("dots-active");
    } else {
      secondSlideTeack.current.classList.add("slider__third-item");
      dotsWrapp.current.children[2].classList.add("dots-active");
      dotsWrapp.current.children[1].classList.remove("dots-active");
    }
  }

  function flopLeft(e: any): void {
    if (secondSlideTeack.current.classList.contains("slider__third-item")) {
      secondSlideTeack.current.classList.remove("slider__third-item");
      dotsWrapp.current.children[1].classList.add("dots-active");
      dotsWrapp.current.children[2].classList.remove("dots-active");
    } else {
      secondSlideTeack.current.classList.add("slider__first-item");
      dotsWrapp.current.children[0].classList.add("dots-active");
      dotsWrapp.current.children[1].classList.remove("dots-active");
    }
  }

  return (
    <div className="container HomePage">
      <section className="HomePage__firstSection firstSection">
        <div className="firstSection__left">
          <div className="firstSection__slider-wrapp ">
            <div className="firstSection__slider-track" ref={slideTeack}>
              <div className="firstSection__slider-item slider-item">
                <h3>Новые поступления в этом сезоне</h3>
                <p>
                  Утонченные сочетания и бархатные оттенки - вот то, что вы
                  искали в этом сезоне. Время исследовать.
                </p>
                <div className="slider-item__btns">
                  <div onClick={scroling}>
                    <img src={imgFSArry} alt="Aarry" />
                  </div>
                  <NavLink to="shop">
                    <button>Открыть магазин</button>
                  </NavLink>
                </div>
              </div>

              <div className="firstSection__slider-item slider-item">
                <h3>Что-то новенькое. Мы заждались тебя.</h3>
                <p>
                  Надоело искать себя в сером городе? Настало время новых идей,
                  свежих красок и вдохновения с Womazing!
                </p>
                <div className="slider-item__btns">
                  <div onClick={scroling}>
                    <img src={imgFSArry} alt="Aarry" />
                  </div>
                  <NavLink to="shop">
                    <button>Открыть магазин</button>
                  </NavLink>{" "}
                </div>
              </div>

              <div className="firstSection__slider-item slider-item">
                <h3>Включай новый сезон с WOMAZING</h3>
                <p>
                  Мы обновили ассортимент - легендарные коллекции и новинки от
                  отечественных дизайнеров
                </p>
                <div className="slider-item__btns">
                  <div onClick={scroling}>
                    <img src={imgFSArry} alt="Aarry" />
                  </div>
                  <NavLink to="shop">
                    <button>Открыть магазин</button>
                  </NavLink>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="firstSection__slider-dots">
            <div data-slider="first" onClick={flipSlider}></div>
            <div
              className="dots-active"
              data-slider="second"
              onClick={flipSlider}
            ></div>
            <div data-slider="third" onClick={flipSlider}></div>
          </div>
        </div>
        <div className="firstSection__right">
          <img src={imgFSfirst} />
          <img src={imgFSsecand} />
          <img src={imgFSthird} />
        </div>
      </section>
      <section className="secondSection" ref={scrolPoint}>
        <h5>Новая коллекция</h5>
        <div className="secondSection__main-wrapp">
          {rangeData.map((e) => {
            return (
              <Product
                name={e.name}
                img={e.img}
                src={e.src}
                price={e.price}
                oldPrece={e.oldPrece}
                key={e.src}
              />
            );
          })}
        </div>
        <NavLink to="shop" className="secondSection__shop-btn">
          Открыть магазин
        </NavLink>
      </section>
      <section className="thirdSection">
        <h5>Что для нас важно</h5>
        <div className="thirdSection__main-wrapp">
          <div className="thirdSection__main-item">
            <img src={imgTS1} alt="" />
            <h6>Качество</h6>
            <p>
              Наши профессионалы работают на лучшем оборудовании для пошива
              одежды беспрецедентного качества
            </p>
          </div>

          <div className="thirdSection__main-item">
            <img src={imgTS2} alt="" />
            <h6>Скорость</h6>
            <p>
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </p>
          </div>

          <div className="thirdSection__main-item">
            <img src={imgTS3} alt="" />
            <h6>Ответственность</h6>
            <p>
              Мы заботимся о людях и планете. Безотходное производство и
              комфортные условия труда - все это Womazing
            </p>
          </div>
        </div>
      </section>
      <section className="foutSection">
        <h5>Команда мечты Womazing</h5>
        <div className="foutSection-wrapp">
          <div className="foutSection__slider">
            <div className="foutSection__slider-wrapp">
              <div className="foutSection__slider-track" ref={secondSlideTeack}>
                <img src={imgFuSlid1} />
                <img src={imgFuSlid2} />
                <img src={imgFuSlid3} />
              </div>
              <div className="foutSection__slider-dots" ref={dotsWrapp}>
                <div data-slider="first" onClick={secondDotsFlipSlider}></div>
                <div
                  data-slider="second"
                  className="dots-active"
                  onClick={secondDotsFlipSlider}
                ></div>
                <div data-slider="third" onClick={secondDotsFlipSlider}></div>
              </div>
            </div>
            <img
              src={imgFuArrow}
              onClick={flopRight}
              className="foutSection__slider-arrow-right"
            />
            <img
              src={imgFuArrow}
              onClick={flopLeft}
              className="foutSection__slider-arrow-left"
            />
          </div>
          <div className="foutSection-inf">
            <h5>Для каждой</h5>
            <p>
              Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
            </p>
            <p>
              Womazing ищет эти мелочи и создает прекрасные вещи, которые
              выгодно подчеркивают достоинства каждой девушки.
            </p>
            <NavLink to="about_us">Подробнее о бренде </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
