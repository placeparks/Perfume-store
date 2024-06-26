import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
const { AiOutlineShopping } = require('react-icons/ai');
import Link from 'next/link';


const Navbar = () => {
    const { totalQuantities, showCart, setShowCart } = useStateContext();
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min');
      }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid"> 
                <Link className="navbar-brand" href="#">Navbar</Link>
                <div className="order-lg-2"> 
                    <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                         <AiOutlineShopping />
                        <span className="cart-item-qty">{totalQuantities}</span>
                    </button>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse order-lg-1" id="navbarTogglerDemo02"> 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/femaleperfumes">Female Perfumes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/menperfumes">Men Perfumes</Link>
                        </li>
                    </ul>
                </div>
                {showCart && <Cart />}
            </div>
        </nav>
        </>
    );
}

export default Navbar

