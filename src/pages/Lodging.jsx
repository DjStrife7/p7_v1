import SlideShow from '../components/Slideshow.jsx';
import LodgingSummary from '../components/LodgingSummary.jsx';
import LodgingContent from '../components/LodgingContent.jsx';

function Lodging() {

  return (
    <section className="lodging-wrapper">
      <SlideShow />
      <LodgingSummary />
      <LodgingContent />
    </section>
  )
};


export default Lodging;