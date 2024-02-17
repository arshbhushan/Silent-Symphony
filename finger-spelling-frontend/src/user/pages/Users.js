import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Users = () => {
    const {isLoading,error,sendRequest,clearError} = useHttpClient();
    const [LoadedUsers, setLoadedUsers] = useState();
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const ResponseData = await sendRequest('http://localhost:5555/api/users');

                setLoadedUsers(ResponseData.users);
            } catch (err) {
            }
        };
        fetchUsers();
    }, [sendRequest]);

    return (
        <>
        <ErrorModal error={error} onClear={clearError}/>
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
