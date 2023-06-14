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
          <Route path='/' element={<Login />}></Route>
          <Route path='/profile' element={< ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
