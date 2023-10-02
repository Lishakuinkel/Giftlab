import React, { useState } from "react";
import Typed from "react-typed";
// import { Gift } from 'phosphor-react';
import Searchbar from "./searchbar";

import Products from "../../components/ProductList/Products";
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu";

const Home = () => {
  const [searchFilter, setSearchFilter] = useState(null);

  return (
    <div className="bg-[#eaeadb] w-full h-screen text-center">
      <Searchbar setSearchFilter={setSearchFilter} />
      <div className="py-2 items-center text-center">
        <Typed
          className="font-bold font-style: italic font-serif text-[#c77783] drop-shadow-lg "
          strings={["Where thoughtful gifts come to life..."]}
          typeSpeed={80}
          backSpeed={100}
          loop
        />
      </div>
      <div>
        <CategoryMenu />
        <Products filter={searchFilter} />
      </div>
    </div>
  );
};

export default Home;
