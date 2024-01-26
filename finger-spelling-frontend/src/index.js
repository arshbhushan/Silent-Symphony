import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM from 'react-dom/client' for concurrent mode
import './index.css'; // Importing styles
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals';

// Creating a root using ReactDOM.createRoot (concurrent mode)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within a React.StrictMode for additional checks during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to measure performance, you can use reportWebVitals
reportWebVitals();
