import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import LodgingList from '../datas/LodgingList.json';

const Thumbs = () => {
  const [Data, SetData] = useState([]);

  useEffect(() => {
    SetData(LodgingList);
  }, []);

  return (
    <section className='thumb__gallery'>
      {Data && Data.map((LodgingList) => (
        <NavLink className='thumb__link'  key={LodgingList.id} to={{
          pathname: `/Lodging/${LodgingList.id}`,
          state: { Lodging: LodgingList }
          }}>
          <img className='thumb__cover' src={LodgingList.cover} alt={LodgingList.title} />
          <h3 className='thumb__title'>{LodgingList.title}</h3>
        </NavLink>
      ))}
    </section>
  )
};


export default Thumbs;