import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context.js";
import './PlaceForm.css';

const UpdateLearning = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedLearning, setLoadedLearning] = useState();
    const LearningId = useParams().learningId;

    const [formState, InputHandler, setFormData] = useForm({
        title: {
            value: '',
            placeholder: "Title",
            isValid: false,
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchLearning = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5555/api/learnings/${LearningId}`);
                setLoadedLearning(responseData.learnings);
                //console.log("Response Data:", responseData);

                setFormData({
                    title: {
                        value: responseData.learnings.title,
                        placeholder: "Title",
                        isValid: true,
                    },
                    description: {
                        value: responseData.learnings.description,
                        isValid: true
                    }
                }, true);
            } catch (err) {
                console.error("Error fetching learning:", err);
            }
        };
        fetchLearning();
    }, [sendRequest, LearningId, setFormData]);

    const LearningUpdateSubmitHandler = async event => {
        event.preventDefault();
        try {
            await sendRequest(
                `http://localhost:5555/api/learnings/${LearningId}`,
                'PATCH',
                JSON.stringify({
                    title: formState.inputs.title.value,
                    description: formState.inputs.description.value,
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                }
            );
            // Redirect to the specific learning page after successful update
            navigate(`/${auth.userId}/learnings/${LearningId}`);
        } catch (err) {
            console.error("Error updating learning:", err);
        }
    };

    if (isLoading) {
        return (
            <div className="center">
                <LoadingSpinner />
            </div>
        );
    }

    if (!loadedLearning && !error) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find learning</h2>
                </Card>
            </div>
        );
    }

    return (
        <>
            <ErrorModal error={error} onClear={clearError} />
            {!isLoading && loadedLearning && (
                <form className="place-form" onSubmit={LearningUpdateSubmitHandler}>
                    <Input
                        id="title"
                        element="input"
                        type="text"
                        label="Title"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid title."
                        onInput={InputHandler}
                        initialValue={loadedLearning.title}
                        initialValid={true}
                    />
                    <Input
                        id="description"
                        element="textarea"
                        label="Description"
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        errorText="Please enter a valid description (min. 5 characters)."
                        onInput={InputHandler}
                        initialValue={loadedLearning.description}
                        initialValid={true}
                    />
                    <Button type="submit" disabled={!formState.isValid}>
                        Update Learning
                    </Button>
                </form>
            )}
        </>
    );
};

export default UpdateLearning;