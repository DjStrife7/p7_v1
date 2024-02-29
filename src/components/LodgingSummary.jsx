import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import StarOn from '../assets/elements/stars/star_on.png';
import StarOff from '../assets/elements/stars/star_off.png';

import LodgingList from '../datas/LodgingList.json';


function LodgingSummary() {
  const { id } = useParams();
  const currentLodging = LodgingList.find(o => (o.id === id));

  const [ tags, setTags ] = useState([]);
  useEffect(() => {
    setTags(currentLodging.tags);
  }, [currentLodging]);

  // On transforme le rating en nombre
  const ratingNumber = parseInt(currentLodging.rating);
  // On établi un tableau pour les étoiles positives
  const FilledStars = Array.from({ length: ratingNumber}, (index) => index );
  // On établi un tableau pour les étoiles négatives
  const EmptyStars = Array.from(
    { length: 5 - ratingNumber },
    (index) => index + ratingNumber
  );

  // fonction pour simplifier l'écriture
  const dataHost = currentLodging.host;


  return (
    <section className='summary'>
      <article className='summary__article'>
        <div className='summary__article__infos'>
          <h1 className='summary__article__title'>{currentLodging.title}</h1>
          <p className='summary__article__location'>{currentLodging.location}</p>
        </div>
        <div className='summary__article__tags'>
          {tags && tags.map((tag) => (
            <span className='summary__article__tag' key={tag}>{tag}</span>
          ))}
        </div>
      </article>
      <aside className='summary__aside'>
        <span className='summary__aside__host'>
          <h4 className='summary__aside__host__name'>{dataHost.name}</h4>
          <div className='summary__aside__host__img__container'>
            <img className='summary__aside__host__img' src={dataHost.picture} alt={dataHost.name} />
          </div>
        </span>
        <div className='summary__aside__rating'>
          {FilledStars && FilledStars.map((starOn) => (
              <img className='summary__aside__rating__stars' src={StarOn} alt='Star On' key={starOn} />
            ))
          }
          {EmptyStars && EmptyStars.map((starOff) => (
              <img className='summary__aside__rating__stars' src={StarOff} alt='Star Off' key={starOff.length} />
            ))
          }
        </div>
      </aside>
    </section>
  )
};


export default LodgingSummary;