import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Login from './login';
import ProfilePage from "./profilePage";
import Register from './registration';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile' element={< ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
