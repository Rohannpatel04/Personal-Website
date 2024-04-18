import React from 'react';
import '../CSS/WelcomeMessage.css'; // Updated CSS file path
import { Link } from "react-router-dom";
import Me1 from '../Images/Welcome/Me1.jpeg'; 
import Me2 from '../Images/Welcome/Me2.jpeg'; 
import Me3 from '../Images/Welcome/Me3.jpeg'; 
import Me4 from '../Images/Welcome/Me4.jpeg'; 
import Baby from '../Images/Welcome/Baby.png'; 

const WelcomeMessage = () => {
  return (
    <React.Fragment>
      <div className='welcome-title'> {/* Updated class name */}
        About Me! 
      </div>
      <div className='welcome-container'> {/* Updated class name */}
        <div className='about-me-container'> {/* Updated class name */}
          <div className='welcome-text'> {/* Updated class name */}
            Hi, my name is Rohan, and I am a photography enthusiast! Photography has been a passion of mine since I was six years old, and I also used my dad's camera. This website stands as a place to showcase and share my photos. Although I have always said I disliked taking pictures of people, I have started to take more and more portraits. If you are interested in purchasing or scheduling a photoshoot please get in touch with me through the Contact Me page to schedule a time and place to capture your true beauty. 
          </div>
          <div className='baby-photo'> 
            <img src={Baby} alt="Baby" />
          </div>
        </div>
        <div className='unique-photos-of-me-container'> {/* Updated class name */}
          <div className="unique-image-container Me1"> {/* Updated class name */}
            <img src={Me1} alt="Me1" />
            <div className="unique-image-overlay">Taken by Yash</div> {/* Updated class name */}
          </div>
          <div className="unique-image-container Me2"> {/* Updated class name */}
            <img src={Me2} alt="Me2" />
            <div className="unique-image-overlay">Taken by Yash</div> {/* Updated class name */}
          </div>
          <div className="unique-image-container Me3"> {/* Updated class name */}
            <img src={Me3} alt="Me3" />
            <div className="unique-image-overlay">Taken by Bhavik</div> {/* Updated class name */}
          </div>
          <div className="unique-image-container Me4"> {/* Updated class name */}
            <img src={Me4} alt="Me4" />
            <div className="unique-image-overlay">Taken by Bhargav</div> {/* Updated class name */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WelcomeMessage;
