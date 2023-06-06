import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Login from './login';
import Register from './registration';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/registration' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
