import { useState } from 'react';

import ArrowLeft from '../../assets/elements/arrows/arrow_left.png';
import ArrowRight from '../../assets/elements/arrows/arrow_right.png';

// import LodgingList from '../../datas/LodgingList.json';


function SlideShow() {
  const [ slide, moveSlide ] = useState(0);
  const [ index, updateIndex ] = useState(0);

  return (
    <section className='slider__section'>
      <button className='slider__btn back' onClick={() => moveSlide(slide - 1) && updateIndex(index - 1)}>
        <img className='slider__btn__img' src={ArrowLeft} alt="Back" />
      </button>
      <button className='slider__btn next' onClick={() => moveSlide(slide + 1) && updateIndex(index + 1)}>
        <img className='slider__btn__img' src={ArrowRight} alt="Next" />
      </button>
      <p>{index}/{index.length}</p>
    </section>
  )
};


export default SlideShow;