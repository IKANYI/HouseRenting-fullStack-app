import './Major.css';
import navimg from '../assets/nav-img.jpg'
function Navigation(){
  return(
    <div className="nav-scetion">
      <div className="nav-header">
        <h2>Keja Yangu</h2>
        <div className='nav-links'>
          <a href="">home</a>
          <a href="">houses</a>
          <a href="">bookmarks</a>
        </div>
        <div className="nav-img">
          <img src={navimg} alt="navigauion image" />
        </div>
        <div className="nav-text">
          <h3>Navigate from here to get anywhere you want</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quae facilis, natus doloremque corrupti atque minima blanditiis dolores in esse.</p>
        </div>
      </div>
    </div>
  )
}
export default Navigation