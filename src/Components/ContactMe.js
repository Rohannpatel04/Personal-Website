import React from 'react'; // Import React once
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import axios from "axios";
import { useState } from 'react'; // Import useState separately

const ContactMe = () => {
  const formId = '8C33YJnyZ';
  const fromSparkUrl = `https://submit-form.com/${formId}`;

  const initialFormState = { 
    email: ' ',
    name: ' ',
    message: ' ',
  };

  const [formState, setFormState] = useState(initialFormState); // Use useState hook to manage state

  const submitForm = async (event) => {
    event.preventDefault(); 
    await postSubmission();
  }; 

  const postSubmission = async () => { 
    const payload = { 
      message: 'Test formspark submission', 
    };

    try {
      const result = await axios.post(fromSparkUrl, payload);
      console.log(result);
    } catch(error) { 
      console.log(error); 
    }
  };

  return (
    <div className='main-container'>
       <div className='inner-container'>
         <h1 className='title'>
           <BsFillRocketTakeoffFill />
           <span>Contact Me</span>
         </h1>
         <form onSubmit={submitForm}> 
           <button className='submit-button'>Submit</button>
         </form>
        </div>
    </div>
   );
 };

export default ContactMe;
