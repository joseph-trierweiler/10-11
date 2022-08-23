import './navbar.css';
import { useState } from 'react';
import Logo from './Logo.svg';

const NavBar = () => {
const [openMenuBar,isMenuBarOpen] = useState(false);

const dropDownMenu = () => {
  if (openMenuBar === false) {
    isMenuBarOpen(true);
  } else if (openMenuBar  === true) isMenuBarOpen(false);
}
  return (
    <><nav>
      <span id="nav-logo"><img src= {Logo} /></span>

      <span id="nav-links-container">
        <a class="nav-links" href="">Menu</a>
        <a class="nav-links" href="">Rewards</a>
        <a class="nav-links" href="">Locations</a>
        <a class="nav-links" href="">Careers</a>
        <a class="nav-links" href="">About Us</a>
      </span>

      <span class="nav-menu-icon">
        <span class="nav-menu-burger-icon" onClick = {dropDownMenu}></span>
      </span>

      <span id="nav-entry">
        <span id="nav-right"
        ><a href="">Log In</a> | <a href="">Sign Up</a>
          <button id="nav-order-btn"><a href="">Order Now</a></button></span>
      </span>
    </nav><span id="dropdown-container"> </span></>
  );
}

export default NavBar;
