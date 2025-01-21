import Footer from "../common/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();

    const HeroSection = () => {
        return (
            <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 xl:px-10 xl:py-24 relative">
                <div className="w-full max-w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4 sm:mb-6">Track Calories Instantly with QR.</h1>
                        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-600">Experience seamless calorie tracking in India with NutriScan. Simply scan QR codes to stay on top of your nutrition.</p>
                        <button className="bg-[#F6B41A] text-black px-6 py-2 rounded text-base sm:text-lg" onClick={()=>navigate("/Qrscanner")}>Track Now</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://media.gettyimages.com/id/1470167308/photo/close-up-of-guest-hand-ordering-meal-in-restaurant-while-scanning-qr-code-with-mobile-phone.jpg?b=1&s=2048x2048&w=0&k=20&c=LO1VQhzOxghAVIijf5LxJnDqOZN4ocj3Oleg3lJlSRo=" alt="QR Scanning Demo 1" className="rounded-lg w-full object-cover" />
                        <img src="https://media.gettyimages.com/id/1254446953/photo/woman-scanning-qr-code-for-online-menu.jpg?b=1&s=2048x2048&w=0&k=20&c=RNOifnPWgd4WT2ZBEb-soGtMhl23kB1ZY0crn6c4xrQ=" alt="QR Scanning Demo 2" className="rounded-lg w-full object-cover" />
                        <img src="https://media.gettyimages.com/id/1301623789/photo/asian-female-hands-scanning-the-qr-code-of-the-restaurant-menu.jpg?b=1&s=2048x2048&w=0&k=20&c=q8fc5x0oPPa-9Ssv_2hUhMNNnmjAU4TFYHEFlzr76Qs=" alt="QR Scanning Demo 3" className="rounded-lg w-full object-cover" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F6B41A" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>
        );
    };

    const Features = () => {
        const features = [
            { title: "Instant Calorie Scanning", description: "Scan food items with QR codes to instantly view detailed calorie information." },
            { title: "Meal Planning Assistant", description: "Get personalized meal suggestions based on your calorie goals and dietary preferences." },
            { title: "Nutritional Insights Dashboard", description: "Access comprehensive data on your daily nutrient intake through an intuitive dashboard." },
            { title: "Custom Diet Recommendations", description: "Receive tailored diet plans designed to meet your specific health and wellness objectives." },
            { title: "Progress Tracking Tools", description: "Monitor your fitness journey with tools that track calorie intake and weight changes over time." },
            { title: "Barcode Food Library", description: "Explore an extensive database of food items with barcode scanning for easy calorie tracking." },
        ];

        return (
            <section id="features" className="bg-[#F6B41A] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 xl:px-0 relative w-full">
                <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path fill="#F6B41A" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                    </svg>
                </div>

                <div className="w-full max-w-full mx-auto px-10 relative">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-10 lg:mb-12 text-black">Instant Calorie Tracking Solution</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/10">
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black">{feature.title}</h3>
                                <p className="text-black/80 text-sm sm:text-base">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const DetailedInfo = () => {
        const details = [
            {
                title: "Enhanced User Interface",
                description: "We upgraded the user interface of the QR Code Calorie Tracking App, focusing on a more intuitive layout that simplifies navigation for users.",
                image: "https://media.gettyimages.com/id/1470167308/photo/close-up-of-guest-hand-ordering-meal-in-restaurant-while-scanning-qr-code-with-mobile-phone.jpg?b=1&s=2048x2048&w=0&k=20&c=LO1VQhzOxghAVIijf5LxJnDqOZN4ocj3Oleg3lJlSRo="
            },
            {
                title: "Efficient Data Management",
                description: "Optimized the backend databases to handle large volumes of user data more efficiently.",
                image: "https://media.gettyimages.com/id/1087211840/photo/qr-code-scanning.jpg?b=1&s=2048x2048&w=0&k=20&c=-r14yL_-V0lixK0Pyd0GQPloa1jggY3WBac8hto9UO4="
            },
            {
                title: "Expanded Food Database",
                description: "We significantly expanded the app's food database by integrating thousands of new food items.",
                image: "https://media.gettyimages.com/id/1405275550/photo/young-man-scam-qr-code-using-mobile-phone-in-a-supermarket.jpg?b=1&s=2048x2048&w=0&k=20&c=qqVYKdPMRemjYKGujgvOcMgoeCt8-aydEjNmjz1tYR0="
            },
        ];
    
        return (
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 xl:px-12 bg-white">
                <div className="w-full max-w-full mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-12 lg:mb-16">Master Calorie Management Instantly</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                        {details.map((detail, index) => (
                            <div key={index} className="text-center">
                                <img src={detail.image || "https://placehold.co/200"} alt={detail.title} className="w-full h-96 object-cover rounded-lg mb-4 sm:mb-6" />
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{detail.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{detail.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
    
    

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Clear the form
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section id="contact" className="bg-[#F6B41A] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 xl:px-0 rounded-lg">
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-10 text-black">Connect with NutriScan Team</h2>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="px-4 py-2 rounded bg-white/10 border border-white/20 text-black placeholder-black/80 focus:outline-none focus:border-white text-sm sm:text-base"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="px-4 py-2 rounded bg-white/10 border border-white/20 text-black placeholder-black/80 focus:outline-none focus:border-white text-sm sm:text-base"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="col-span-1 sm:col-span-2 px-4 py-2 rounded bg-white/10 border border-white/20 text-black placeholder-black/80 focus:outline-none focus:border-white h-32 text-sm sm:text-base"
                    ></textarea>
                    <button className="col-span-1 sm:col-span-2 bg-black text-white px-6 py-2 rounded text-sm sm:text-base mx-auto block">Submit</button>
                </form>
            </div>
        </section>
    );
};





    
    return (
        <div className="min-h-screen">
            <HeroSection />
            <Features />
            <DetailedInfo />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Home;

