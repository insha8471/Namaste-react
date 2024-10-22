import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const { resId } = useParams();
    // console.log(resId);

    const resInfo = useRestaurantMenu(resId);
    // console.log(resInfo)
    const [showIndex, setShowIndex] = useState(null);

    const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        const itemType = item?.card?.card?.["@type"];
        return (
          itemType ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          itemType ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      }
    );

    // console.log(resInfo);


    if(resInfo === null) return < Shimmer />;
    
    // const { name, cuisines, } = resInfo?.cards[2].cards;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  
    const val = resInfo?.cards[0]?.card?.card;
    console.log(val)

    return (

        <div className="text-center">
            <h1 className="my-10 text-xl font-extrabold">{val?.text}</h1>
            
            <div className="border border-solid border-gray-200 my-10"></div>
            { categories?.map((category , index) => < RestaurantCategory key={index} data={category?.card?.card} showItem={index === showIndex && true} index={index} setShowIndex={() => {showIndex === index ? setShowIndex(null) : setShowIndex(index)}} /> )}
        </div>
    )
}

export default RestaurantMenu;