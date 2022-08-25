import './NavBar.css';
import { MenuItems } from './MenuItems';
import { useState } from 'react';
import Logo from './logo.svg';

const NavBar = () => {
const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
const ClickMenu=()=>{setIsMenuBarOpen(!isMenuBarOpen)

}

return (
    <><nav>
      <span className="nav-logo"><img src= {Logo} /></span>

      <ul className="nav-links-container">
        {MenuItems.map((item, index) => {
            return(
              <ul key={index}>
                <a className={item.cName} href={item.url}>
                {item.title}
                </a>
              </ul>
            )
        })}
      </ul>
       
        <span className="nav-menu-icon">
        <a className="nav-menu-burger-icon" onClick={ClickMenu}
       ></a></span>
      
     
     {isMenuBarOpen===true ?
     
     <div className="menuItems">Menu</div> : ""
     

}
 
      <span className="nav-entry">
        <span className="nav-right"
        ><a href="">Log In</a> | <a href="">Sign Up</a>
        <button className="nav-order-btn"><a href="">Order Now</a></button></span>
    
    </span> 
    
  </nav>
  </>

     
  );
}


export default NavBar;
