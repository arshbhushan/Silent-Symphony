import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './fingerSpelling/components/styles.css';
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import NewLearning from './learnings/pages/NewLearning.js';
import UpdateLearning from './learnings/pages/UpdateLearning.js';
import Auth from './user/pages/Auth.js';
import { AuthContext } from './shared/context/auth-context.js';
import UserLearnings from './learnings/pages/userLearnings';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId,setUserId]=useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);
  let routes;
  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/learnings" element={<UserLearnings />} />
        <Route path="/learnings/new" element={<NewLearning />} />
        <Route path="/learnings/:learningId" element={<UpdateLearning />} />
        <Route path="*" element={<Navigate to="/" />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/learnings" element={<UserLearnings />} />
        <Route path="/auth" element={<Auth />} />
      </>
    );
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      userId: userId, 
      login: login,
      logout: logout
    }}>
      <Router>
        <MainNavigation />
        <main>
          <Routes>

          {routes}


          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
