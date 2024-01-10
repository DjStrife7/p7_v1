import { Link } from 'react-router-dom';

import Logo from '../../assets/logo/logo_coral.svg';

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A Propos</Link>
      </nav>
    </header>
  )
};