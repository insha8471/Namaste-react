import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State variable

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filterListOfRestaurant, setFilterListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilterListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    

    // conditional Rendering
    if(listOfRestaurant.length === 0 ) {
        return < Shimmer />;
    }
    

    return (
        <div className="body">
            <div className="filter">
            <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>


                    <button className="search-btn"
                        onClick={() => {
                            console.log(searchText);
                            const filterRestaurant = listOfRestaurant.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            });

                        if(filterRestaurant.length != 0)
                            setFilterListOfRestaurant(filterRestaurant);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);

                    setFilterListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    filterListOfRestaurant.map((restaurant) => (
                        < RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }                
            </div>
        </div>
    );
};

export default Body;