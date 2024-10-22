import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Header = () => {
    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)

    // subscribing to the store using selector
    const carItem = useSelector((store) => store.cart.items);
    console.log(carItem)

    // const handleHamburger = () => {
    //     <hamburger />
    // }

    return (
        <div className="shadow-sm py-5 sm:py-7 bg-slate-50">
            <div className="mx-3 flex justify-between">
            <div className="logo-container text-2xl font-extrabold italic sm:text-4xl">
                {/* <img className="w-32" src={LOGO_URL} alt="logo"/> */}
                <Link to="/"><span className="font-extrabold text-green-600 cursor-pointer">Plate<span className="text-orange-500">Mate</span></span></Link>
            </div>

            {/* <div className=" sm:hidden">
                <img className="w-8 cursor-pointer" src={svgIcon} onClick={handleHamburger}/>
            </div> */}

            <div className="flex items-center hidden sm:block mt-[6px]">
                <ul className="flex">
                    <li className="px-2 text-lg font-semibold cursor-pointer hover:text-orange-600"><Link to="/">Home</Link></li>
                    <li className="px-2 text-lg font-semibold  cursor-pointer hover:text-orange-600"><Link to="/about">About</Link></li>
                    <li className="px-2 text-lg font-semibold cursor-pointer hover:text-orange-600"><Link to="/contact">contact</Link></li>
                    <li className="px-2 text-lg font-semibold cursor-pointer hover:text-orange-600"><Link to="cart">cart({carItem.length})</Link></li>
                    <div className="px-2 text-lg font-semibold cursor-pointer hover:text-orange-600">
                        <button className='login'>login</button>
                    </div>
                    {/* <li className="px4 text-lg font-semibold cursor-pointer hover:text-orange-600">{loggedInUser}</li> */}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;