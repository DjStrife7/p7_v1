import Banner from "../../components/Utils/Banner.jsx";
import Thumbs from "../../components/Utils/Thumbs.jsx";

function Home() {
  return (
    <div className="page-wrapper">
      <div className="banner__wrapper">
        <Banner />
      </div>
      <div className="thumb__wrapper">
        <Thumbs />
      </div>
    </div>
    
  )
};


export default Home;