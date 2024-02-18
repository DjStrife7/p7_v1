import { useState } from 'react';
import ArrowDown from '../../assets/elements/arrows/arrow_down.png';

function Collapsible({ title, content }) {
  const [ IsOpen, setIsOpen ] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <article className='collapse'>
      <div className='collapse__section'>
        <h3 className='collapse__title'>{title}</h3>
        <button className='collapse__btn' onClick={toggleOpen}>
          <img className={ IsOpen ? "rotate" : "" } src={ArrowDown} alt={IsOpen ? "Close" : "Open"} />
        </button>
      </div>
      { 
        IsOpen && ( <p className='collapse__content'>{content}</p> )
      }
    </article>
  )
};


export default Collapsible;