import './Navbar.css';
import logo from '../../../public/Assets/logo.png';
import cart_icon from '../../../public/Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../../Context/ShopContext';

const Navbar = () => {
    
    const {menu,setMenu,cart} = useGlobalContext();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom px-lg-5" style={{ height: "80px" }}>
            <div className="container-fluid">
                
                <div className="d-flex align-items-center gap-1 col-2">
                    <img style={{ height: "35px" }} src={logo} alt="business logo" />
                    <a className="navbar-brand fw-bold" href="#">SHOPPIN</a>
                </div>

                
                <ul className='d-none d-lg-flex gap-4 justify-content-center col-8 list-unstyled' style={{cursor: "pointer",fontWeight:"semibold"}}>
                    <li>
                        <Link onClick={()=>setMenu("shop")} className={`shop-menu text-decoration-none text-dark ${menu === "shop" ? "active" : ""}`} to="/">Shop</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setMenu("men")} className={`shop-menu text-decoration-none text-dark ${menu === "men" ? "active" : ""}`} to="/mens">Men</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setMenu("women")} className={`shop-menu text-decoration-none text-dark ${menu === "women" ? "active" : ""}`} to="/womens">Women</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setMenu("kid")} className={`shop-menu text-decoration-none text-dark ${menu === "kid" ? "active" : ""}`} to="/kids">Kids</Link>
                    </li>
                </ul>
                

              
                <div className="d-flex gap-2 align-items-center">
                   
                    <Link className="btn btn-light border border-secondary rounded-pill" style={{ width: "90px" }} to="/login">Login</Link>
                    
                    <Link to="/cart">
                        <div className="position-relative">
                            <img style={{ height: "25px", width: "25px", cursor: "pointer" }} src={cart_icon} alt="cart icon" />
                            <div className="cart-count text-white rounded-circle text-center border border-light">{cart.length}</div>
                        </div>
                    </Link>
              
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

            
                <div className="offcanvas offcanvas-end d-block d-lg-none col-2" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header px-4 pb-0">
                        <h5 className="offcanvas-title" id="bdNavbarOffcanvasLabel">SHOPPIN</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column gap-3">
                        <a onClick={(e) => handleMenuClick(e, "shop")} className="text-decoration-none text-dark" href="#">Shop</a>
                        <a onClick={(e) => handleMenuClick(e, "mens")} className="text-decoration-none text-dark" href="#">Men</a>
                        <a onClick={(e) => handleMenuClick(e, "womens")} className="text-decoration-none text-dark" href="#">Women</a>
                        <a onClick={(e) => handleMenuClick(e, "kids")} className="text-decoration-none text-dark" href="#">Kids</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
