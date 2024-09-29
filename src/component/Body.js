import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    const [isFiltered, setIsFiltered] = useState(false);

    const handleFilterToggle = () => {
        if(!isFiltered) {
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);

            setListOfRestaurant(filteredList);
        }else{
            setListOfRestaurant(resList);
        }

        setIsFiltered(!isFiltered);
    }
    

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={handleFilterToggle}>
                    {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (
                        < RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }                
            </div>
        </div>
    );
};

export default Body;