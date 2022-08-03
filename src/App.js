import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Tools from './Pages/Tools/Tools';
import Blogs from './Pages/Blogs/Blogs';
import Reviews from './Pages/Reviews/Reviews';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact-Us/Contact';

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='tools' element={<Tools />} />
                <Route path='reviews' element={<Reviews />} />
                <Route path='blogs' element={<Blogs />} />

                <Route path='portfolio' element={<Portfolio />} />
                <Route path='contact' element={<Contact />} />
                <Route path='login' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
