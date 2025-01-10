import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../icons8-search.svg";
// import { debounce } from "../utils/constants";
import useListOfRestaurant from "../utils/useListOfRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Offline from "./Offline";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Hamburger from "./Hamburger"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Body = () => {
    // Local State variable
    const dispatch = useDispatch();
    const [filterListOfRestaurant, setFilterListOfRestaurant] = useState();
    const [searchText, setSearchText] = useState("");
    const listOfRestaurant = useListOfRestaurant(setFilterListOfRestaurant);
    const onlineStatus = useOnlineStatus();
    // const [updatedListOfRestaurant, setUpdatedListOfRestaurant] = useState();


    // console.log(listOfRestaurant)
    
    // const handelSearch = debounce((text) => {
    //     setFilterListOfRestaurant(
    //         updatedListOfRestaurant?.filter((res) => {
    //             return res?.info?.name.toLowerCase().includes(text.toLowerCase());
    //         })
            
    //     )
    // }, 400);
    // console.log(updatedListOfRestaurant);

    // useEffect(() => {
    //     if (listOfRestaurant) {
    //         setFilterListOfRestaurant([...listOfRestaurant]);
    //         setUpdatedListOfRestaurant([...listOfRestaurant]);
    //     }
    // }, [listOfRestaurant]);
 

    if(!onlineStatus) {
        return <Offline/>
    }

    const {setUserName, loggedInUser} = useContext(UserContext);

    // conditional Rendering
    // if( listOfRestaurant.length === 0 ) {
    //     return < Shimmer />;
    // }
    

    return listOfRestaurant.length === 0 ? < Shimmer /> : (
         <div className="body w-full text-center">
            {/* < Hamburger />  */}
            <div className="filter flex items-center justify-center text-center my-10">
            <div className="border-2 border-gray-500 p-1 rounded-3xl sm:w-full md:w-1/2 h-12 flex">
                        <input data-testid="searchInput" type="text" className="search-box mx-4 w-full outline-none" placeholder="Search here for Restaurants...." value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                            // handelSearch(e.target.value)
                            // console.log(e.target.value)
                        }}
                        />
                        <img src={searchIcon} alt="searchImg" className="text-2xl px-6 pb-2 text-gray-500 cursor-pointer hover:text-orange-300"/>
                    </div>
                {/* <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-1 shadow-md rounded-sm bg-orange-600" onClick={() => {
                        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);

                        setFilterListOfRestaurant(filteredList);
                    }}>
                        Top Rated Restaurant
                    </button>
                </div> */}

                {/* <div className="m-4 p-4 flex items-center">
                    <label>User Name :</label>
                    <input className="px-2 ml-2 border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div> */}
            </div>
            <div className="w-full res-container flex flex-wrap items-center justify-center">
                    {
                        filterListOfRestaurant?.map((restaurant) => (
                            <Link className="restDesc" key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>< RestaurantCard  resData={restaurant}/> </Link>
                        ))
                    }                
            </div>
        </div>
    ) ;
};

export default Body;