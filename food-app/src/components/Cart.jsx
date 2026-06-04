import { useSelector } from "react-redux";
import Item from "./Item";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center mt-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <Item items={cartItems} />
      </div>
    </div>
  );
}
