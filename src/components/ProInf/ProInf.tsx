import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProInf.scss";
import { Product } from "../Product/Product";
import { addBasket } from "../../store/basketReducer";
import { idIncrement } from "../../store/basketReducer";

interface productProps {
  name: string;
  img: string;
  src: string;
  price: number;
  oldPrece?: number;
  type?: string;
}

export const ProInf: React.FC<productProps> = ({
  name,
  img,
  src,
  price,
  oldPrece,
  type,
}) => {
  // hooks
  const [producеSize, setproducеSize] = useState<any>(null);
  const [producеColor, setproducеColor] = useState<any>(null);
  const [producеСounter, setProducеСounter] = useState<number>(1);

  // Redux
  const database = useSelector((state: any) => state.main);
  const bascetStore = useSelector((state: any) => state.basket);
  const dispatch = useDispatch();

  // выбираем размер
  function sizeSelection(event: any): void {
    event.target.classList.add("activ");
    event.target.parentElement.childNodes.forEach((e: any) => {
      if (event.target != e) {
        e.classList.remove("activ");
      }
    });
    setproducеSize(event.target.innerHTML);
  }

  // выбираем цвет
  function ColorSelection(event: any): void {
    event.target.classList.add("activ");
    event.target.parentElement.childNodes.forEach((e: any) => {
      if (event.target != e) {
        e.classList.remove("activ");
      }
    });
    setproducеColor(event.target.dataset.color);
  }

  // выбираем количество
  function changeQuantity(event: any): void {
    if (producеСounter === 10) {
      setProducеСounter(1);
    } else {
      setProducеСounter(producеСounter + 1);
    }
  }

  function sentBasket(evant: any): void {
    evant.preventDefault();
    interface basketData extends productProps {
      size: string;
      color: string;
      amount: number;
      id: number;
    }

    const data: basketData = {
      name: name,
      img: img,
      src: src,
      price: price,
      size: producеSize,
      color: producеColor,
      amount: producеСounter,
      id: bascetStore.id,
    };
    dispatch(idIncrement(1));
    dispatch(addBasket(data));
  }

  //отфильтровать товар по типу
  const thisProductType = database.filter((e: any) => {
    return e.type == type;
  });

  return (
    <div className="ProInf container">
      <h5>{name}</h5>
      <div className="ProInf__main-wrapp">
        <img src={img} />
        <form>
          <div className="main__price">
            ${price}
            <span>${oldPrece}</span>
          </div>
          <div className="main__size">
            <h6>Выберите размер</h6>
            <div className="main__size__btns-wrapp">
              <div onClick={sizeSelection}>S</div>
              <div onClick={sizeSelection}>M</div>
              <div onClick={sizeSelection}>L</div>
              <div onClick={sizeSelection}>XL</div>
              <div onClick={sizeSelection}>XLS</div>
            </div>
          </div>
          <div className="main__color">
            <h6>Выберите цвет</h6>
            <div className="main__color__btns-wrapp">
              <div onClick={ColorSelection} data-color="brown"></div>
              <div onClick={ColorSelection} data-color="gray"></div>
              <div onClick={ColorSelection} data-color="red"></div>
              <div onClick={ColorSelection} data-color="yellow"></div>
            </div>
          </div>
          <div className="main__btns">
            <input
              onClick={changeQuantity}
              type="number"
              value={producеСounter}
              readOnly
            />
            <button
              onClick={sentBasket}
              disabled={
                producеSize !== null && producеColor !== null ? false : true
              }
            >
              Добавить в корзину
            </button>
          </div>
        </form>
      </div>
      <div className="ProInf__Related">
        <h5>Связанные товары</h5>
        <div>
          {thisProductType.map((e: any, i: any) => {
            if (i <= 3 && e.src != src) {
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
            }
          })}
        </div>
      </div>
    </div>
  );
};
