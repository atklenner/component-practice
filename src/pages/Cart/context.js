import { createContext, useReducer, useContext, useEffect } from "react";
import { items } from "./data";
import reducer from "./reducer";

const CartContext = createContext();

const initialState = {
  cart: items,
  amount: 0,
  total: 0,
};

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
