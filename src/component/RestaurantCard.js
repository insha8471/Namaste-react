import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData.info)
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData.info;

    return (
        <div className="res-card">
            <div className='logo-cotainer'>
                <img className="res-logo" alt="res-img" src={ CDN_URL + cloudinaryImageId} />
            </div>
            <div>
                <h3 className='title'>{name}</h3>
                <div className='items'>
                    <h5> {cuisines.join(",")} </h5>
                    <h5>{costForTwo}</h5>
                    <h5>{avgRating} starts</h5>
                    <h5>{sla.deliveryTime} minutes</h5>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;