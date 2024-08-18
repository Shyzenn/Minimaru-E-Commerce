const CartLabel: React.FC<{ item: number }> = ({ item }) => {
  if (item === 0) return <></>;

  return (
    <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#b6002c] text-white font-semibold text-xs rounded-full grid place-content-center">
      {item}
    </span>
  );
};

export default CartLabel;
