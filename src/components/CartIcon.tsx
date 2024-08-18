import { RiShoppingCartLine } from "react-icons/ri";
import CartLabel from "@/components/CartLabel";
import { useCartStore } from "@/store";

const CartIcon = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button className="relative inline-block">
      <RiShoppingCartLine className="text-xl cursor-pointer" />
      <CartLabel item={totalItems} />
    </button>
  );
};

export default CartIcon;
