import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import "./Chekout.scss";

export const Chekout: React.FC = () => {
  // Redux
  const bascetStore = useSelector((state: any) => state.basket);
  console.log(bascetStore);
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
  return (
    <div className="Chekout container">
      <h5>Оформление заказа</h5>
      <form>
        <div className="Chekout__left-column">
          <div>
            <h6>Данные покупателя</h6>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Телефон" />
          </div>
          <div>
            <h6>Адрес получателя</h6>
            <input type="text" placeholder="Страна" />
            <input type="text" placeholder="Город" />
            <input type="text" placeholder="Улица" />
            <input type="text" placeholder="Дом" />
            <input type="text" placeholder="Квартира" />
          </div>
          <div>
            <h6>Комментарии</h6>
            <textarea placeholder="Сообщение"></textarea>
          </div>
        </div>

        <div className="Chekout__rigth-column">
          <h6>Ваш заказ</h6>
          <div className="Chekout__rigth-column__Your-order">
            <div className="Your-order__header">
              Товар
              <span> Всего</span>
            </div>
            <div className="Your-order__wrapp">
              {bascetStore.backet.map((e: any) => {
                return (
                  <div key={e.id}>
                    {e.name}
                    <span> ${e.amount * e.price}</span>
                  </div>
                );
              })}
            </div>
            <div className="Your-order__total-price">
              Итого <span>${totalPrice}</span>
            </div>
          </div>
          <div className="rigth-column__btns">
            <h6>Способы оплаты</h6>
            <div>
              <input type="radio" />
              <span>Оплата наличными</span>
            </div>
            <button>Разместить заказ</button>
          </div>
        </div>
      </form>
    </div>
  );
};
