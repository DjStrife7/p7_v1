import { useLocation } from 'react-router-dom';
import imgBannerHome from '../../assets/img/kasa_cover_home.jpg';
import imgBannerAbout from '../../assets/img/kasa_cover_about.jpg';

function Banner() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const showTitle = isHomePage;

  return (
    <div className="banner">
      <div className="banner__overlay">
        <img src={ isHomePage ? imgBannerHome : imgBannerAbout } className={ isHomePage ? "banner__image" : "banner__about" } alt="banner_image" />
      </div>
      { showTitle && (
        <h1 className='banner__title'>Chez vous,
          <br className="banner__title__linebreak"/> partout et ailleurs
        </h1>
      )}
    </div>
  )
};


export default Banner;