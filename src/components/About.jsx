import React from "react";
import { LOGO_, HUMAN, LOGO_URL } from "../utils/constants";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-sky-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Start Your Favorite Shopping Journey
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Your one-stop shop for quality products at unbeatable prices.
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-orange-700 hover:text-blue-700 transition duration-300">
              Who We Are?
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              We are an online store passionate about bringing you the best
              products in the market. From electronics to fashion, every item is
              carefully curated for quality and affordability.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our commitment to excellent customer service ensures a seamless
              and enjoyable shopping experience.
            </p>
          </div>
          <div>
            <img
              src={LOGO_URL}
              alt="Online Shop"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-rose-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800">
            Our Premium Services
          </h2>
          <p className="mt-4 text-gray-600">
            Explore the benefits we offer to enhance your shopping experience.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Service Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <img
                className="w-16 h-16 mx-auto rounded-lg mb-4"
                src={LOGO_}
                alt="Fast Delivery"
              />
              <h3 className="text-lg font-medium text-gray-800">
                Fast Delivery
              </h3>
              <p className="mt-2 text-gray-600">
                Get your orders delivered to your doorstep in record time.
              </p>
            </div>
            {/* Add more service cards here */}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">
          Meet Our Amazing Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Team Member */}
          <div className="text-center">
            <img
              src={HUMAN}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full shadow-lg mb-4 transform hover:scale-110 transition duration-300"
            />
            <h3 className="text-lg font-bold text-gray-800">Jolly Sen</h3>
            <p className="text-sm text-gray-500">Founder</p>
          </div>
          {/* Add more team members here */}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Start Shopping with Us Today!</h2>
          <p className="mt-4 text-lg text-gray-200">
            Experience quality, convenience, and amazing deals like never
            before.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl transition duration-300">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
