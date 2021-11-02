import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
//import footer from './screens/footer'
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import dashboard from './actions/admin/dashboard';
import dashSideBar from './actions/admin/dashSideBar';


function App() {
  // @ts-ignore
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/"><img src="https://drive.google.com/file/d/1k2LOVh8fdfXd4iVJE5Ex0wS1DtVqBcvS/view?usp=sharing" alt="logo"/> </Link>
          </div>
          <div className="header-links">
            <Link to="cart.html">Cart</Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#">Admin</Link> 
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/fashion">Fashion</Link>
            </li>

            <li>
              <Link to="/category/kitchen">Kitchen</Link>
            </li>
            <li>
              <Link to="/category/gifts">Gifts</Link>
            </li>

            <li>
              <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/category/bathroom">Bathroom</Link>
            </li>
            <li>
              <Link to="/category/Packaging">Packaging</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            {/*<Route path="/home" component={home} />*/}
            <Route path="/dashSideBar" component={dashSideBar}/>
            <Route path= "/dashboard" component={dashboard}/>
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
              {/*<Route path="/footer" component={footer} />*/}
          </div>
        </main>
       
        <footer className="footer">All right reserved.</footer>
        <footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
