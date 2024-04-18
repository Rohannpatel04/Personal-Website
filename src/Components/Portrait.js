import React from 'react';
import '../CSS/Portrait.css';
import { Link } from "react-router-dom";
import one from '../Images/Portrait/1.jpg'; 
import two from '../Images/Portrait/2.jpg'; 
import three from '../Images/Portrait/3.jpg'; 
import four from '../Images/Portrait/4.jpg'; 
import five from '../Images/Portrait/5.jpg'; 
import six from '../Images/Portrait/6.jpg'; 
import seven from '../Images/Portrait/7.jpg'; 
import eight from '../Images/Portrait/8.jpg'; 
import nine from '../Images/Portrait/9.jpg'; 
import ten from '../Images/Portrait/10.jpg'; 
import oneone from '../Images/Portrait/11.jpg'; 
import onetwo from '../Images/Portrait/12.jpg'; 
import onethree from '../Images/Portrait/13.jpg'; 
import onefour from '../Images/Portrait/14.jpg'; 
import onefive from '../Images/Portrait/15.jpg'; 
import onesix from '../Images/Portrait/16.jpg'; 
import oneseven from '../Images/Portrait/17.jpg'; 
import oneeight from '../Images/Portrait/18.jpg'; 
import onenine from '../Images/Portrait/19.jpg'; 
import twozero from '../Images/Portrait/20.jpg'; 
import twoone from '../Images/Portrait/21.png'; 
import twotwo from '../Images/Portrait/22.jpg'; 
import twothree from '../Images/Portrait/23.jpg'; 
import twofour from '../Images/Portrait/24.jpg'; 

const Portrait = () => {

  return (
    <div className='main-portrait'>
      <div className='title-portrait'>
        Portrait
      </div>

      <div className='photo-container-portrait'> 
        <div className="image-container-portrait">
            <img src={one} alt="one" />
            <div className="image-overlay-portrait">Jai</div>
        </div>
        <div className="image-container-portrait">
            <img src={two} alt="two" />
            <div className="image-overlay-portrait">Yogin</div>
        </div>
        <div className="image-container-portrait">
            <img src={three} alt="three" />
            <div className="image-overlay-portrait">Vandan</div>
        </div>
        <div className="image-container-portrait">
            <img src={four} alt="four" />
            <div className="image-overlay-portrait">Soham</div>
        </div>
        <div className="image-container-portrait">
            <img src={five} alt="five" />
            <div className="image-overlay-portrait">Vandan</div>
        </div>
        <div className="image-container-portrait">
            <img src={six} alt="six" />
            <div className="image-overlay-portrait">Ba</div>
        </div>
        <div className="image-container-portrait">
            <img src={seven} alt="seven" />
            <div className="image-overlay-portrait">Bhavik</div>
        </div>
        <div className="image-container-portrait">
            <img src={eight} alt="eight" />
            <div className="image-overlay-portrait">Prapti</div>
        </div>
        <div className="image-container-portrait">
            <img src={nine} alt="nine" />
            <div className="image-overlay-portrait">Kishan</div>
        </div>
        <div className="image-container-portrait">
            <img src={ten} alt="ten" />
            <div className="image-overlay-portrait">Mom</div>
        </div>
        <div className="image-container-portrait">
            <img src={oneone} alt="oneone" />
            <div className="image-overlay-portrait">Virak</div>
        </div>
        <div className="image-container-portrait">
            <img src={onetwo} alt="onetwo" />
            <div className="image-overlay-portrait">Virak</div>
        </div>
        <div className="image-container-portrait">
            <img src={onethree} alt="onethree" />
            <div className="image-overlay-portrait">Jacob</div>
        </div>
        <div className="image-container-portrait">
            <img src={onefour} alt="onefour" />
            <div className="image-overlay-portrait">Yash</div>
        </div>
        <div className="image-container-portrait">
            <img src={onefive} alt="onefive" />
            <div className="image-overlay-portrait">Virak</div>
        </div>
        <div className="image-container-portrait">
            <img src={onesix} alt="onesix" />
            <div className="image-overlay-portrait">Jacob</div>
        </div>
        <div className="image-container-portrait">
            <img src={oneseven} alt="oneseven" />
            <div className="image-overlay-portrait">Jay</div>
        </div>
        <div className="image-container-portrait">
            <img src={oneeight} alt="oneeight" />
            <div className="image-overlay-portrait">Niki</div>
        </div>
        <div className="image-container-portrait">
            <img src={onenine} alt="onenine" />
            <div className="image-overlay-portrait">Akshay</div>
        </div>
        <div className="image-container-portrait">
            <img src={twozero} alt="twozero" />
            <div className="image-overlay-portrait">Oliver</div>
        </div>
        <div className="image-container-portrait">
            <img src={twoone} alt="twoone" />
            <div className="image-overlay-portrait">Ravi</div>
        </div>
        <div className="image-container-portrait">
            <img src={twotwo} alt="twotwo" />
            <div className="image-overlay-portrait">Yogin</div>
        </div>
        <div className="image-container-portrait">
            <img src={twothree} alt="twothree" />
            <div className="image-overlay-portrait">Yash</div>
        </div>
        <div className="image-container-portrait">
            <img src={twofour} alt="twofour" />
            <div className="image-overlay-portrait">Kishan</div>
        </div>
      </div>
   </div>
  );
}

export default Portrait;
