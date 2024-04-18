import React from 'react';
import '../CSS/Landscape.css';
import { Link } from "react-router-dom";
import one from '../Images/Landscape/1.jpg'; 
import two from '../Images/Landscape/2.jpg'; 
import three from '../Images/Landscape/3.jpg'; 
import four from '../Images/Landscape/4.jpg'; 
import five from '../Images/Landscape/5.jpg'; 
import six from '../Images/Landscape/6.jpg'; 
import seven from '../Images/Landscape/7.jpg'; 
import eight from '../Images/Landscape/8.jpg'; 
import nine from '../Images/Landscape/9.jpg'; 
import ten from '../Images/Landscape/10.jpg'; 
import oneone from '../Images/Landscape/11.jpg'; 
import onetwo from '../Images/Landscape/12.jpg'; 

const Landscape = () => {

  return (
    <div className='main-landscape'>
      <div className='title-landscape'>
        Landscape
      </div>

      <div className='photo-container-landscape'> 
        <div className="image-container-landscape one">
            <img src={one} alt="one" />
            <div className="image-overlay-landscape">Big Island</div>
        </div>
        <div className="image-container-landscape two">
            <img src={two} alt="two" />
            <div className="image-overlay-landscape">Oregon Coast</div>
        </div>
        <div className="image-container-landscape three">
            <img src={three} alt="three" />
            <div className="image-overlay-landscape">Oregon Coast</div>
        </div>
        <div className="image-container-landscape four">
            <img src={four} alt="four" />
            <div className="image-overlay-landscape">Dubai</div>
        </div>
        <div className="image-container-landscape five">
            <img src={five} alt="five" />
            <div className="image-overlay-landscape">Dubai</div>
        </div>
        <div className="image-container-landscape six">
            <img src={six} alt="six" />
            <div className="image-overlay-landscape">Yosemite</div>
        </div>
        <div className="image-container-landscape seven">
            <img src={seven} alt="seven" />
            <div className="image-overlay-landscape">Yellowstone</div>
        </div>
        <div className="image-container-landscape eight">
            <img src={eight} alt="eight" />
            <div className="image-overlay-landscape">Olympic</div>
        </div>
        <div className="image-container-landscape nine">
            <img src={nine} alt="nine" />
            <div className="image-overlay-landscape">Yellowstone</div>
        </div>
        <div className="image-container-landscape ten">
            <img src={ten} alt="ten" />
            <div className="image-overlay-landscape">Seattle</div>
        </div>
        <div className="image-container-landscape oneone">
            <img src={oneone} alt="oneone" />
            <div className="image-overlay-landscape">Seattle</div>
        </div>
        <div className="image-container-landscape onetwo">
            <img src={onetwo} alt="onetwo" />
            <div className="image-overlay-landscape">Seattle</div>
        </div>

      </div>
      
   </div>
  );
}

export default Landscape;
