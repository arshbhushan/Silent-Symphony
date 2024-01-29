import React from "react";
import './LearningList.css';
import Card from "../../shared/components/UIElements/Card";
import LearningItem from'./LearningItem';
const LearningList=props=>{

    if(props.items.length===0){
        return( <div className="place-list center">
            <Card>
                <h2>No learnings yet, Start learning?</h2>
                <button> Start Learning</button>
            </Card>

        </div>
        );
    }

    return<ul className="place-list">
        {props.items.map(learning=> 
        <LearningItem 
        key={learning.id} 
        id={learning.id} 
        image={learning.imageUrl}
        title={learning.title}
        description={learning.description}
        videoUrl={learning.videoUrl}
        mnemonicTips={learning.mnemonicTips}
        learner={learning.learner}
        />)}
    </ul>

};

export default LearningList;