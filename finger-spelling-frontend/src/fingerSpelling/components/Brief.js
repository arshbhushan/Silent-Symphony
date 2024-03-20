import React from "react";
import './Brief.css'

const Brief=()=>{


    return (
        <div  className="brief-container">
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
            <h1>Brief</h1>
            <p>Welcome to our page. We will be teaching how to communicate with signs.
              We are a group of students who have been passionate about sign language since childhood and decided to make it.
            </p>
          </div>
        </div>
    );
};

export default Brief;
