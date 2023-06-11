import { Store } from "@/utils/Store";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const ProductCard = ({ product }) => {
  const { state } = useContext(Store);
  const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

  return (
    <div className="text-center">
      <Link href={`/details/${product.slug}`}>
        <div className="relative">
          {existItem?.quantity === product.countInStock ||
            (product.countInStock === 0 && (
              <div className="absolute z-20 right-2 top-2 bg-white rounded-3xl px-3 py-1">
                <span className="truncate text-xs md:text-sm text-blue-800 font-semibold">out of stock</span>
              </div>
            ))}
          <div className="relative overflow-hidden">
            <Image
              className={`object-cover opacity-0 transition-opacity duration-700 ${
                product.morePictures && " hover:opacity-0 "
              }`}
              priority
              width={580}
              height={870}
              alt={product.name}
              src={product.image}
              placeholder="blur"
              blurDataURL="/placeholder.png"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
            {product.morePictures && (
              <Image
                className="opacity-0 transition-opacity duration-700 absolute object-cover top-0 left-0 -z-10"
                priority
                width={580}
                height={870}
                alt={product.name}
                src={product.morePictures[0].image}
                placeholder="blur"
                blurDataURL="/placeholder.png"
                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
              />
            )}
          </div>
        </div>
      </Link>

      <h3 className="text-orange-600 font-semibold">{product.sexOrAge}</h3>
      <h2 className="text-gray-600 text-sm q  q">{product.description}</h2>
      {existItem?.quantity !== product.countInStock && (
        <span className="font-bold text-gray-600">${product.price}.00</span>
      )}
    </div>
  );
};

export default ProductCard;
