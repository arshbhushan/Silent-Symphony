import React, {useState , useContext} from "react";
import './LearningItem.css';
import Card from "../../shared/components/UIElements/Card";
import Button from '../../shared/components/FormElements/Button';
import Modal from "../../shared/components/UIElements/Modal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";


const LearningItem= props => {
    const {isLoading,error,sendRequest,clearError} = useHttpClient();
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
    const confirmDeleteHandler= async ()=>{
        setShowConfirmModal(false);
        try {
        await sendRequest(`http://localhost:5555/api/learnings/${props.id}`,
        'DELETE',
        null,
        {
            Authorization:'Bearer ' +auth.token
        }
        );
        props.onDelete(props.id);   
        } catch (err) {}
    };

    return (
    <>
    <ErrorModal error={error} onClear={clearError}/>
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
            {isLoading && <LoadingSpinner asOverlay/>}
        <div className="place-item__image">
            <img src={`http://localhost:5555/${props.image}`} alt={props.title}/>
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
           {/* {auth.userId===props.creatorId && (<Button to={`/learnings/${props.id}`}>EDIT</Button> ) } */}
           {auth.isLoggedIn && (<Button>Try Now!</Button>)}
           {auth.isLoggedIn && (<Button danger onClick={showDeleteWarningHandler}>DELETE</Button>) }
           {/* auth.userId===props.creatorId  this is written if only the creator could edit or delete it*/}
        </div>
        </Card>
    </li>
    </>
    )
};

export default LearningItem;