import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

export const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="flex justify-between mt-5">
      <div className="flex">
        <div className="w-20 mr-4">
          <img src={img} alt={title} className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold capitalize">{title}</h4>
          <h4 className="text-slate-600">$ {price}</h4>
          <button
            className="text-red-700 text-sm mt-2"
            onClick={() => dispatch(removeItem(id))}
          >
            remove
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button onClick={() => dispatch(increase({ id }))}>
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button onClick={() => dispatch(decrease(id))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
