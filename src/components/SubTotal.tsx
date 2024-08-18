import React from "react";

const SubTotal: React.FC<{ totalPrice: number }> = ({ totalPrice }) => {
  return (
    <div className="mt-5">
      <div className="font-semibold text-lg items-center flex justify-center">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - -
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="font-semibolde text-2xl">
          <h2>Subtotal:</h2>
          <h1>${totalPrice.toFixed(2)}</h1>
        </div>
        <button className="uppercase border-2 border-black text-lg font-semibold w-[11rem] py-3 transition duration-200 hover:bg-black hover:text-white">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default SubTotal;
