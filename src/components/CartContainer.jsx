import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";

export const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="flex mt-10 justify-center items-center">
        <header className="text-center">
          <h2 className="uppercase font-bold text-xl">your cart</h2>
          <h4 className="text-sm mt-2">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="mt-10 px-5">
      <header className="text-center">
        <h2 className="uppercase font-bold text-xl">your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer className="border-t-2 border-emerald-600 mt-10 pt-2">
        <div>
          <h4 className="font-bold flex justify-between">
            Total <span className="">$ {total.toFixed(2)}</span>
          </h4>
        </div>
        <div className="flex mt-5">
          <button
            className="py-2 px-4 border-2 border-red-600 uppercase text-red-600 font-bold hover:bg-red-600 hover:text-white rounded-md m-auto"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
        </div>
      </footer>
    </section>
  );
};
