import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="flex bg-emerald-600 py-3 px-5 justify-between">
        <h3 className="font-bold text-white">ShopShopping</h3>
        <div className="relative">
          <CartIcon />
          <p className="absolute top-0 right-0 bg-emerald-200 px-1 rounded-full opacity-90 text-[0.6rem]">
            {amount}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
