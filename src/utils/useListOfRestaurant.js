import { useEffect, useState } from "react";
import { RES_LIST_API } from "./constants";

const useListOfRestaurant = (setFilterListOfRestaurant) => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    },[])
    
    const fetchData = async () => {
            const data = await fetch(RES_LIST_API);
            
            const json = await data.json();
            console.log(json)
            setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setFilterListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }   

        return listOfRestaurant;
}

export default useListOfRestaurant;


