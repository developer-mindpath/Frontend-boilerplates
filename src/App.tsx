import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import 'App.css';

import NotFound from './pages/404';
import MainPage from './pages/mainPage/mainPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/mainPage" replace />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
