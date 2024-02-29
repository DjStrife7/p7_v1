import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ArrowLeft from '../assets/elements/arrows/arrow_left.png';
import ArrowRight from '../assets/elements/arrows/arrow_right.png';
import ImgNotFound from '../assets/img/img_not_found.png';

import LodgingList from '../datas/LodgingList.json';


function SlideShow() {
  const { id } = useParams();
  const currentLodging = LodgingList.find(o => (o.id === id));
  const pictures = currentLodging.pictures;

  const [ currentSlide, nextSlide ] = useState(0);

  const [ picture, setPicture ] = useState(0);
  useEffect(() => {
    setPicture(currentLodging.pictures)
  }, [currentLodging]);

  
  const getClassName = (index) => {
    if (index === currentSlide) {
      return 'show';
    }
    return (
      'hidden'
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


  //Affichage de l'image du Lodging via le tableau des images du json
  const picturesAvailable = () => {
    return (
      <div>
        {picture && picture.map((picture) => (
          <img className="slider__action__img" src={picture} alt={currentLodging.id} />
      ))}
      </div>
    );
  };

  // Fonction qui retourne une image "Image not found" si il n'y a pas d'image pour le bien sinon retourne les images
  const getSlideShowOrDefaultImg = () => {
    if (!picturesAvailable()) {
      return (
        <img className='slider__action__img notfound' src={ImgNotFound} alt={ImgNotFound} />
      )
    }
    return pictures.map((img, index) => (
      <img className={getClassName(index)} key={img} src={img} alt={currentLodging.title} />
    ));
  }

  
  return (
    <section className='slider'>
      <div className='slider__container'>{getSlideShowOrDefaultImg()}</div>
      {picturesAvailable() && pictures.length > 1 && (
        <div className='slider__action'>
          <button className='slider__action__btn back'>
            <img className='slider__action__btn__img' src={ArrowLeft} alt="Back" onClick={goToPreviousSlide} />
          </button>
          <span className='slider__action__index'>{currentSlide + 1} / {pictures.length}</span>
          <button className='slider__action__btn next'>
            <img className='slider__action__btn__img' src={ArrowRight} alt="Next" onClick={goToNextSlide} />
          </button>
        </div>
      )}
    </section>
  )
};


export default SlideShow;