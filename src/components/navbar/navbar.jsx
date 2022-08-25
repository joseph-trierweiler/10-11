import navBarStyles from './navBarStyles.module.css'
import { MenuItems } from './MenuItems';
import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from './logo.svg';

const NavBar = () => {
const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
const ClickMenu=()=>{setIsMenuBarOpen(!isMenuBarOpen)

}

return (
    <><nav>
      <span className={navBarStyles.navlogo}><img src= {Logo} /></span>

      <ul className={navBarStyles.navLinksContainer}>
        {MenuItems.map((item, index) => {
            return(
              <li className={navBarStyles.list} key={index}>
                <a className={item.cName} href={item.url}>
                {item.title}
                </a>
              </li>
            )
        })}
      </ul>
       
        <span className={navBarStyles.navMenuIcon}>
        <a className={navBarStyles.navMenuBurgerIcon} onClick={ClickMenu}
       ></a></span>
      
     
     {isMenuBarOpen ?
     
     <div className={navBarStyles.menuItems}></div> : ""
     }
 
      <span className={navBarStyles.navEntry}>
        <span className={navBarStyles.navRight}
        ><a href="">Log In</a> | <a href="">Sign Up</a>
        <button className={navBarStyles.navOrderBtn}><a href="">Order Now</a></button></span>
        <span className={navBarStyles.dropdownContainer}> </span>
    </span> 
    
  </nav>
  </>

     
  );
}


export default NavBar;
