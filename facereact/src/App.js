import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Login from './pages/Login';
import Key from './pages/Key';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Main/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/key" element={<Key/>}/>
      <Route path='*' element={<Navigate to="/"/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
