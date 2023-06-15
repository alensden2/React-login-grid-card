import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Login from './login';
import ProfilePage from "./profilePage";
import Register from './registration';
import IndividualProfilePage from "./individualProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/profile' element={< ProfilePage />} />
          <Route path='/individualPage/:id' element={<IndividualProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
