import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './HouseList.css'; 

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch("http://localhost:3002/houses/product/houses");
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.log(error);
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className="house-list">
      {houses.map((house) => (
        <div key={house.id} className="house-item">
          <div className="house-img">
            <img src={house.image} alt={house.title} />
          </div>
          <div className="house-details">
            <h3>{house.title}</h3>
            <p>{house.description}</p>
            <h4>Ksh {house.price} per Month</h4>
            <Link to="/payment" className="rent-button">Rent Now</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseList;
