import React from 'react';

const Rating = () => {
    return (
        <section className="bg-[#8B2CFF] py-12 px-4  w-11/12 mx-auto ">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around text-white">
                
                {/* Active Users */}
                <div className="text-center flex-1 border-b md:border-b-0 md:border-r border-white/30 py-6 md:py-0">
                    <h2 className="text-5xl font-bold mb-2">50K+</h2>
                    <p className="text-lg opacity-90">Active Users</p>
                </div>

                {/* Premium Tools */}
                <div className="text-center flex-1 border-b md:border-b-0 md:border-r border-white/30 py-6 md:py-0">
                    <h2 className="text-5xl font-bold mb-2">200+</h2>
                    <p className="text-lg opacity-90">Premium Tools</p>
                </div>

                {/* Rating */}
                <div className="text-center flex-1 py-6 md:py-0">
                    <h2 className="text-5xl font-bold mb-2">4.9</h2>
                    <p className="text-lg opacity-90">Rating</p>
                </div>

            </div>
        </section>
    );
};

export default Rating;