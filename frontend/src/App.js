import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import Regulations from './pages/Regulations';
import MyProfile from './pages/MyProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/logowanie" element={<Login/>} />
            <Route path="/rejestracja" element={<Register/>} />
            <Route path='/profil/me' element={<MyProfile/>}/>
            <Route path="/regulamin" element={<Regulations/>} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
