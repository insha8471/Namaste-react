import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useListOfRestaurant from "../utils/useListOfRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State variable
    const [filterListOfRestaurant, setFilterListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const listOfRestaurant = useListOfRestaurant(setFilterListOfRestaurant);
    const onelineStatus = useOnlineStatus();


    console.log(listOfRestaurant)

    if(onelineStatus === false) {
        return <h1>It seems you are offline! please check your internet connection.</h1>
    }

    const {setUserName, loggedInUser} = useContext(UserContext);

    // conditional Rendering
    if( listOfRestaurant.length === 0 ) {
        return < Shimmer />;
    }
    

    return (
        <div className="body">
            <div className="filter flex">
            <div className="search m-4 p-4">
                    <input data-testid="searchInput" type="text" className="search-box py-1.5 px-2 rounded-sm border border-solid border-black " placeholder="search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    
                    />


                    <button className="search-btn rounded-lg shadow-md px-6 py-2 bg-orange-600 m-4"
                        onClick={() => {
                            console.log(searchText);
                            const filterRestaurant = listOfRestaurant.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            });

                        setFilterListOfRestaurant(filterRestaurant);
                    }}
                    >Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-1 shadow-md rounded-sm bg-orange-600" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);

                    setFilterListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
                </div>

                <div className="m-4 p-4 flex items-center">
                    <label>User Name :</label>
                    <input className="px-2 ml-2 border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="res-container flex flex-wrap items-center justify-center">
                    {
                        filterListOfRestaurant.map((restaurant) => (
                            <Link className="restDesc" key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>< RestaurantCard  resData={restaurant}/> </Link>
                        ))
                    }                
            </div>
        </div>
    );
};

export default Body;