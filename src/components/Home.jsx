import HomeImg from "../assets/homeImg.svg";
import "./Major.css";
function Home() {
  return (
    <>
      <div className="homeImg">
        <img src={HomeImg} alt="home image" />
      </div>
      <div className="headline">
        <h2>keja yangu</h2>
        <h3>
          find your ideal place according to your needs, pocket and expectations
        </h3>
      </div>
      <div className="homeButton">
        <button>next</button>
      </div>
    </>
  );
}
export default Home;
