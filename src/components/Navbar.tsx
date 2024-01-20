import { Link, useLocation } from 'react-router-dom';
import {
  LogoIconSvg,
  TitleIconSvg,
  DropDownMenu,
} from '../assets/navbar_component';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const checkActive = (path: string) =>
    location.pathname === path ? 'links_link-active' : '';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <section className="left-block">
        <Link to={'/'}>
          <LogoIconSvg></LogoIconSvg>
          <TitleIconSvg></TitleIconSvg>
        </Link>
      </section>
      <section className="links">
        <Link className={checkActive('/library')} to={'/library'}>
          Library
        </Link>
        <Link className={checkActive('/api')} to={'/api'}>
          API
        </Link>
        <Link className={checkActive('/support')} to={'/support'}>
          Support
        </Link>
        <Link className={checkActive('/contacts')} to={'/contacts'}>
          Contacts
        </Link>
      </section>
      <section className="right-block">
        <div className="user-block">
          <Link to={'/login'} className="login-button">
            Sign-in
          </Link>
        </div>
        <button onClick={toggleMenu} className="burger-button">
          <DropDownMenu />
        </button>
        {isMenuOpen && (
          <div className="burger-menu">
            <div className="burget-menu_container">
              <Link onClick={toggleMenu} to={'/login'} className="login-button">
                Sign-in
              </Link>
              <Link
                onClick={toggleMenu}
                className="burger-menu_links"
                to={'/library'}
              >
                Library
              </Link>
              <Link
                onClick={toggleMenu}
                className="burger-menu_links"
                to={'/api'}
              >
                API
              </Link>
              <Link
                onClick={toggleMenu}
                className="burger-menu_links"
                to={'/support'}
              >
                Support
              </Link>
              <Link
                onClick={toggleMenu}
                className="burger-menu_links"
                to={'/contacts'}
              >
                Contacts
              </Link>
              <Link
                onClick={toggleMenu}
                className="burger-menu_links"
                to={'/about'}
              >
                About project
              </Link>
            </div>
          </div>
        )}
      </section>
    </header>
  );
};

export default Navbar;
