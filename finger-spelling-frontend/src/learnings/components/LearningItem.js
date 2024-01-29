import React, {useState} from "react";
import './LearningItem.css';
import Card from "../../shared/components/UIElements/Card";
import Button from '../../shared/components/FormElements/Button';
import Modal from "../../shared/components/UIElements/Modal";


const LearningItem=props=>{
    const [ShowVideo,setShowVideo]=useState(false);

    const openVideoHandler=()=>setShowVideo(true);
    const closeVideoHandler=()=>setShowVideo(false);

    return (
    <>
        <Modal
        show={ShowVideo} 
        onCancel={closeVideoHandler} 
        header={props.videoUrl} 
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeVideoHandler}>CLOSE</Button>}
        
        >
            <div className="map-container"></div>
            <h2>The Video</h2>
        </Modal>
    <li className="place-item">
        <Card className="place-item__content">
        <div className="place-item__image">
            <img src={props.image} alt={props.title}/>
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h2>{props.mnemonicTips}</h2>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
            {/* <Button >Watch Now!</Button>   */}
            <Button onClick={openVideoHandler} to={`/learnings/${props.videoUrl}`}>View Video Tutorial</Button>
            {/* here I'll add the ML Model for users to try */}
           {/* <Button to={}>Try Now!</Button> */} 
            <Button>Try Now!</Button>  
        </div>
        </Card>
    </li>
    </>
    )
};

export default LearningItem;