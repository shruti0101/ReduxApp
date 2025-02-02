import { NavLink } from "react-router";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className=" flex flex-row justify-between items-center h-20 max-w-5xl mx-auto">
        <NavLink to="/">
          <div className="ml-6">
            <img src="https://demos.shopifyteam.com/fashion-boutique/wp-content/uploads/sites/59/2020/03/ezgif.com-webp-to-png-7.png" />
          </div>
        </NavLink>

        <div className="flex flex-row items-center capitalize text-xl gap-x-6 mr-6 text-black-700 -tracking-tighter font-medium">
          <NavLink to="/">
          <div className="hover:text-pink-800  cursor-pointer duration-300 transition-all ease-in">
            home
          </div>
          </NavLink>

          <NavLink to="/about">
          About

          </NavLink>

          <NavLink to="/cart">
            <div className="hover:text-pink-900 text-2xl">
              <FaShoppingCart/>
            </div>
          </NavLink>

        
        </div>
      </div>
    </>
  );
};

export default Navbar;
