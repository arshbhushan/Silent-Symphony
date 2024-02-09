import React, {useState , useContext} from "react";
import './LearningItem.css';
import Card from "../../shared/components/UIElements/Card";
import Button from '../../shared/components/FormElements/Button';
import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";

const LearningItem= props => {
    const auth=useContext(AuthContext);
    const [ShowVideo,setShowVideo]=useState(false);
    const [showConfirmModal,setShowConfirmModal]=useState(false);
    const openVideoHandler=()=>setShowVideo(true);
    const closeVideoHandler=()=>setShowVideo(false);

    const showDeleteWarningHandler=()=>{
        setShowConfirmModal(true);
    };
    const cancleDeleteHandler=()=>{
        setShowConfirmModal(false);
    }
    const confirmDeleteHandler=()=>{
        setShowConfirmModal(false);
        console.log('Deleting...');
    }

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
        <Modal 
        show={showConfirmModal}
        onCancel={cancleDeleteHandler}
        header="Are you sure? " 
        footerClass="place-item__modal-actions" 
        footer={
            <>
            <Button inverse onClick={cancleDeleteHandler}>CANCEL</Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
            </>
        }>
            <p>Are you sure you wish to delete this lesson?</p>
        </Modal>
    <li className="place-item" >
        <Card className="place-item__content">
        <div className="place-item__image">
            <img src={props.image} alt={props.title}/>
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.mnemonicTips}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
            {/* <Button >Watch Now!</Button>   */}
            <Button onClick={openVideoHandler} to={`/learnings/${props.videoUrl}`}>View Video Tutorial</Button>
            {/* here I'll add the ML Model for users to try */}
           {/* <Button to={}>Try Now!</Button> */} 
           {auth.isLoggedIn && (<Button to={`/learnings/${props.id}`}>EDIT</Button> ) }
           {auth.isLoggedIn && (<Button>Try Now!</Button>)}
           {auth.isLoggedIn && (<Button danger onClick={showDeleteWarningHandler}>DELETE</Button>) }
             
        </div>
        </Card>
    </li>
    </>
    )
};

export default LearningItem;