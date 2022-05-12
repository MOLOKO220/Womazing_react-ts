// массив с таваром
let database: any = {
  backet: [],
  id: 0,
};

const ADD_BASKET = "ADD_BASKET";
const ID_INCREMENT = "ID_INCREMENT";
const REMOVE_ITEM = "REMOVE_ITEM";

export const basketReducer = (state = database, action: any) => {
  switch (action.type) {
    case ADD_BASKET:
      state.backet.push(action.item);
      return state;

    case REMOVE_ITEM:
      state.backet = state.backet.filter((e: any) => {
        return e.id != action.item;
      });
      return state;

    case ID_INCREMENT:
      state.id = state.id + 1;
      return state;

    default:
      return state;
  }
};

export const addBasket = (item: any) => ({ type: ADD_BASKET, item });
export const idIncrement = (item: any) => ({ type: ID_INCREMENT, item });
export const removeItem = (item: any) => ({ type: REMOVE_ITEM, item });
