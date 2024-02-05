import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH } from "../../shared/util/validators";


const Dummy_Learnings=[
    {
    id:'p1',
    title: 'Programming 101',
    description: `This is a basic course in programming. It covers the basics of programming such`,
    imageUrl:'https://clipart-library.com/data_images/6103.png',
    videoUrl:'https://www.youtube.com/watch?v=rcR4iBXgBVo',
    mnemonicTips:'Think of an antenna on top of your head.', 
    learner:'u1'
},
{
    id:'p2',
    title: 'Programming 102',
    description: `This is an intermidiate course in programming. It covers the basics of programming such`,
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxqPi54oXAJAWSZ1VfEzsWwnINcesqCaxvhKcqStLYQ&s',
    videoUrl:'https://www.youtube.com/shorts/DB0j1aaiiwQ',
    mnemonicTips:'Imagine two baseball bats tapping together.',
    learner:'u2'
},
]


const UpdateLearning=()=>{
    const LearningId=useParams().learningId;

    const identifiedLearning=Dummy_Learnings.find(l=>l.id === LearningId);
    const[formState,InputHandler]=useForm({
        title:{
            value:identifiedLearning.title,
            placeholder:"Title",
            isValid: true,
        },
        description: {
        value: identifiedLearning.description,
        isValid: true

        }
    },true)
     
    const LearningUpdateSubmitHandler=event=>{
        event.preventDefault();
        console.log(formState.inputs);
    }

    if(!identifiedLearning){
     return(
     <div className="center"><h2>Could not find leaning</h2></div>   
     );
    } 
    return <form className="place-form"  onSubmit={LearningUpdateSubmitHandler}>
      <Input id="title"
      element="input"
      type="text"
      label="Title"
      validators={[VALIDATOR_REQUIRE()]}
      errorText="Please enter a valid title."
      onInput={InputHandler}
       initialValue={formState.inputs.title.value}
       initialValid={formState.inputs.title.isValid}
      />
      <Input id="description"
      element="textarea"
      label="Description"
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText="Please enter a valid description (min. 5 characters)."
      onInput={InputHandler}
       initialValue={formState.inputs.description.value}
       initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Learning Updated.
      </Button>

    </form>;
};

export default UpdateLearning;