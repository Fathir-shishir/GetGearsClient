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
import Dashboad from './Pages/Dashboad/Dashboad';
import MyOrder from './Pages/Dashboad/MyOrder';
import MyProfile from './Pages/MyProfile/MyProfile';
import Error404 from './Pages/Error/Error404';
import Users from './Pages/Dashboad/Users';
import AddProducts from './Pages/Dashboad/AddProducts';
import AddReview from './Pages/Dashboad/AddReview';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="*" element={<Error404></Error404>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/products" element={<Products></Products>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/logIn" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/puschase/:id" element={<Purchase></Purchase>} />
       
        <Route path="/dashboad" element={<Dashboad></Dashboad>} >
        <Route index element={<MyOrder></MyOrder>} />
        <Route path="myProfile" element={<MyProfile></MyProfile>} />
        <Route path="allUsers" element={<Users></Users>} />
        <Route path="addProducts" element={<AddProducts></AddProducts>} />
        <Route path="addReview" element={<AddReview></AddReview>} />
        </Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
