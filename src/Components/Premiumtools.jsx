import React, { useState, useEffect } from 'react';
import carticon from '../assets/products/shopping-cart.png';

const Premiumtools = ({ cart, addToCart, removeFromCart, clearCart }) => {
    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState('products');

    // Fetch products from the public folder
    useEffect(() => {
        fetch('/products.json') // fethching data from the public folder file
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load products");
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error loading JSON:", err));
    }, []);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <section className="bg-gray-50 py-12 md:py-16 min-h-screen w-full lg:w-11/12 mx-auto px-4 md:px-0">
            <div className="w-11/12 mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-black mb-4">Premium Digital Tools</h2>
                    <p className="text-gray-500 mb-8">Choose from our curated collection to boost productivity.</p>

                    {/* Toggle Buttons */}
                    <div className="inline-flex bg-white border rounded-full p-1 shadow-sm">
                        <button 
                            onClick={() => setActiveTab('products')}
                            className={`px-8 py-2 rounded-full font-bold transition ${activeTab === 'products' ? 'bg-[#3b82f6] text-white' : 'text-gray-500'}`}
                        >
                            Products
                        </button>
                        <button 
                            onClick={() => setActiveTab('cart')}
                            className={`px-8 py-2 rounded-full font-bold transition ${activeTab === 'cart' ? 'bg-[#3b82f6] text-white' : 'text-gray-500'}`}
                        >
                            Cart ({cart.length})
                        </button>
                    </div>
                </div>

                {activeTab === 'products' ? (
                    /* Products Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <div key={product.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative">
                                <span className="absolute top-4 right-4 badge badge-info font-bold">{product.tag}</span>
                                {/* Icon and Header */}
                                <div className="text-4xl mb-4">{product.icon}</div>
                                <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                                <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
                                {/* Pricing */}
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-black">${product.price}</span>
                                    
                                    <span className="text-gray-400 text-sm">/{product.period}</span>
                                </div>
                                {/* Features List - Added logic to match your image */}
            <ul className="space-y-3 mb-8 flex-grow">
                {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                        {/* Checkmark Icon */}
                        <svg 
                            className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="3" 
                                d="M5 13l4 4L19 7" 
                            />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
                {/*buttons */}
                                <button 
                                    onClick={() => addToCart(product)}
                                    className={`btn w-full rounded-2xl text-white font-bold ${
        cart.find(item => item.id === product.id) 
        ? 'bg-green-500 hover:bg-green-600' 
        : 'bg-blue-500 hover:bg-blue-600'
                              }`}
                                    
                                >
                                    {cart.find(item => item.id === product.id) ? "Added to Cart" : "Buy Now"}
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Cart Section */
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
                        <h3 className="text-2xl text-blue-700 font-bold mb-6">Your Cart</h3>
                        {cart.length === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-gray-400 text-lg"><img src={carticon }className="w-10 h-10 mx-auto"></img>Your cart is empty</p>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 mb-8">
                                    {cart.map(item => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                            <div className="flex items-center gap-4">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h4 className="font-bold text-black">{item.name}</h4>
                                                    <p className="text-gray-500 text-sm">${item.price}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-bold">Remove</button>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t pt-6 flex justify-between items-center mb-8">
                                    <span className="text-xl font-bold text-blue-700">Total:</span>
                                    <span className="text-3xl font-extrabold text-black">${totalPrice}</span>
                                </div>
                                <button onClick={clearCart} className="btn btn-primary w-full py-4 text-white rounded-2xl text-lg shadow-xl">
                                    Proceed to Checkout</button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Premiumtools;