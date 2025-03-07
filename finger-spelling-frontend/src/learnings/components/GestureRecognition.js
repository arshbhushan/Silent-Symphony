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
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedLearnings, setLoadedLearnings] = useState([]);

  // Fetch all learnings (from all users)
  useEffect(() => {
    const fetchLearnings = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5555/api/learnings'
        );
        setLoadedLearnings(responseData.learnings);
      } catch (err) {
        console.error("Error fetching learnings:", err);
      }
    };

    fetchLearnings();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="finger-spelling">
        <h1>Gesture Recognition</h1> 
        {!isLoading && loadedLearnings && (
          <LearningList items={loadedLearnings} />
        )}
      </div>
    </>
  );
};

export default GestureRecognition;