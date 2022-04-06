import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/logowanie" element={<Login/>} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
