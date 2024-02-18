import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/";
import LearningList from "../components/LearningList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";


const UserLearnings = () => {
    const [loadedLearnings, setLoadedLearnings] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const userId = useParams().userId;
    useEffect(() => {
        const fetchLearnings=async()=>{
        try {
            const responseData= await sendRequest(
                `http://localhost:5555/api/learnings/user/${userId}`);
            setLoadedLearnings(responseData.learnings);
        } catch (err) {};
    }
        fetchLearnings();
    }, [sendRequest,userId]);
    const learningDeletedHandler=deletedLearningId=>{
        setLoadedLearnings(prevLearnings=>
            prevLearnings.filter(learning=>learning.id!==deletedLearningId)
            );

    }
    return( 
      <>
      <ErrorModal error={error} onClear={clearError}/>
      {isLoading && 
      (<div className="center">
        <LoadingSpinner/>
        </div>
        )}
    {!isLoading &&loadedLearnings && <LearningList items={loadedLearnings} onDeleteLearning={learningDeletedHandler} />}
    </>
    )

};

export default UserLearnings;