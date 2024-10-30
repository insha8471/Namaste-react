import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    // body
    // console.log(props)
    const { resData } = props;
    // console.log(resData);
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData.info;

    return (
        
        <div data-testid="resCardId" className="mx-2 flex flex-col w-64 p-3 m-1 h-[320] shadow-lg rounded-md hover:bg-gray-50 hover:scale-105 ease-in-out duration-500">
            <img className="res-logo rounded-md ml-2 w-[220px] h-[200px]" alt="res-img" src={ CDN_URL + cloudinaryImageId} />
            
            <div className="pt-3">
                <h2 className='font-bold text-lg text-gray-600 truncate'>{name}</h2>
                <h5 className="inline font-semibold border border-solid border-orange-500 bg-orange-400 rounded-md p-0.5">★ {avgRating}  </h5>
                <h4 className="inline font-semibold"> • {sla.deliveryTime} mins</h4> 
                <h4 className="truncate pt-1 mb-1 text-gray-600" > 
                    {cuisines.join(",")} </h4>
            </div>
        </div>
    );
};

export default RestaurantCard;