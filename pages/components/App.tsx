import React from "react";
// import {
//   BrowserRouter as Router, Route, Routes
// } from 'react-router-dom';
// import { createBrowserHistory as history } from 'history';
import Latest from "./Latest";
import Projects from './Projects';
import Productions from "./Productions";
import Bio from "./Bio";

const App = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Latest />} />
        <Route path="/projects" element={<Projects />} exact />
        <Route path="/productions" element={<Productions />} exact />
        <Route path="/about" element={<Bio />} exact />
      </Routes>
    </Router>
  );
};

export default App;
