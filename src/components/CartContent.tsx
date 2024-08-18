"use client";

import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import { IoCloseOutline } from "react-icons/io5";
import { useCartStore } from "@/store";
import Image from "next/image";
import { RiDeleteBin7Line } from "react-icons/ri";
import Link from "next/link";
import CartEmpty from "./CartEmpty";
import SubTotal from "./SubTotal";
import Cookies from "js-cookie";

const CartContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);

  // Save cart items to cookies whenever they change
  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cartItems), { expires: 7 }); // Cookie expires in 7 days
  }, [cartItems]);

  // Retrieve cart items from cookies when the component mounts
  useEffect(() => {
    const savedCart = Cookies.get("cart");
    if (savedCart) {
      const parsedCartItems = JSON.parse(savedCart);
      parsedCartItems.forEach((item: any) => {
        addToCart(item, item.quantity);
      });
    }
  }, [addToCart]);

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price),
    0,
  );

  return (
    <div>
      <div
        className="flex items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <CartIcon />
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full md:w-[30rem] h-full bg-white z-30 transition-transform ease-in-out duration-500 p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            Your Shopping Cart (
            {cartItems.reduce((total, item) => total + item.quantity, 0)})
          </h1>
          <div onClick={() => setIsOpen(false)}>
            <IoCloseOutline className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="h-full">
            <div className="mt-5 overflow-auto h-[65%]">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-4"
                >
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/products/${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} x ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-lg font-medium">
                      ${(item.quantity * parseFloat(item.price)).toFixed(2)}
                    </p>
                    <button
                      className="text-sm text-red-500 hover:underline"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <RiDeleteBin7Line className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <SubTotal totalPrice={totalPrice} />
          </div>
        ) : (
          <CartEmpty setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default CartContent;
