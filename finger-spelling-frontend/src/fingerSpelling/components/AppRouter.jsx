import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Home from './Home';
import FingerSpellingComponent from './FingerSpellingComponent';
import './styles.css';

// const AppRouter = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/finger-spelling" exact component={FingerSpellingComponent} />
//         {/* Add more routes as needed */}
//       <Redirect to='/'/>
//       </Switch>
//     </Router>
//   );
// };

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/></Route>
        <Route path="/finger-spelling" exact  >
          <FingerSpellingComponent/>
        </Route>
        {/* Add more routes as needed */}
      <Redirect to='/'/>
      </Switch>
    </Router>
  );
};

export default AppRouter;
