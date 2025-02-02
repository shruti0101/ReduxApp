import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../Redux/Slices/CartSlice";

const Products = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function AddtoCart() {
    dispatch(add(item));
    toast.success("item added to cart");
  }

  function RemovefromCart() {
    dispatch(remove(item.id));
    toast.error("item removed from cart");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-300  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] ">
        <div className="h-[180px]">
          <img className=" h-full w-full" src={item.image}></img>
        </div>

        <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40">
            {item.title}
          </p>
        </div>

        <p className="w-40 text-gray-700 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
        <p className='font-bold '> Rating ⭐ :  {item.rating.rate}</p>

        

        <div className="flex justify-between items-center w-full mt-5">
          <p className="text-green-600 font-semibold">${item.price}</p>

          {cart.some((p) => p.id == item.id) ? (
            <button
              onClick={RemovefromCart}
              className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={AddtoCart}
              className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
