import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
          <img src="img/flag.png" width={40} height={25} />
          <ArrowDownwardIcon />
          </div>
          <div className="item">
          <Link className="link" to="/products/1">Silver Color</Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/2">Gold Color</Link>
        </div>
        </div>
       
        <div className="center">
          <Link className="link" to="/">ALTU DESIGN</Link>
        </div>
        
        <div className="right">
          <div className="item">
            <Link className="link" to="/products/2">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Contact</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteIcon />
            <div className="cartIcon">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar