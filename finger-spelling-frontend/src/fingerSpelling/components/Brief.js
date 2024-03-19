import React from "react";
import './Brief.css'

const Brief=()=>{


    return (
        <div  className="brief-container">
          <div className="brief-left-side">
            <div className="rectangle-container">
              <div className="rectangle rectangle1">
                <div className="circle"></div>
              </div>
              <div className="rectangle rectangle2">
                <div className="circle-"></div>
              </div>
              <div className="rectangle rectangle3">
                <div className="circle"></div>
              </div>
              <div className="rectangle rectangle4">
                <div className="circle"></div>
              </div>
            </div>
          </div>
    
          <div className="brief-right-side">
            <h1>Brief</h1>
            <p>welcome to our page. We will be teaching how to communicate with signs.
              we are  a group of students who have been passionate about   sign language since childhood and decided to make it.
               
            </p>
          </div>
        </div>
    );
    };
    
export default Brief;
