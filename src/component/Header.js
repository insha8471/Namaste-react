import { useContext, useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import svgOpenIcon from "../../hamburgerMenuIcon.svg";
import svgKloseIcon from "../../hamburgercrossIcon.svg";
import UserContext from '../utils/UserContext';
import Hamburger from "./Hamburger";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    // const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)
    const [isOpen , setIsOpen] = useState(false);
    const navigate = useNavigate();

    // subscribing to the store using selector
    const carItem = useSelector((store) => store.cart.items);
    const user = useSelector((store) => store.user);
    // console.log(carItem)

    const handleHamburger = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    const handleSignOut = () => {
        if(user) {
            signOut(auth).then(() => {
                dispatch(removeUser());
                navigate("/login")
            }).catch((error) => {
                navigate("/error")
            });
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid , email, displayName } = user;
                dispatch(addUser({
                    uid: uid,
                    email : email,
                    displayName: displayName
                }))
                navigate("/")
                console.log("hello")
            } else {
                dispatch(removeUser());
                navigate("/login")
            }
        });

        return () => unsubscribe();
    },[])   

    return (
        <div className="shadow-sm  w-full py-5 sm:py-7 bg-slate-50">
            <div className="mx-3 flex justify-between">
            <div className="logo-container text-2xl font-extrabold italic sm:text-4xl">
                {/* <img className="w-32" src={LOGO_URL} alt="logo"/> */}
                <Link to="/"><span className="font-extrabold text-green-600 cursor-pointer">Plate<span className="text-orange-500">Mate</span></span></Link>
            </div>

            

            <div className="flex items-center mt-[6px]">
                
                
                <ul className="flex">
                    <li className="hidden sm:block px-2 text-lg font-semibold cursor-pointer hover:text-orange-600"><Link to="/">Home</Link></li>
                    <li className="hidden sm:block px-2 text-lg font-semibold  cursor-pointer hover:text-orange-600"><Link to="/about">About</Link></li>
                    <li className="hidden sm:block px-2 text-lg font-semibold cursor-pointer hover:text-orange-600"><Link to="/contact">contact</Link></li>
                    <li className="bloack px-2 text-lg font-semibold cursor-pointer hover:text-orange-600"><Link to="cart">cart({carItem.length})</Link></li>
                    <div className="hidden sm:block px-2 text-lg font-semibold cursor-pointer hover:text-orange-600">
                        <button className='login' onClick={handleSignOut}><Link to={"/login"}>{user ? user.displayName :"login" }</Link></button>
                    </div>
                    {/* <li className="px4 text-lg font-semibold cursor-pointer hover:text-orange-600">{loggedInUser}</li> */}
                    
                    <div className=" sm:hidden">
                        <img className="w-8 cursor-pointer" src={isOpen ? svgKloseIcon : svgOpenIcon} onClick={handleHamburger}/>
                    </div>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;