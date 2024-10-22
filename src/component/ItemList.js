import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
  const dispatch = useDispatch();
    console.log(items.length)

    const handleAddItem = (item) => {
      //dispatch an item
      dispatch(addItem(item));
    }
    return (
        <div>
          {items.map((item) => (
            <div
              data-testid="foodItems"
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    - ₹
                    {item.card.info.price
                      ? item?.card?.info?.price / 100
                      : item?.card?.info?.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div className="w-3/12 relative sm:w-6/12 md:w-4/12 lg:w-3/12 block text-white">
                <button
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-2 py-2 rounded-lg bg-black text-xs sm:text-sm "
                  onClick={() => handleAddItem(item)} >
                    Add +
                </button>
                
                <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" />
              </div>
            </div>
          ))}
        </div>
    )
}

export default ItemList;