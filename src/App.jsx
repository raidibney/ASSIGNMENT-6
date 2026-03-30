import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import Footer from './Components/Footer'
import Getstarted from './Components/Getstarted'
import Herosection from './Components/Herosection'
import Navbar from './Components/Navbar'
import Premiumtools from './Components/Premiumtools'
import Rating from './Components/Rating'
import Ready from './Components/Ready'
import Transparentpricing from './Components/Transparentpricing'

import './index.css'

function App() {
// State to hold items added to the cart
  const [cart, setCart] = useState([]);
  // Function to add a product to the cart
  const addToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`, {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.info("This item is already in your cart.", {
        position: "top-center",
      });
    }
  };
  // Function to remove a specific item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    toast.error("Item removed from cart", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  // Function to clear all items (Proceed to Checkout)
  const clearCart = () => {
    setCart([]);
    toast.success("Purchase successful! Your cart has been cleared.", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <>
      <ToastContainer />
      <Navbar cartCount={cart.length}></Navbar>
      <Herosection></Herosection>
      <Rating></Rating>
      <Premiumtools cart={cart} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart}></Premiumtools>
      <Getstarted></Getstarted> 
      <Transparentpricing></Transparentpricing>
      <Ready></Ready>
      <Footer></Footer>
     
    </>
  )
}

export default App
