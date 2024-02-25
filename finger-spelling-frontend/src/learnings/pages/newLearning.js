import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import { 
   VALIDATOR_REQUIRE,
   VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './newLearning.css';



const NewLearning = () => {
  const auth=useContext(AuthContext);
  //used to manage multiple states like useState but in a better way.
  const{isLoading,error,sendRequest,clearError} = useHttpClient();
  const [formState, inputHandler] = 
  useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      image:{
        value:null, 
        isValid:false
      }
    },//add more like images, video,hints to remember here
    
    false
  );
  const navigate = useNavigate();

  const learningSubmitHandler =async event => {
    event.preventDefault();
    //sending  all the input data to the server
    try {  
      const formData = new FormData();
      formData.append('title', formState.inputs.title.value);
      formData.append('description', formState.inputs.description.value);
      formData.append('creator',auth.userId);
      formData.append('image', formState.inputs.image.value);
    
      await  sendRequest('http://localhost:5555/api/learnings','POST',formData,{
        Authorization: 'Bearer ' + auth.token
      });
        navigate('/');
      } catch (err) {}
  };

  return (
    <>
    <ErrorModal error={error}onClear={clearError} />
    <form className="place-form" onSubmit={learningSubmitHandler}>
    {isLoading && <LoadingSpinner asOverlay/>}
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters). "
        onInput={inputHandler}
      />
      {/* <Input
        id="image"
        element="textarea"
        label="Image"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid image URL (at least 5 characters). "
        onInput={inputHandler}
      /> */}
      <ImageUpload 
      id="image" 
      onInput={inputHandler} 
      errorText="Please provide an image"
      />

      <Button type="submit" disabled={!formState.isValid}>
        ADD LEARNING
      </Button>
    </form>
  </>
  );
};

export default NewLearning;
