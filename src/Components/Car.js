import React from 'react';
import '../CSS/Car.css'; // Assuming the new CSS file name is CarStyles.css
import { Link } from "react-router-dom";
import one from '../Images/Car/1.jpg'; 
import two from '../Images/Car/2.jpg'; 
import three from '../Images/Car/3.jpg'; 
import four from '../Images/Car/4.jpg'; 

const Car = () => {

  return (
    <div className='main-car'>
      <div className='title-car'>
        Car
      </div>

      <div className='photo-container-car'> 
        <div className="image-container-car">
            <img src={one} alt="one" />
            <div className="image-overlay-car">Jigish</div>
        </div>
        <div className="image-container-car">
            <img src={two} alt="two" />
            <div className="image-overlay-car">Jigish</div>
        </div>
        <div className="image-container-car">
            <img src={three} alt="three" />
            <div className="image-overlay-car">Divyesh</div>
        </div>
        <div className="image-container-car">
            <img src={four} alt="four" />
            <div className="image-overlay-car">New York</div>
        </div>
      </div>
   </div>
  );
}

export default Car;
