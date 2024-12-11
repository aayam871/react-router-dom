import {useState,useEffect,React} from React;
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

  export default usefetchApiProducts;