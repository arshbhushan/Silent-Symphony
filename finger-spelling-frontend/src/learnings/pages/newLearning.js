import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { 
   VALIDATOR_REQUIRE,
   VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './newLearning.css';



const NewLearning = () => {
  //used to manage multiple states like useState but in a better way.
  const [formState, InputHandler] = 
  useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },//add more like images, video,hints to remember here
    false
  );



  const learningSubmitHandler = event => {
    event.preventDefault();
    //sending  all the input data to the server
    console.log(formState.inputs);
  }

  return (
    <form className="place-form" onSubmit={learningSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={InputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters). "
        onInput={InputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD LEARNING
      </Button>
    </form>
  );
};

export default NewLearning;
