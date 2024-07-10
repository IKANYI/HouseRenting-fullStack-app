import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import './Header.css';
import { Link } from "react-router-dom";


const SocialInfo = ({ icon, label }) => {
  return (
    <div className="header-social-top">
      <div className="header-social-icon-wrapper">
        {icon}
      </div>
      <p>{label}</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className="main">
      <div className="header-top">
      <h1 className="logo">Keja Yangu</h1>
      <div className="header-socials"> 
        <SocialInfo icon={<MdEmail />} label="info@kejayangu.com" />
        <SocialInfo icon={<FaLocationDot />} label="Nairobi City" /> 
        <SocialInfo icon={<FaPhoneAlt />} label="+254 790 058 715" /> 
      </div>
      
    </div>
    <div className="header-nav">
        <nav>
          <ol className="header-nav-list">
            <li className="header-nav-item"> <Link to="/">Home</Link> </li>
            <li className="header-nav-item"><Link to="/house">Houses</Link></li>
            <li className="header-nav-item"><Link to="/addproduct">Rent Yours Space</Link></li>
            <li className="header-nav-item"><Link to="/login">Login</Link></li>
            <li className="header-nav-item"><Link to="/signup">Signup</Link></li>
          </ol>
        </nav>
      </div>
    </div>
    
  );
};

export default Header;
