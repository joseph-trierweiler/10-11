import navBarStyles from './navBarStyles.module.css';
// import { MenuItems } from './MenuItems';
import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Logo from './logo.svg';
// import OrderButton from '../ordernow/orderNow';
import OrderNow from '../ordernow/OrderPage';
import LoginSignUpModal from '../login/LoginSignUpModal';

const MenuItems = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    cName: 'nav-links',
  },
  {
    id: 2,
    title: 'Rewards',
    url: '/Rewards',
    cName: 'nav-links',
  },
  {
    id: 3,
    title: 'Locations',
    url: '#',
    cName: 'nav-links',
  },
  {
    id: 4,
    title: 'Careers',
    url: '#',
    cName: 'nav-links',
  },
  {
    id: 5,
    title: 'About Us',
    url: '#',
    cName: 'nav-links',
  },
];

const NavBar = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const ClickMenu = () => {
    setIsMenuBarOpen(!isMenuBarOpen);
  };

  return (
    <>
      <nav>
        <span className={navBarStyles.navlogo}>
          <img src={Logo} />
        </span>

        <ul className={navBarStyles.navLinksContainer}>
          {MenuItems.map((item) => {
            return (
              <li className={navBarStyles.list} key={item.id}>
                <a className={item.cName}>
                  <Link to={item.url}>{item.title}</Link>
                </a>
              </li>
            );
          })}
        </ul>

        <span className={navBarStyles.navMenuIcon}>
          <a className={navBarStyles.navMenuBurgerIcon} onClick={ClickMenu}></a>
        </span>

        <span className={navBarStyles.navEntry}>
          <span className={navBarStyles.navRight}>
            <button
              className={navBarStyles.navLoginBtn}
              onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
            >
              Log In | Sign Up
            </button>
            {/* <button>
              <OrderButton />
            </button> */}

            <button
              className={navBarStyles.navOrderBtn}
              onClick={() => setIsOrderModalOpen(!isOrderModalOpen)}
            >
              Order Now
            </button>
          </span>
          <span className={navBarStyles.dropdownContainer}> </span>
        </span>
      </nav>
      {isLoginModalOpen && (
        <LoginSignUpModal isModalClosed={setIsLoginModalOpen} />
      )}
      {isOrderModalOpen && <OrderNow isModalClosed={setIsOrderModalOpen} />}
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default NavBar;
