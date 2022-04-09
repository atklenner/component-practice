import Cart from "./Cart";
import { CartContextProvider } from "./context";

export default function CartApp() {
  return (
    <CartContextProvider>
      <Cart />
    </CartContextProvider>
  );
}
