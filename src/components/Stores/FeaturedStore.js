import React from "react";
import Categories from "./storeComponents/Categories";
import Stores from "./storeComponents/Stores";
import NearMe from "./storeComponents/NearMe";
import Ratings from "./storeComponents/Ratings";
import OrderNow from "./storeComponents/OrderNow";
import "./FeaturedStore.css";

const FeaturedStore = () => {
    return (
        <div className="main">
            <div className="categories">
                <Categories />
            </div>

            <div className="rightmain">
                <div>
                    <OrderNow />
                </div>
                <div>
                    <Stores />
                </div>

                <div>
                    <NearMe />
                </div>
                <div>
                    <Ratings />
                </div>
            </div>

        </div>
    );
};

export default FeaturedStore;
