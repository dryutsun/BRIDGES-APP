import './App.css';
import React, {useState, useEffect, useContext, Fragment } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./pages/Shared/Register.js"
import Error from "./pages/Shared/Error"



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
      <Route path="*" element={<Error />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
