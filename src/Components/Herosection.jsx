import React from 'react';
import playpng from '../assets/Play.png';
import banner from '../assets/banner.png';

const Herosection = () => {
    return (
        <div className="  bg-white min-h-screen w-full lg:w-11/12 mx-auto flex items-center justify-center overflow-hidden py-10 md:py-20" >
          
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center justify-between py-10">
                
                {/* Image Div */}
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <img
                        src={banner}
                        className="max-w-md rounded-lg shadow-2xl"
                        alt="Digital Workflow"
                    />
                </div>

                {/* Text Div */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Badge for "New" */}
                    <div className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full w-fit mb-6 flex items-center gap-2 text-sm font-medium">
                        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></span>
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Supercharge Your <br />  <span className="text-purple-600">Digital Workflow</span>
                    </h1>
                    
                    <p className="py-6 text-gray-600 text-sm md:text-lg max-w-[280px] sm:max-w-md md:max-w-lg mx-auto lg:mx-0 px-2 md:px-0">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="btn btn-outline bg-purple-600 text-black px-8 rounded-3xl">
                            Explore Products
                        </button>
                        <button className="btn btn-outline border-purple-600 text-purple-600 px-8 flex gap-2 rounded-3xl">
                            <img src={playpng} alt="play" className="w-5 h-5" />
                            Watch Demo
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Herosection;