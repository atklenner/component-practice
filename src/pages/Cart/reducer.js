export default function reducer(state, action) {
  switch (action.type) {
    case "REMOVE":
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (acc, item) => {
          acc.amount += item.amount;
          acc.total += item.price * item.amount;
          return acc;
        },
        { total: 0, amount: 0 }
      );
      return { ...state, total, amount };
    case "INCREASE_AMOUNT":
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    case "DECREASE_AMOUNT":
      let tempCart2 = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: tempCart2 };
    default:
      return state;
  }
}
