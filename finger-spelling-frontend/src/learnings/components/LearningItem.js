import React, { useState, useContext } from "react";
import './LearningItem.css';
import Card from "../../shared/components/UIElements/Card";
import Button from '../../shared/components/FormElements/Button';
import Modal from "../../shared/components/UIElements/Modal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

const LearningItem = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const [showVideo, setShowVideo] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    
    const openVideoHandler = () => setShowVideo(true);
    const closeVideoHandler = () => setShowVideo(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler = async () => {
        setShowConfirmModal(false);
        try {
            await sendRequest(
                `http://localhost:5555/api/learnings/${props.id}`,
                'DELETE',
                null,
                {
                    Authorization: 'Bearer ' + auth.token
                }
            );
            props.onDelete(props.id);
        } catch (err) {}
    };

    return (
        <>
            <ErrorModal error={error} onClear={clearError} />
            <Modal
                show={showVideo}
                onCancel={closeVideoHandler}
                header={props.title}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeVideoHandler}>CLOSE</Button>}
            >
                <div className="video-container">
                    <iframe
                        width="100%"
                        height="400"
                        src={props.videoUrl}
                        title="Video Tutorial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
                footerClass="place-item__modal-actions"
                footer={
                    <>
                        <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
                    </>
                }
            >
                <p>Are you sure you wish to delete this lesson?</p>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    {isLoading && <LoadingSpinner asOverlay />}
                    <div className="place-item__image">
                        <img src={`http://localhost:5555/${props.image}`} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.mnemonicTips}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button onClick={openVideoHandler}>View Video Tutorial</Button>
                        {auth.isLoggedIn && (<Button to={`/learnings/${props.id}`}>EDIT</Button>)}
                        {auth.isLoggedIn && (<Button>Try Now!</Button>)}
                        {auth.isLoggedIn && (<Button danger onClick={showDeleteWarningHandler}>DELETE</Button>)}
                    </div>
                </Card>
            </li>
        </>
    );
};

export default LearningItem;