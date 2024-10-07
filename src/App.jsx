import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from '../components/Home';
import Add from '../components/Add';  
import Nav from '../components/Nav'; 
import { Box, Button, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />  
      <br />

      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/add' element={<Add />} />  Add route corrected 
      </Routes>
    </>
  );
}

export default App;
