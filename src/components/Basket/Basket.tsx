import "./Basket.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import IMGcloseBtn from "./img/closeBtn.png";
import { removeItem } from "../../store/basketReducer";
import { useState, useEffect } from "react";

export const Basket: React.FC = () => {
  // Redux
  const bascetStore = useSelector((state: any) => state.basket);
  const dispatch = useDispatch();
  // Hooks
  const [render, setRender] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // общая цена
  useEffect(() => {
    let a = 0;
    bascetStore.backet.forEach((e: any) => {
      a = a + e.amount * e.price;
    });
    setTotalPrice(a);
  });

  // удаление продукта
  function itemRemove(e: any) {
    dispatch(removeItem(e.target.dataset.id));
    setRender(render + 1);
  }
  return (
    <div className="Basket container">
      <h5>Корзина</h5>
      <ul className="Basket__main">
        <div>
          <div>Товар</div>
          <div>Цена</div>
          <div>Количество</div>
          <div>Всего</div>
        </div>
        {bascetStore.backet.map((e: any) => {
          return (
            <li key={e.id}>
              <div className="first-section">
                <img
                  className="closeBtn"
                  src={IMGcloseBtn}
                  alt="x"
                  data-id={e.id}
                  onClick={itemRemove}
                />
                <img
                  className="img"
                  src={e.img}
                  title={`Цвет: ${e.color}  Размер: ${e.size}`}
                />
                <h6 title={`Цвет: ${e.color}  Размер: ${e.size}`}>{e.name}</h6>
              </div>
              <div className="second-section">${e.price}</div>
              <div className="third-section">
                <div>{e.amount}</div>
              </div>
              <div className="four-section">
                <div>${e.amount * e.price}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="Basket__footer">
        <div>Итого: {totalPrice}</div>
        <NavLink to="/chekout">Оформить заказ</NavLink>
      </div>
    </div>
  );
};
