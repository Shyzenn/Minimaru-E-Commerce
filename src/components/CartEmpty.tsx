import Image from "next/image";

const CartEmpty: React.FC<{ setIsOpen: (value: boolean) => void }> = ({
  setIsOpen,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-60">
      <Image src="/emptyCart.png" alt="" width={150} height={150} />
      <p className="text-xl font-semibold">Your cart is empty</p>
      <button
        onClick={() => setIsOpen(false)}
        className="border border-black bg-stone-100 rounded-sm text-lg px-4 py-2 hover:bg-stone-200 mt-5"
      >
        Keep Browsing
      </button>
    </div>
  );
};

export default CartEmpty;
