import Logo from '../../assets/logo/logo_white.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={Logo} alt="Logo" />
      <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
};