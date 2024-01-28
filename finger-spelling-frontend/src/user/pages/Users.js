import React from "react";

import UsersList from "../components/UsersList";

const Users=()=>{
    const USERS=[{
        id:'u1',
        name:'Arsh Bhushan',
        image:'https://clipart-library.com/data_images/6103.png',
        learnings:3}];
return <UsersList items={USERS}/>;
};

export default Users;
