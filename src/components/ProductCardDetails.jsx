import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";

export const ProductcardDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    // Fetch the product details when the component loads or when `id` changes
    async function fetchApiProducts() {
      try {
        const data = await fetch("https://fakestoreapi.com/products/" + id);
        const productsdata = await data.json();
        setProductDetail(productsdata); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchApiProducts();
  }, [id]); // Dependency array includes `id`

  // Show a shimmer card while loading
  if (!productDetail) {
    return <ShimmerCard />;
  }

  // Render product details after data is loaded
  return (
    <div>
      <h1>{productDetail.title}</h1>
      <p>{productDetail.description}</p>
      <p>Price: ${productDetail.price}</p>
      <img src={productDetail.image} alt={productDetail.title} />
    </div>
  );
};

export default ProductcardDetail;
