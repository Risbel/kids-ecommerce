import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="text-center">
      <Link href={`/details/${product.slug}`}>
        <Image priority width={500} height={500} alt={product.name} src={product.image} />
      </Link>

      <h3 className="text-orange-600 font-semibold">{product.category}</h3>
      <h2 className="text-gray-600">{product.description}</h2>
      <span className="font-bold text-gray-600">${product.price}.00</span>
    </div>
  );
};

export default ProductCard;
