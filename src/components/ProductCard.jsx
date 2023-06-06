import { Store } from "@/utils/Store";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

const ProductCard = ({ product }) => {
  const { state } = useContext(Store);
  const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

  return (
    <div className="text-center">
      <Link className="relative" href={`/details/${product.slug}`}>
        <div className="absolute p-4 z-20">{existItem?.quantity}</div>
        {existItem?.quantity > product.countInStock - 1 && (
          <div className="absolute z-20 right-2 top-2 md:right-4 md:top-4 bg-white rounded-3xl px-3 py-1">
            <span className="truncate text-xs md:text-sm text-gray-500">out of stock</span>
          </div>
        )}
        <div className="relative overflow-hidden">
          <Image
            className={`${product.morePictures && "hover:opacity-0 transition-opacity duration-700"}`}
            priority
            width={500}
            height={500}
            alt={product.name}
            src={product.image}
          />
          {product.morePictures && (
            <Image
              className="absolute object-cover top-0 left-0 -z-10"
              priority
              width={500}
              height={500}
              alt={product.name}
              src={product.morePictures[0].image}
            />
          )}
        </div>
      </Link>

      <h3 className="text-orange-600 font-semibold">{product.sexOrAge}</h3>
      <h2 className="text-gray-600">{product.description}</h2>
      <span className="font-bold text-gray-600">${product.price}.00</span>
    </div>
  );
};

export default ProductCard;
