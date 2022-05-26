import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/products" element={<Products></Products>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/logIn" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/puschase/:id" element={<Purchase></Purchase>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
