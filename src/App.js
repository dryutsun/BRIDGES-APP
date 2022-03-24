import './App.css';
import React, {useState, useEffect, useContext, Fragment } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./pages/Shared/Register.js"



function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Route>
      <Route path="/register" element={<Register />} />
      <Route></Route>
      <Route path="*"></Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
