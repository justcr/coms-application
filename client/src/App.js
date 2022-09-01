import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Group_coms from './pages/Group_coms';
import User_coms from './pages/User_coms';
import Errorpage from './pages/Errorpage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Group_coms" element={<Group_coms />} />
        <Route path="/User_coms" element={<User_coms />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
 );
}

export default App;
