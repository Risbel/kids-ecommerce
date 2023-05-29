import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="text-center">
      <Image priority width={500} height={500} alt={product.name} src={product.image} />
      <h3 className="text-orange-600 font-semibold">{product.category}</h3>
      <h2 className="text-gray-600">{product.description}</h2>
      <span className="font-bold text-gray-600">${product.price}.00</span>
    </div>
  );
};

export default ProductCard;
