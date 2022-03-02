import * as React from "react";
import {useEffect,useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Redirect from "./login/Redirect";
import Main from "./login/Main"

function App() {
  return (
    <div>
      <header>
        <h2>RMS TOKEN</h2>
      </header>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/oauth/redirect" element={<Redirect/>} />
      </Routes>
    </div>
  );
}


export default App;