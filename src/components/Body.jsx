import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import ShimmerCard from "./ShimmerCard.jsx";

const Body = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchApiProducts();
  }, []);

  async function fetchApiProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllProducts(data);
      setFilteredItems(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  }

  function handleRatingFilter(minRate, maxRate) {
    setFilteredItems(
      allProducts.filter(
        (product) =>
          product.rating.rate >= minRate && product.rating.rate <= maxRate
      )
    );
  }
  function handleSearchProducts() {
    const searchProducts = allProducts.filter((product) =>
      product.title.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setFilteredItems(searchProducts);
  }
  function handleAllProducts() {
    setFilteredItems(allProducts);
  }

  return (
    <section className="flex flex-col px-2 py-2">
      {/* Search Bar */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          className="w-80 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          placeholder="Search the product..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700"
          onClick={handleSearchProducts}
        >
          Search
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 px-3 mb-4">
        <button
          className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-700"
          onClick={handleAllProducts}
        >
          All Products Available
        </button>

        {[1, 2, 3, 4].map((minRate) => (
          <button
            key={minRate}
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700"
            onClick={() => handleRatingFilter(minRate, minRate + 1)}
          >
            Ratings from {minRate}-{minRate + 1}⭐
          </button>
        ))}
      </div>

      {/* Product Items */}
      <div className="flex flex-col items-center gap-4">
        {loading ? (
          // Show shimmer cards when loading
          <div className="flex gap-4 flex-wrap justify-center">
            {Array(20) // Display 8 shimmer cards
              .fill("")
              .map((_, index) => (
                <ShimmerCard key={index} />
              ))}
          </div>
        ) : (
          // Show actual products once loaded
          <>
            <h2 className="text-sm text-gray-800">
              Total Items: {filteredItems.length}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {filteredItems.map((product) => (
                <ProductCard productItem={product} key={product.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Body;
