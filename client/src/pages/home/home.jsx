import React, { useState } from "react";
import Typed from "react-typed";
import Searchbar from "./searchbar";

import Products from "../../components/ProductList/Products";


const Home = () => {
  const [searchFilter, setSearchFilter] = useState(null);

  return (
    <div className="bg-[#eaeadb] w-full h-screen text-center">
      <Searchbar setSearchFilter={setSearchFilter} />
      <div className="py-2 items-center text-center text-2xl md:text-2xl sm:text-1xl">
        <Typed
          className=" font-bold font-style: italic font-serif text-[#c77783] drop-shadow-lg "
          strings={["where thoughtful gifts come to life..."]}
          typeSpeed={80}
          backSpeed={100}
          loop
        />
      </div>
      <div>
        
        <Products filter={searchFilter} />
      </div>
    </div>
  );
};

export default Home;
