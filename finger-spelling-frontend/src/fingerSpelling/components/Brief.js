import React, { useContext, useState, useEffect } from "react";
import './Brief.css';
import { Link } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import NewCard from "../../shared/components/UIElements/NewCard.jsx";
import { AuthContext } from '../../shared/context/auth-context';

const Brief = () => {
  const auth = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backText = isMobile
    ? [
        { title: "Sign Language Lessons", text: "Interactive lessons for learning sign language, tailored for all skill levels." },
        { title: "Community Engagement", text: "A platform to connect with the deaf and mute community, enabling real-time communication and sign language practice." },
        { title: "Real-time Practice Tools", text: "Tools like a virtual interpreter and real-time feedback for practicing sign language in real-world scenarios." },
        { title: "AI-Powered Tutor", text: "Trained ML models offer personalized sign language instruction with an AI tutor." }
      ]
    : [
        { title: "Sign Language Lessons", text: "Interactive and intuitive lessons to help users learn sign language, catering to various proficiency levels from beginners to advanced." },
        { title: "Community Engagement", text: "A platform for connecting with the deaf and mute community, offering real-time communication and opportunities to practice sign language." },
        { title: "Real-time Practice Tools", text: "Tools and applications, such as a virtual interpreter or real-time feedback system, to practice and refine sign language skills in various real-world scenarios." },
        { title: "AI-Powered Tutor", text: "Leverage trained ML models to provide personalized sign language instruction, enabling users to learn and practice sign language with the guidance of an AI tutor." }
      ];

  return (
    <>
      <div className="brief-containerr" id="brief">
        <div className="brief-container">
          <div className="brief-left-side">
            <div className="rectangle-container">
              {backText.map((item, index) => (
                <div key={index} className={`rectangle rectangle${index + 1}`}>
                  <div className="circle"></div>
                  <div className="front">
                    <img src={`/rectangle${index + 1}.jpg`} alt={`Image ${index + 1}`} />
                  </div>
                  <div className="back">
                    <p><b>{item.title}:</b> {item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="brief-right-side">
            <div className="brief-heading">
              <h1 className="custom-heading">Help the Deaf, Help the Humanity</h1>
            </div>
            <div className="brief-content">
              <p>
                Silent Symphony is your ultimate guide to learning sign language and connecting with the deaf and mute community.
                Our platform provides intuitive lessons and resources to empower you to communicate effortlessly through the universal language of signs.
              </p>
            </div>
            <div className="button-container">
              {!auth.isLoggedIn && (
                <>
                  <Link to="/auth?mode=signup">
                    <Button>Join In!</Button>
                  </Link>
                  <div className="underline-text">
                    <span>Interested? Click here to Register</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="features">
        <NewCard />
      </div>
    </>
  );
};

export default Brief;
