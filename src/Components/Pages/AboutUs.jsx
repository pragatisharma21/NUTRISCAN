import React from 'react';
import Footer from '../common/Footer';

const AboutUs = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex items-center">
                <section className="py-20 px-6 bg-yellow-50 w-full">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-yellow-500 mb-6">About Us</h1>
                        <p className="text-gray-600 text-lg mb-6">
                            Welcome to <span className="font-bold text-yellow-500">NutriScan</span>! We are dedicated to helping you make healthier food choices.
                            Our mission is to provide you with accurate and up-to-date nutritional information so you can make informed decisions about what you eat.
                        </p>
                        <p className="text-gray-600 text-lg mb-6">
                            Our team of experts works tirelessly to ensure that our database is comprehensive and reliable. Whether you are looking to lose weight, manage a health condition, or simply eat better, NutriScan is here to support you on your journey.
                        </p>
                        <p className="text-gray-600 text-lg">
                            Thank you for choosing <span className="font-bold text-yellow-500">NutriScan</span>. We are excited to be a part of your health and wellness journey!
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
