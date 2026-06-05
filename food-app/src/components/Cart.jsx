import { useSelector } from "react-redux";
import Item from "./Item";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="mt-8">
      <h1 className="text-2xl text-center font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        {cartItems.map((item, index) => (
          <Item index={index} item={item} />
        ))}
      </div>
    </div>
  );
}
