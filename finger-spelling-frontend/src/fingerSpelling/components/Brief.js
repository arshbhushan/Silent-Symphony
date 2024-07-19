import React from "react";
import './Brief.css'
import { Link } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import NewCard from "../../shared/components/UIElements/NewCard.jsx";
const Brief = () => {


  return (
    <>
    <div className="brief-container">
      <div className="brief-left-side">
        <div className="rectangle-container">
          <div className="rectangle rectangle1">
            <div className="circle"></div>
            <div className="front">
              <img src="/rectangle1.jpg" alt="Image 1" />
            </div>
            <div className="back">
              <p><b>Sign Language Lessons:</b> Interactive and intuitive lessons to help users learn sign language,
                 catering to various proficiency levels from beginners to advanced.</p>
            </div>
          </div>
          <div className="rectangle rectangle2">
            <div className="circle-co"></div>
            <div className="front">
              <img src="/rectangle2.jpg" alt="Image 2" />
            </div>
            <div className="back">
              <p><b>Community Engagement:</b> A platform for connecting with the deaf and mute community,
                 offering forums, discussion groups, and opportunities to practice and communicate.</p>
            </div>
          </div>
          <div className="rectangle rectangle3">
            <div className="circle-co"></div>
            <div className="front">
              <img src="/rectangle3.jpg" alt="Image 3" />
            </div>
            <div className="back">
              <p><b>Real-time Practice Tools:</b> Tools and applications, such as a virtual interpreter or real-time feedback system,
                 to practice and refine sign language skills in various real-world scenarios.</p>
            </div>
          </div>
          <div className="rectangle rectangle4">
            <div className="circle"></div>
            <div className="front">
              <img src="/rectangle4_1.jpg" alt="Image 4" />
            </div>
            <div className="back">
              <p>AI-Powered Sign Language Tutor: Leverage trained machine learning models to provide personalized sign 
                language instruction, enabling users to learn and practice sign language with the guidance of an AI tutor.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="brief-right-side">
      <div className="brief-heading">
  <h1 className="custom-heading">Help the Deaf, Help the humanity</h1>
</div>

        <div className="brief-content">
          <p>Silent Symphony is your ultimate guide to learning sign language and connecting with the deaf and mute community.
            Our platform provides intuitive lessons and resources to empower you to communicate effortlessly through the universal language of signs.
          </p>
        </div>
        <div  className="button-container">
        <Link to="/auth">
                <Button>Join In!</Button>
              </Link>
              <div className="underline-text">
        <span>Interested? Click here to Register</span>
      </div>
        </div>

      </div>
    </div>
      <div>
        
      <NewCard/>
      </div>
      </>
  );
};

export default Brief;
