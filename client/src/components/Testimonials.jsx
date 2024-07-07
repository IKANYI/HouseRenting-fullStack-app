import joyceimg from '../assets/joyce.jpg';
import johnimg from '../assets/john.jpg';
import janeimg from '../assets/jane.jpg';
import zenimg from '../assets/Zen.jpg';
import annimg from '../assets/Ann.jpg';
import './Testimonials.css';
function Testimonials(){
  return(
    <div>
      <h2>Testimonials</h2>
       <div className="main-div">
      <div className="contents">
        <img src={joyceimg} alt="" />
        <h3>Maria Cheng</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dicta!</p>
      </div>
      <div className="contents-alt">
        <img src={johnimg} alt="" />
        <h3>John Were</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dicta!</p>
      </div>
      <div className="contents">
        <img src={janeimg} alt="" />
        <h3>Jennifer White</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dicta!</p>
      </div>
      <div className="contents-alt">
        <img src={zenimg} alt="" />
        <h3>Candac Owen</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dicta!</p>
      </div>
      <div className="contents">
        <img src={annimg} alt="" />
        <h3>Annita Young</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dicta!</p>
      </div>
    </div>
    </div>
   
  )
}
export default Testimonials