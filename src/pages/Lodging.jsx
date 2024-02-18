import { useState } from "react";

import SlideShow from "../components/Utils/Slideshow.jsx";

// import LodgingList from '../datas/LodgingList.json';

function Lodging() {
  const [ slide, moveSlide ] = useState([]);

  return (
    <section className="lodging-wrapper">
      <SlideShow slide={slide} moveSlide={moveSlide} />
    </section>
  )
};


export default Lodging;