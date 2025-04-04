import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';
import Footer from './Components/Footer/Footer.jsx';
import SignUp from './Pages/SignUp.jsx';


import men_banner from '/Assets/banner_mens.png';
import women_banner from '/Assets/banner_women.png';
import kid_banner from '/Assets/banner_kids.png';


function App() {
  return (
   <main className='container-fluid g-0'>
      <Navbar/>

      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path='product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/> 
      </Routes>

      <Footer/>
   </main>
  )
}

export default App
