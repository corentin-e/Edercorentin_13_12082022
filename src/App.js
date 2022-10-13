import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Profile, TransactionPage } from './pages/index';
import { Layout } from './components'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="login" element={<Login />}/>
                        <Route path="profile" element={<Profile />}/>
                        <Route path="transaction" element={<TransactionPage/>}/>
                    </Routes>

                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
