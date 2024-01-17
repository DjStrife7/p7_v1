import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Lodging from '../../datas/LodgingList.json';

const Thumbs = () => {
  const [Data, SetData] = useState([]);

  useEffect(() => {
    SetData(Lodging);
  }, []);

  return (
    <section className='thumb__gallery'>
      {Data.map((Lodging) => (
        <NavLink className='thumb__link'  key={Lodging.id} to={{
          pathname: `/Lodging/index${Lodging.id}`,
          state: { Lodging: Lodging }
          }}>
          <NavLink key={Lodging.id} to={{
            pathname: `/Lodging/index${Lodging.id}`,
            state: { Lodging: Lodging }
            }}>
            <h3 className='thumb__title'>{Lodging.title}</h3>
          </NavLink>
        </NavLink>
      ))}
    </section>
  )
};


export default Thumbs;