import React from "react";
import Categories from "./storeComponents/Categories";
import OrderNow from "./storeComponents/OrderNow";
import AllStores from "./storeComponents/AllStores";
import WhatsNew from "./storeComponents/WhatsNew";
import "./FeaturedStore.css";

const MoreStore = () => {
  return (
    <div className="main">
      <div className="categories">
        <Categories />
      </div>

      <div className="rightmain">
        <div>
          <OrderNow />
          <AllStores />
          <AllStores />
          <WhatsNew />
          <AllStores />
          <AllStores />
        </div>
        <div>
          <WhatsNew />
          <AllStores />
        </div>
      </div>
    </div>
  );
};

export default MoreStore;
