
import userIconPng from '../assets/user.png';
import rocket from '../assets/rocket.png'
import boxIconPng from '../assets/package.png';

const Getstarted = () => {

    const stepsData = [
        {
            id: "01",
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started.",
            icon: (
                <img src={userIconPng}></img>
            ),
        },
        {
            id: "02",
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs.",
            icon: (
                  <img src={boxIconPng }></img>
            ),
        },
        {
            id: "03",
            title: "Start Creating",
            description: "Download and start using your premium tools immediately.",
            icon: (
                 <img src={ rocket }></img>
            ),
        },
    ];

    return (
        <section className="bg-gray-100 py-24 px-4 relative overflow-hidden w-11/12 mx-auto">
            
            {/* Top part of the  Section */}
            <div className="text-center mb-16 relative">
                
                <h2 className="text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                    Get Started In 3 Steps
                </h2>
                
                <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
                    Start using premium digital tools in minutes, not hours.
                </p>
                
               
                
            </div>

            {/* cards Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {stepsData.map((step) => (
                    <div 
                        key={step.id} 
                        className="bg-white border border-gray-100 rounded-2xl p-10 pt-16 text-center relative shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Purple Number Badge */}
                        <div className="absolute top-6 right-6 w-9 h-9 bg-[#8B2CFF] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                            {step.id}
                        </div>

                        {/* Purple Circular Icon Container */}
                        <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-10 border-4 border-white shadow-inner">
                            {step.icon}
                        </div>

                        {/*  Title */}
                        <h3 className="text-xl font-bold text-gray-950 mb-4">
                            {step.title}
                        </h3>

                        {/*  Description */}
                        <p className="text-gray-500 text-base leading-relaxed max-w-xs mx-auto">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

          
            
        </section>
    );
};

export default Getstarted;