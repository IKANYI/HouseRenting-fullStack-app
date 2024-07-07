import aboutImg from "../assets/hero1.jpg";
import './About.css';
function About(){
  return(
    <div className="about">
    <div className="about-t">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestias labore delectus, excepturi quidem autem tempore itaque, quae deserunt natus sequi.</p>
      <p><a href="">contact us</a></p>
    </div>
    
    <div className='about-img'><img src={aboutImg} alt="img" /></div>
  </div>
  )
}
export default About
    