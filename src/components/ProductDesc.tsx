"use client";

import { useState } from "react";
import { Product } from "@/type";
import { useCartStore } from "@/store";

const ProductDesc: React.FC<{ product: Product }> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="bg-stone-200 px-5 py-8 mt-16 md:w-[55%] md:px-16 md:pb-20 md:pt-40 md:mt-0 md:mb-20 border">
      <p className="text-xl leading-7 mb-10">{product.description}</p>

      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">Quantity</p>
        <div className="flex border border-black h-[3.5rem]">
          <button
            className="border-r border-black text-2xl w-[3.5rem] flex justify-center items-center bg-white transition duration-150 hover:bg-transparent"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            -
          </button>
          <div className="text-2xl w-[3.5rem] flex justify-center items-center">
            <p>{quantity}</p>
          </div>
          <button
            className="border-l border-black text-2xl w-[3.5rem] flex justify-center items-center bg-white transition duration-150 hover:bg-transparent"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <p className="text-2xl font-semibold">{product.price}</p>
      </div>

      <div className="flex items-center justify-between mt-10 w-full gap-5">
        <button
          onClick={handleAddToCart}
          className="uppercase border-2 border-black text-lg font-semibold w-[50%] py-3 transition duration-200 hover:bg-black hover:text-white"
        >
          Add to Cart
        </button>
        <button className="w-[50%] py-3 uppercase bg-[#b6002c] text-lg border-2 border-[#b6002c] text-white font-semibold transition duration-200 hover:bg-transparent hover:text-[#b6002c]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDesc;
