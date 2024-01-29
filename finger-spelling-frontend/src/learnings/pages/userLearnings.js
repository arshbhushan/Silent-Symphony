import React from "react";
import { useParams } from "react-router-dom/";
import LearningList from "../components/LearningList";


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


const UserLearnings=()=>{
    const userId = useParams().userId;
    const loadedLearnings=Dummy_Learnings.filter(learning=>learning.learner === userId )
    return <LearningList items={loadedLearnings}/>
};

export default UserLearnings;