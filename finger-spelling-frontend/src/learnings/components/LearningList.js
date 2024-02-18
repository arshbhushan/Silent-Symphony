import React from "react";
import './LearningList.css';
import Card from "../../shared/components/UIElements/Card";
import LearningItem from'./LearningItem';
import Button from "../../shared/components/FormElements/Button";
const LearningList=props=>{

    if(props.items.length===0){
        return( <div className="place-list center">
            <Card>
                <h2>No learnings yet, Start learning?</h2>
                <Button to="/learnings/new"> Start Learning</Button>
            </Card>

        </div>
        );
    }

    return<ul className="place-list">
        {props.items.map(learning=> 
        <LearningItem 
        key={learning.id} 
        id={learning.id} 
        image={learning.image}
        title={learning.title}
        description={learning.description}
        videoUrl={learning.videoUrl}
        mnemonicTips={learning.mnemonicTips}
        learner={learning.learner}
        onDelete={props.onDeleteLearning}
        />)}
    </ul>

};

export default LearningList;