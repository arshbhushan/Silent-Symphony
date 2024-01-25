import React from 'react'
import {Routers,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
//import createAlphabet from './pages/FingerSpelling/createAlphabet';
import FingerSpellingDetail from './pages/FingerSpelling/FingerSpellingDetail.jsx';
import AddFingerSpelling from './pages/FingerSpelling/AddFingerSpelling.jsx';
import Search from './pages/FingerSpelling/Search.jsx';
import Browse from './pages/FingerSpelling/Browse.jsx';

 const App = () => {
  return (
    <Routers>
        <Route path="/" element={<Home />} />
        <Route path="/finger-spelling/:alphabet" element={<FingerSpellingDetail />} />
        <Route path="/add-finger-spelling" element={<AddFingerSpelling />} />
        <Route path="/search" element={<Search />} />
        <Route path="/browse" element={<Browse />} />
    </Routers>
  )
}
export default App;