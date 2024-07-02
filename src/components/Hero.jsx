import heroImg from '../assets/hero2.jpg';
import "./Major.css";
function Hero(){
  return(
    <div className="hero-section">
      <div className="heroImg">
        <img src={heroImg} alt="hero image" />
      </div>
      <div className="hero-headline">
        <h2>discover amazing places to live</h2>
        <p>our houses are fully furnished with modern design to allow you experience life like never before</p>
      </div>
      <div className="hero-button">
        <button className='login-button'>login</button>
        <button className='signUp-button'>Sign Up</button>
      </div>
    </div>
  )
}
export default Hero