import Logo from '../../assets/logo/logo_white.svg';

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <p><i class="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved</p>
    </footer>
  )
};