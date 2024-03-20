import React from "react";
import './Brief.css'

const Brief = () => {


  return (
    <div className="brief-container">
      <div className="brief-left-side">
        <div className="rectangle-container">
          <div className="rectangle rectangle1">
            <div className="circle"></div>
            <div className="front">
              <img src="/logo192.png" alt="Image 1" />
            </div>
            <div className="back">
              <p>Text for Rectangle 1</p>
            </div>
          </div>
          <div className="rectangle rectangle2">
            <div className="circle-co"></div>
            <div className="front">
              <img src="/logo192.png" alt="Image 2" />
            </div>
            <div className="back">
              <p>Text for Rectangle 2</p>
            </div>
          </div>
          <div className="rectangle rectangle3">
            <div className="circle-co"></div>
            <div className="front">
              <img src="/logo192.png" alt="Image 3" />
            </div>
            <div className="back">
              <p>Text for Rectangle 3</p>
            </div>
          </div>
          <div className="rectangle rectangle4">
            <div className="circle"></div>
            <div className="front">
              <img src="/logo192.png" alt="Image 4" />
            </div>
            <div className="back">
              <p>Text for Rectangle 4</p>
            </div>
          </div>
        </div>
      </div>

      <div className="brief-right-side">
        <div className="brief-heading">
          <h1>Help the Deaf,
            Help the humanity</h1>
        </div>
        <div className="brief-content">
          <p>Silent Symphony is your ultimate guide to learning sign language and connecting with the deaf and mute community.
            Our platform provides intuitive lessons and resources to empower you to communicate effortlessly through the universal language of signs.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Brief;
