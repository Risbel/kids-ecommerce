import { useReducer, createContext } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CARD_ADD_ITEM": {
      const newItem = action.payload;
      const existNewItem = state.cart.cartItems.find((item) => item.slug === newItem.slug);

      //una condicion para actualizar si existe el item o guardar si no existe
      const cartItems = existNewItem
        ? state.cart.cartItems.map((item) => (item.slug === existNewItem.slug ? newItem : item))
        : [...state.cart.cartItems, newItem]; //de lo contrario si no existe entonces guardamos el primero

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter((item) => item.slug !== action.payload.slug);

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
