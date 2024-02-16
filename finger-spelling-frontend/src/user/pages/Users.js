import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Users = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [LoadedUsers, setLoadedUsers] = useState();
    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:5555/api/users');

                const ResponseData = await response.json();
                if (!response.ok) {
                    throw new Error(ResponseData.message);
                }
                setLoadedUsers(ResponseData.users);
                setIsLoading(false);

            } catch (err) {
                setError(err.message);
            }
            setIsLoading(false);
        };
        sendRequest();
    }, []);
    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
        <ErrorModal error={error} onClear={errorHandler}/>
        {isLoading &&(
            <div className="center">
                <LoadingSpinner/>
            </div>
        )}
            {!isLoading && LoadedUsers && <UsersList items={LoadedUsers}/>}
        </>
    )
};

export default Users;
