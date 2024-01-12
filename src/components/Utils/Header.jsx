import { Link } from 'react-router-dom';

import Logo from '../../assets/logo/logo_coral.svg';
import '../../styles/main.scss';

export default function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={Logo} alt="Logo" />
      <nav className='header__nav'>
        <Link className='header__nav__link' to='/'>Accueil</Link>
        <Link className='header__nav__link' to='/about'>A Propos</Link>
      </nav>
    </header>
  )
};