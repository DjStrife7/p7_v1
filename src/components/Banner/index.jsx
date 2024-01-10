import ImgBkg from '../../assets/img/kasa_cover_home.jpg';

export default function Banner() {
  return (
    <div className="banner__home">
      <h1 className='banner__home_title'>Chez vous, partout et ailleurs</h1>
      <img src={ImgBkg} className='banner__home__background' alt="background banner" />
    </div>
  )
};