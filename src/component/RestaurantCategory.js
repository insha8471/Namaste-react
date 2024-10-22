import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItem, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex(showItem);
    }

    // console.log(data)
    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-10  ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} 
                        ({data?.itemCards ? data?.itemCards?.length : data?.categories?.length})
                    </span>
                    <span className="">{showItem ? "🡩" : "🡫"}</span>

                    
                </div>

                {showItem && < ItemList items={data?.itemCards || data?.categories?.flatMap(
                    (category) => category.itemCards
                )}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;