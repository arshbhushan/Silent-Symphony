import React, { useEffect, useState } from 'react';
//import React, { useEffect, useState, useContext } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
//import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import LearningList from '../../learnings/components/LearningList';
import './FingerSpelling.css'; // Optional: Add styles for this page

const GestureRecognition = () => {
  //const auth = useContext(AuthContext);
  

  return (
    <>

      <div className="finger-spelling">
        <h1>Gesture Learning</h1>

      </div>
    </>
  );
};

export default GestureRecognition;