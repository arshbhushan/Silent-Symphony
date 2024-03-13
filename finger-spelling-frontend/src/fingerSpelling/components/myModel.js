import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/addons/loaders/OBJLoader';

const MyObjModel = () => {
  const obj = useLoader(OBJLoader, './hand2.obj');

  return <primitive object={obj} />;
};

export default MyObjModel;
