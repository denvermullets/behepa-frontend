import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import EventForm from './components/EventForm';
import LandingPage from './containers/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
}

export default App;
