import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './user/pages/Home.js';
import './fingerSpelling/components/styles.css';
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainFooter from './shared/components/Navigation/MainFooter.js';
import NewLearning from './learnings/pages/newLearning';
import UpdateLearning from './learnings/pages/UpdateLearning.js';
import Auth from './user/pages/Auth.js';
import { AuthContext } from './shared/context/auth-context.js';
import UserLearnings from './learnings/pages/userLearnings';
import { useAuth } from './shared/hooks/auth-hook.js';

const App = () => {
 const {token,login,logout,userId}=useAuth();

  let routes;
  if (token) {
    routes = (
      <>
      <Route path="/" element={<>{<Home />}{<Users/>}</>} />
      
        {/* <Route path="/" element={<Users />} /> only to show users without home screen */}
        <Route path="/:userId/learnings" element={<UserLearnings />} />
        <Route path="/learnings/new" element={<NewLearning />} />
        <Route path="/learnings/:learningId" element={<UpdateLearning />} />
        <Route path="*" element={<Navigate to="/" />} />
      </>
    );
  } else {
    routes = (
      <>
      <Route path="/" element={<> <Home/></>} />
      
        {/* <Route path="/" element={<>{<Home />}{<Users/>}</>} /> */}
        <Route path="/:userId/learnings" element={<UserLearnings />} />
        <Route path="/auth" element={<Auth />} />
      </>
    );
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout
    }}>
      <Router>
        <main>
        <MainNavigation />
          <Routes>

            {routes}


          </Routes>
          
        </main>
        <MainFooter/>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
