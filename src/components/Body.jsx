import React from 'react'
import ProductCard from './ProductCard.jsx';
const Body = () => {
    return (
        <section className='flex flex-col gap-4 px-2 py-2 '>
            <div className='flex gap-3'>
                <input
                    type='text'
                    class='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
                    placeholder='Search...'
                />
                Search
            </div>
            <div className='flex flex-wrap justify-center gap-4 product-items'>
                <ProductCard
                    title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                    price="$109.95"
                    image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

                />
                <ProductCard
                    title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
                    price="$695"
                    image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                    description="From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection."

                />


                <ProductCard
                    title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                    price="$109.95"
                    image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

                />


                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </div>
        </section>
    );
};
export default Body;