import * as React from "react";
import {useEffect,useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Redirect from "./login/Redirect";
import Main from "./login/Main"

function App() {
  return (
    <div>
      <header className="page-header">
        <h2>RMS ADMIN</h2>
        <hr className="hr-bar"></hr>
      </header>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/oauth/redirct" element={<Redirect/>} />
      </Routes>
    </div>
  );
}


export default App;