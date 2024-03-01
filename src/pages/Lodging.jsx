import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SlideShow from '../components/Slideshow.jsx';
import LodgingSummary from '../components/LodgingSummary.jsx';
import LodgingContent from '../components/LodgingContent.jsx';

import LodgingList from '../datas/LodgingList.json';


function Lodging() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!LodgingList.find(o => (o.id === id))) {
      navigate("/error404", { replace: true });
    }
  }, [ id, navigate ]);

  if(LodgingList.find(o => (o.id === id))) {
    return (
      <section className="lodging-wrapper">
        <SlideShow />
        <LodgingSummary />
        <LodgingContent />
      </section>
    )
  }
};


export default Lodging;