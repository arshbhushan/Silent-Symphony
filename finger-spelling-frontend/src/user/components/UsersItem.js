import React from "react";
import './UsersList.css';
import { Link } from 'react-router-dom';
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";

const UsersItem = props => {

    return (
        <li className="user-item">


            <Card className="user-item__content">
                <Link to={`/${props.id}/learnings`}>
                    <div className="user-item__image">
                        <Avatar image={`http://localhost:5555/${props.image}`} alt={props.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.learningCount}{props.learningCount === 1 ? ' Learning' : ' Learnings'}</h3>

                    </div>
                </Link>
            </Card>


        </li>
    )
};

export default UsersItem; 