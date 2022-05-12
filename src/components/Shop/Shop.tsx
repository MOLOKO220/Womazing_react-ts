import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Shop.scss";

import { Product } from "../Product/Product";

export const Shop: React.FC = () => {
  // Redux
  const database = useSelector((state: any) => state.main);
  // hooks
  const [renderData, setRenderData] = useState(database);

  // разбитая массива на страницы
  function createAllPages(data: object[]): any {
    let allPageArrow = [];
    let processedPata = 0; //  обработынные данные
    for (let i = 1; i <= Math.ceil(data.length / 9); i++) {
      let pageArrow: any[] = [];
      for (let s = 0; s < data.length; s++) {
        if (s < i * 9 && s >= processedPata) {
          pageArrow.push(data[s]);
        }
      }
      processedPata = i * 9;
      allPageArrow.push(pageArrow);
    }

    let productionQuantity = 0; // количество пройденного товара

    return (
      <>
        <div className="shop__main">
          {allPageArrow.map((e, i) => {
            productionQuantity += e.length;
            return (
              <div
                className={
                  i > 0 ? "shop__main-wrapp display__none" : "shop__main-wrapp"
                }
                data-page={`page${i}`}
                key={i}
              >
                <p>{`Показано: ${productionQuantity} из ${data.length} товаров`}</p>
                <div>
                  {e.map((e2, i2) => {
                    return (
                      <Product
                        name={e2.name}
                        img={e2.img}
                        src={e2.src}
                        price={e2.price}
                        oldPrece={e2.oldPrece}
                        key={e2.src}
                      />
                    );
                  })}
                </div>
                <p>{`Показано: ${productionQuantity} из ${data.length} товаров`}</p>
              </div>
            );
          })}
        </div>
        <div className="shop__main-pagina">
          {allPageArrow.map((e, i) => {
            return (
              <div onClick={anotherPage} data-page={`page${i}`} key={i}>
                {i + 1}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  // переключения по страницам
  function anotherPage(e: any) {
    for (
      let i = 0;
      i < e.target.parentElement.previousSibling.childNodes.length;
      i++
    ) {
      if (
        e.target.parentElement.previousSibling.childNodes[i].dataset.page ===
        e.target.dataset.page
      ) {
        e.target.parentElement.previousSibling.childNodes[i].classList.remove(
          "display__none"
        );
      } else
        e.target.parentElement.previousSibling.childNodes[i].classList.add(
          "display__none"
        );
    }
  }

  function fillter(event: any) {
    const newArray = database.filter((e: any) => {
      if (event.target.dataset.manu === e.type) {
        return e;
      } else if (event.target.dataset.manu == "all") {
        return database;
      }
    });
    setRenderData(newArray);
    // костыль, нужен чтобы избежать баг с открытием первой страницы
    event.target.parentElement.nextSibling.children[0].classList.remove(
      "display__none"
    );
  }

  return (
    <section className="Shop container">
      <h5>Магазин</h5>

      <div className="shop__menu">
        {/* onClick={productFilter} */}
        <div data-manu="all" onClick={fillter}>
          Все
        </div>
        <div data-manu="Coat" onClick={fillter}>
          Пальто
        </div>
        {/* Coat 2*/}
        <div data-manu="Sweatshirts" onClick={fillter}>
          Свитшоты
        </div>
        {/* Sweatshirts 3*/}
        <div data-manu="Cardigans" onClick={fillter}>
          Кардиганы
        </div>
        {/* Cardigans 4*/}
        <div data-manu="Hoodies" onClick={fillter}>
          Толстовки
        </div>
        {/* Hoodies 3*/}
      </div>

      {createAllPages(renderData)}
    </section>
  );
};
