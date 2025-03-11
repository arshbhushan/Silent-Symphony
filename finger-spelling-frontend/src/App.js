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
import FingerSpelling from './learnings/components/FingerSpelling.js';
import GestureRecognition from './learnings/components/GestureRecognition.js';

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <>
        <Route path="/" element={<Home />} />
        <Route path="/all-users" element={<Users />} />
        <Route path="/:userId/learnings" element={<UserLearnings />} />
        <Route path="/learnings/new" element={<NewLearning />} />
        <Route path="/learnings/:learningId" element={<UpdateLearning />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/finger-spelling" element={<FingerSpelling />} />
        <Route path="/gesture-learning" element={<GestureRecognition />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Home />} />
        <Route path="/:userId/learnings" element={<UserLearnings />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/finger-spelling" element={<FingerSpelling />} />
        <Route path="/gesture-learning" element={<GestureRecognition />} />
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <MainNavigation />
          <main style={{ flex: 1 }}> {/* This ensures the main content takes up the remaining space */}
            <Routes>{routes}</Routes>
          </main>
          <MainFooter />
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;