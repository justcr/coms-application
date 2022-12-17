import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Groupcallbox from './pages/Groupcallbox';
import Usercallbox from './pages/Usercallbox';
import Errorpage from './pages/Errorpage';
import TestButton from './pages/TestButton';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Groupcallbox" element={<Groupcallbox />} />
        <Route path="/Usercallbox" element={<Usercallbox />} />
        <Route path="/TestButton" element={<TestButton />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
 );
}

export default App;
