import React from "react";
import { ChevronDown, ChevronUp } from "../icons";

export const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="flex justify-between mt-5">
      <div className="flex">
        <div className="w-20 mr-4">
          <img src={img} alt={title} className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold capitalize">{title}</h4>
          <h4 className="text-slate-600">$ {price}</h4>
          <button className="text-red-700 text-sm mt-2">remove</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button>
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
