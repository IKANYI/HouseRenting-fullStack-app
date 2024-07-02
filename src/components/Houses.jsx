import "./Major.css";
import house from "../assets/hero.png";
function Houses(){
  return(
    <div className="houses-main">
      <div className="houses-container">
        <div className="house-img">
          <img src={house} alt="House image" />
        </div>
        <div className="house-text">
          <h3>Aberdare Forest House</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptate? Quo, odio. Neque vero, delectus temporibus blanditiis pariatur voluptatem non.</p>
          <h4>Ksh 100,000 per Month</h4>
          <p><a href="">rent now</a></p>
        </div>
      </div>
      <div className="houses-container">
        <div className="house-text">
          <h3>Aberdare Forest House</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptate? Quo, odio. Neque vero, delectus temporibus blanditiis pariatur voluptatem non.</p>
          <h4>Ksh 100,000 per Month</h4>
          <p><a href="">rent now</a></p>
        </div>
        <div className="house-img">
          <img src={house} alt="House image" />
        </div>
      </div>
      <div className="houses-container">
        <div className="house-img">
          <img src={house} alt="House image" />
        </div>
        <div className="house-text">
          <h3>Aberdare Forest House</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptate? Quo, odio. Neque vero, delectus temporibus blanditiis pariatur voluptatem non.</p>
          <h4>Ksh 100,000 per Month</h4>
          <p><a href="">rent now</a></p>
        </div>
      </div>
      <div className="houses-container">
        <div className="house-text">
          <h3>Aberdare Forest House</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptate? Quo, odio. Neque vero, delectus temporibus blanditiis pariatur voluptatem non.</p>
          <h4>Ksh 100,000 per Month</h4>
          <p><a href="">rent now</a></p>
        </div>
        <div className="house-img">
          <img src={house} alt="House image" />
        </div>
      </div>
    </div>
  )
}
export default Houses