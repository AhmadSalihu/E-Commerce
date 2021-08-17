import React from "react";
import { useSelector } from "react-redux";
import { Route, Link, BrowserRouter } from 'react-router-dom';
import CartScreen from "./CartScreen";
import Slide from "./customSlider/Slide";
import HomeScreen from "./HomeScreen";
import ProductDetails from "./ProductDetails";


function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  return (
   <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">E-shop</Link>
          </div>
          <div>
            <Link to="/cart">Cart{cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            ) }</Link>
            <Link to="/sign">Sign In</Link>
          </div>
        </header>
        <main>
          <Slide /> <br />
          <Route exact path="/" component={HomeScreen}></Route>
          <Route path="/product/:id" component={ProductDetails}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
