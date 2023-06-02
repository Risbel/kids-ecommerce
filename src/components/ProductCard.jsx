import { Store } from "@/utils/Store";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const ProductCard = ({ product }) => {
  const { state } = useContext(Store);
  const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

  return (
    <div className="text-center">
      <Link className="relative" href={`/details/${product.slug}`}>
        <div className="absolute p-4">{existItem?.quantity}</div>
        {existItem?.quantity > product.countInStock - 1 && (
          <div className="absolute right-2 top-2 md:right-4 md:top-4 bg-white rounded-3xl px-3 py-1">
            <span className="truncate text-xs md:text-sm text-gray-500">out of stock</span>
          </div>
        )}
        <Image priority width={500} height={500} alt={product.name} src={product.image} />
      </Link>

      <h3 className="text-orange-600 font-semibold">{product.category}</h3>
      <h2 className="text-gray-600">{product.description}</h2>
      <span className="font-bold text-gray-600">${product.price}.00</span>
    </div>
  );
};

export default ProductCard;
