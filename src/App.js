import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Profile } from './pages/index';

function App() {
  return (
    <div>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="login" element={<Login />}/>
                <Route path="profil" element={<Profile />}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
