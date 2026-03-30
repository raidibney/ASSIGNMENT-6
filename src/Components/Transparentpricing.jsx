import React from 'react';

const Transparentpricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "10",
            description: "Perfect for getting started",
            buttonText: "Get Started Free",
            highlighted: false,
            features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month","good to start with","limited access to features"]
        },
        {
            name: "Pro",
            price: "29",
            description: "Best for professionals",
            buttonText: "Start Pro Trial",
            highlighted: true,
            badge: "Most Popular",
            features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"]
        },
        {
            name: "Enterprise",
            price: "99",
            description: "For teams and businesses",
            buttonText: "Contact Sales",
            highlighted: false,
            features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"]
        }
    ];
    return (
        <section className='bg-white py-16 md:py-24 w-full lg:w-11/12 mx-auto px-4 md:px-6'>
            {/* Header */}
            <div className='mb-16'>
                <h1 className='text-3xl text-gray-900 text-center font-extrabold mb-4'>Simple, Transparent Pricing</h1>
                <p className='text-gray-500 text-center text-lg'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            {/* Pricing Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl   mx-auto items-center'>
                {plans.map((plan, index) => (
                    <div 
                        key={index} 
                        className={`relative rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-105 ${
                            plan.highlighted ? 'bg-[#8B2CFF] text-white ' : 'bg-[#F9FAFB] text-gray-900 border border-gray-100'
                        }`}
                    >
                        {/* Most Popular Badge */}
                        {plan.badge && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                {plan.badge}
                            </div>
                        )}

                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className={`text-sm mb-6 ${plan.highlighted ? 'text-purple-100' : 'text-gray-500'}`}>{plan.description}</p>
                        
                        <div className="flex items-baseline mb-8">
                            <span className="text-5xl font-extrabold">${plan.price}</span>
                            <span className={`text-lg ml-1 ${plan.highlighted ? 'text-purple-100' : 'text-gray-500'}`}>/Month</span>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-sm font-medium">
                                    <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-colors ${
                            plan.highlighted 
                            ? 'bg-white text-[#8B2CFF] hover:bg-gray-100' 
                            : 'bg-[#8B2CFF] text-white hover:bg-purple-700'
                        }`}>
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Transparentpricing;