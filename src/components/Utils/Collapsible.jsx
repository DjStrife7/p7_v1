import { useState } from 'react';
import ArrowDown from '../../assets/elements/arrows/arrow_down.png';

function Collapsible({ title, content }) {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className='collapse'>
      <div className='collapse__section'>
        <h3 className='collapse__title'>{title}</h3>
        <button className='collapse__btn' onClick={toggleOpen}>
          <img className={ isOpen ? "rotate" : "" } src={ArrowDown} alt={isOpen ? "Close" : "Open"} />
        </button>
      </div>
      { 
        isOpen && ( <p className='collapse__content'>{content}</p> )
      }
    </article>
  )
};


export default Collapsible;