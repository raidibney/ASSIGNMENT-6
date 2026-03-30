import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-[#0B1221] text-white pt-20 pb-10  mx-auto w-11/12">
            <div className="max-w-7xl mx-auto px-10"> 
            
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-8 mb-16">
                    
                    
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
                            Premium digital tools for creators, professionals, and businesses. 
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">About</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Community</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>

                    {/* Social Links  */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-6">Social Links</h4>
                        <div className="flex gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer transition-colors">
                                <i className="fab fa-instagram text-xl"></i> 
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer transition-colors">
                                <i className="fab fa-facebook-f text-xl"></i>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer transition-colors">
                                <span className="font-bold text-lg">X</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;