import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    // pulling in state (basket) and dispatch (like a gun that shoots the action)
    const [{ basket }] = useStateValue();
    console.log({basket})
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt="logo" />
            
            </Link>
            <div className="header__search">
                <input className="header__searchInput" 
                type="text" />
                
                <SearchIcon className="header__searchIcon" />
                
            </div>
            <div className="header__nav">
                <Link to="/login">
                    <div className='header__option'>
                        <span className="header__optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header__optionLineTwo">
                            Sign in
                        </span>                    
                    </div>
                </Link>

                <div className='header__option'>
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>                    
                </div>

                <div className='header__option'>
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>                    
                </div>
                
                <Link to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
