import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddGame from './pages/AddGame';
import ErrorPage from './pages/ErrorPage';
import Regulations from './pages/Regulations';
import MyProfile from './pages/MyProfile';
import Profile from './pages/Profile';
import Game from './pages/Game';
import BrowseGames from './pages/BrowseGames';
import EditProfile from './pages/EditProfile';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/logowanie" element={<Login/>} />
            <Route path="/rejestracja" element={<Register/>} />
            <Route path="/dodawanie" element={<AddGame/>} />
            <Route path='/profil/me' element={<MyProfile/>}/>
            <Route path='/profil/:id' element={<Profile/>}/>
            <Route path='/profil/edytuj' element={<EditProfile/>}/>
            <Route path='/gra/:id' element={<Game/>}/>
            <Route path='/przegladaj' element={<BrowseGames/>}/>
            <Route path="/regulamin" element={<Regulations/>} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
