import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ArrowDown from '../../assets/elements/arrows/arrow_down.png';


function Collapsible({ title, content }) {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const [ IsOpen, setIsOpen ] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!IsOpen);
  };

  if(isAboutPage) {
    return (
      <article className='collapse'>
        <div className='collapse__section'>
          <h3 className='collapse__title'>{title}</h3>
          <button className='collapse__btn' onClick={toggleOpen}>
            <img className={ IsOpen ? "rotate" : "" } src={ArrowDown} alt={IsOpen ? "Close" : "Open"} />
          </button>
        </div>
        { IsOpen && (
            <p className={ 'collapse__content' }>{content}</p>
          )
        }
      </article>
    )
  } else {
    return (
      <section className='collapse__lodging'>
        <div className='collapse__lodging__section'>
          <h3 className='collapse__lodging__section__title'>{title}</h3>
          <button className='collapse__lodging__section__btn' onClick={toggleOpen}>
            <img className={ IsOpen ? "rotate" : "" } src={ArrowDown} alt={IsOpen ? "Close" : "Open"} />
          </button>
        </div>
        { IsOpen && (
            <div className={ 'collapse__lodging__section__infos' }>{content}</div>
          )
        }
      </section>
    )
  }
  
};


export default Collapsible;