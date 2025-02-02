import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Products from "../Components/Products";
import Herosection from "../Components/Herosection";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (err) {
      console.log("error aa gya ");
      setItems([]);
    }

    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
<>

<Herosection></Herosection>
<h1 className="text-center mt-17 font-bold text-3xl">
  COLLECTIONS
</h1>
{
    loading ? (<Spinner></Spinner>):
    (
        items.length > 0 ? (
            <div className=" mt-6 grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {

                items.map((item )=>(
                    <Products key={item.id} item={item}></Products>
                ))
                }

            </div>
            
        ):(
            <div>no data found </div>

        )
    )
}

</>

  )
  

};

export default Home;
