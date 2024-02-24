import { useState } from 'react';

import ArrowLeft from '../../assets/elements/arrows/arrow_left.png';
import ArrowRight from '../../assets/elements/arrows/arrow_right.png';
import ImgNotFound from '../../assets/img/img_not_found.png';


function SlideShow(props) {
  const pictures = props.pictures;
  const [ currentSlide, nextSlide ] = useState(0);
  
  const getClassName = (index) => {
    if (index === currentSlide) {
      return 'show';
    }
    return (
      ''
    );
  };

  // Fonction qui permet de passer à la pictures suivente ou à la précédente
  const goToNextSlide = () => {
    nextSlide((currentSlide + 1) % pictures.length);
  };
  const goToPreviousSlide = () => {
    const newCurrentSlide = currentSlide - 1;
    if (newCurrentSlide < 0) {
      nextSlide(pictures.length - 1);
      return;
    } 
    nextSlide(currentSlide - 1);
  };

  //
  const picturesAvailable = () => {
    return (
      pictures && pictures.length > 0
    );
  };

  // Fonction qui retourne une image "Image not found" si il n'y a pas d'image pour le bien sinon retourne les images
  const getSlideShowOrDefaultImg = () => {
    if (!picturesAvailable()) {
      return (
        <img className='slider__img notfound' src={ImgNotFound} alt={ImgNotFound} />
      )
    }
    return pictures.map((img, index) => (
      <img className={getClassName(index)} key={img} src={img} alt="lodging" />
    ));
  }

  
  return (
    <section className='slider__section'>
      <div className='slider__container'>{getSlideShowOrDefaultImg()}</div>
      {picturesAvailable() && pictures.length > 1 && (
        <>
          <button className='slider__btn back'>
            <img className='slider__btn__img' src={ArrowLeft} alt="Back" onClick={goToPreviousSlide} />
          </button>
          <span className='slider__index'>{currentSlide + 1} / {pictures.length}</span>
          <button className='slider__btn next'>
            <img className='slider__btn__img' src={ArrowRight} alt="Next" onClick={goToNextSlide} />
          </button>
        </>
      )}
    </section>
  )
};


export default SlideShow;