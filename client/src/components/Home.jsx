import HomeImg from "../assets/ikan.jpg";
import Testimonials from "./Testimonials.jsx";
import About from "./About.jsx";
import "./Major.css";
function Home() {
  return (
    <>
      <div className="homeImg">
        <img src={HomeImg} alt="home image" />
      </div>
      <div className="headline">
        <h3>
          find your ideal place according to your needs, pocket and expectations
        </h3>
      </div>
      <About/>
      <Testimonials/>
      
    </>
  );
}
export default Home;
