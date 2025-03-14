 import {useCallback,useReducer}  from 'react';

 const formReducer=(state,action)=>{
    switch(action.type){
      case 'INPUT_CHANGE':
        let formIsValid=true;
        //checking if all the inputs are valid
        for(const inputId in state.inputs){
          if(!state.inputs[inputId]){
            continue;
          }
          if(inputId === action.inputId){
            formIsValid=formIsValid && action.isValid;
          }else{
            formIsValid=formIsValid && state.inputs[inputId].isValid;
          }
        }
        return{
          ...state, //copying the previous states
          inputs:{
          ...state.inputs,//keeping the other fields
          [action.inputId]:{value:action.value, isValid:action.isValid}}, 
          isValid:formIsValid
        };
        case 'SET_DATA':
          return {
            inputs: action.inputs,
            isValid:action.formIsValid
          }
        default:
          return state;
        }
  };  

 export const useForm=(initialInputs,initialFormValidity)=>{
    const [formState,dispatch]=useReducer(formReducer,{
        inputs: initialInputs,
      isValid: initialFormValidity
    });

    const InputHandler=useCallback((id,value,isValid)=>{
        dispatch({
        type:"INPUT_CHANGE", 
        value: value,
        isValid: isValid,
        inputId: id
      });
      },[]);

      const setFormData= useCallback((inputData,formValidity)=>{
        dispatch({
          type: 'SET_DATA',
          inputs: inputData,
          formIsValid:formValidity
        });
      },[]);
    
      return [formState,InputHandler,setFormData];
 }; 