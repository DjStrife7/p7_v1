import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo/logo_coral.svg';
import '../../styles/main.scss';

function Header() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  return (
    <header className='header'>
      <img className='header__logo' src={Logo} alt="Logo" />
      <nav className='header__nav'>
        <Link className={isHomePage ? 'header__nav__link__active' : 'header__nav__link'} to='/'>Accueil</Link>
        <Link className={isAboutPage ? 'header__nav__link__active' : 'header__nav__link' } to='/about'>A Propos</Link>
      </nav>
    </header>
  )
};


export default Header;