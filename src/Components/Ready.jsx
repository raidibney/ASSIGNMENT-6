import React from 'react';

const Ready = () => {
    return (
        <section className="bg-[#8B2CFF] py-16 md:py-24 px-6 text-center text-white w-full lg:w-11/12 mx-auto  shadow-2xl relative overflow-hidden ">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-6">
                    Ready To Transform Your Workflow?
                </h2>

                {/* text */}
                <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter. 
                    Start your free trial today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <button className="bg-white text-[#8B2CFF] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Explore Products
                    </button>
                    <button className="border-2 border-white/60 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                        View Pricing
                    </button>
                </div>

                {/* Footer small text */}
                <p className="text-sm opacity-80 font-medium">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default Ready;