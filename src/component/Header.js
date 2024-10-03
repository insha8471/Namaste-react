import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>contact Us</li>
                    <li>cart</li>
                    <div className='login-box'>
                        <button className='login'>login</button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;