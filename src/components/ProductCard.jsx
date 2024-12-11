import React from "react";

const ProductCard = ({ productItem }) => {
  // const {productItems} = props;  Destructuring
  return (
    <div className="flex flex-col gap-4 px-3 border-2  border-red-600 w-72 ">
      <img className="h-80" src={productItem.image} alt={productItem.title} />
      <h2 className="text-2xl font-semibold text-slate-800 line-clamp-2">
        {productItem.title}
      </h2>
      <p className="text-green-800 line-clamp-2">{productItem.description}</p>
      <h3 className="text-2xl font-bold text-red-800">
        {" "}
        Price:{productItem.price}
      </h3>
      <h3 className="text-2xl font-bold text-blue-800">
        {" "}
        Rate:{productItem.rating.rate}
      </h3>
    </div>
  );
};
export default ProductCard;
