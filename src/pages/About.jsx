import Banner from '../components/Utils/Banner.jsx';
import Collapse from '../components/Utils/Collapsible.jsx';

import AboutDatas from '../datas/AboutDatas.json';

function About() {
  const CollapseAbout = ({ data }) => {
    return (
      <section className='collapse__wrapper'>
        {data.map((item, index) => (
          < Collapse key={index} title={item.title} content={item.description} />
        ))}
      </section>
    )
  };

  return (
    <main className='page-wrapper'>
      <Banner />
      <CollapseAbout data={AboutDatas} />
    </main>
  )
};


export default About;