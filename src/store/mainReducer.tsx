import imgRangeData1 from "./img/range1.png";
import imgRangeData2 from "./img/range2.png";
import imgRangeData3 from "./img/range3.png";

// массив с таваром
interface range {
  name: string;
  img: string;
  type: string;
  src: string;
  price: number;
  oldPrece?: number;
}
let database: range[] = [
  {
    name: "Пальто Gruf GRUF",
    img: imgRangeData1,
    type: "Coat",
    src: "item1",
    price: 234,
    oldPrece: 300,
  },
  {
    name: "Трикотажний бомбер Staff black",
    img: imgRangeData2,
    type: "Cardigans",
    src: "item2",
    price: 90,
    oldPrece: 269,
  },
  {
    name: "Свитшот Sweet Shot",
    img: imgRangeData3,
    type: "Hoodies",
    src: "item3",
    price: 179,
  },
  {
    name: "Футболка USA",
    img: imgRangeData1,
    type: "Hoodies",
    src: "item4",
    price: 129,
    oldPrece: 229,
  },
  {
    name: "Купальник Glow",
    img: imgRangeData2,
    type: "Hoodies",
    src: "item5",
    price: 129,
  },
  {
    name: "Свитшот Sweet Shot",
    img: imgRangeData3,
    type: "Sweatshirts",
    src: "item6",
    price: 89,
  },
  {
    name: "Мужское Пальто Серого Цвета ",
    img: imgRangeData1,
    type: "Coat",
    src: "item7",
    price: 129,
    oldPrece: 229,
  },
  {
    name: "Купальник Glow",
    img: imgRangeData2,
    type: "Cardigans",
    src: "item8",
    price: 129,
  },
  {
    name: "Мужская черная кофта PIMA",
    img: imgRangeData3,
    type: "Cardigans",
    src: "item9",
    price: 129,
  },
  {
    name: "Billionaire",
    img: imgRangeData1,
    type: "Cardigans",
    src: "item10",
    price: 129,
  },
  {
    name: "Свитшот ELFBERG",
    img: imgRangeData2,
    type: "Sweatshirts",
    src: "item11",
    price: 129,
  },
  {
    name: "Свитшот Trendyol",
    img: imgRangeData3,
    type: "Sweatshirts",
    src: "item12",
    price: 129,
  },
  {
    name: "Пальто Gruf GRUF",
    img: imgRangeData1,
    type: "Coat",
    src: "item13",
    price: 129,
    oldPrece: 229,
  },
  {
    name: "Трикотажний бомбер Staff black",
    img: imgRangeData2,
    type: "Cardigans",
    src: "item14",
    price: 129,
    oldPrece: 269,
  },
  {
    name: "Свитшот Sweet Shot",
    img: imgRangeData3,
    type: "Hoodies",
    src: "item15",
    price: 129,
  },
  {
    name: "Футболка USA",
    img: imgRangeData1,
    type: "Hoodies",
    src: "item16",
    price: 60,
    oldPrece: 229,
  },
  {
    name: "Купальник Glow",
    img: imgRangeData2,
    type: "Hoodies",
    src: "item17",
    price: 209,
  },
  {
    name: "Свитшот Sweet Shot",
    img: imgRangeData3,
    type: "Sweatshirts",
    src: "item18",
    price: 129,
  },
  {
    name: "Мужское Пальто Серого Цвета ",
    img: imgRangeData1,
    type: "Coat",
    src: "item19",
    price: 129,
    oldPrece: 229,
  },
  {
    name: "Купальник Glow",
    img: imgRangeData2,
    type: "Cardigans",
    src: "item20",
    price: 129,
  },
  {
    name: "Мужская черная кофта PIMA",
    img: imgRangeData3,
    type: "Cardigans",
    src: "item21",
    price: 129,
  },
  {
    name: "Billionaire",
    img: imgRangeData1,
    type: "Cardigans",
    src: "item22",
    price: 129,
  },
  {
    name: "Billionaire",
    img: imgRangeData1,
    type: "Cardigans",
    src: "item23",
    price: 129,
  },
  {
    name: "Billionaire",
    img: imgRangeData1,
    type: "Cardigans",
    src: "item24",
    price: 129,
  },
  {
    name: "Billionaire",
    img: imgRangeData1,
    type: "Cardigans",
    src: "item25",
    price: 119,
  },
  {
    name: "Billionaire",
    img: imgRangeData1,
    type: "Cardigans",
    src: "item26",
    price: 129,
  },
  {
    name: "Billionaire",
    img: imgRangeData1,
    type: "Cardigans",
    src: "item27",
    price: 100,
  },
  {
    name: "Billionaire",
    img: imgRangeData1,
    type: "Cardigans",
    src: "item28",
    price: 49,
  },
  {
    name: "Billionaire",
    img: imgRangeData1,
    type: "Cardigans",
    src: "item29",
    price: 49,
  },
];

export const mainReducer = (state = database, action: any) => {
  switch (action.type) {
    // манипуляции с данными
    default:
      return state;
  }
};
