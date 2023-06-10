import data from "@/utils/data";
import { Rating } from "@mui/material";
import Image from "next/image";
import React from "react";

const BestSellers = () => {
  const productsSortedByRating = data.products.sort((a, b) => b.rating - a.rating);

  return (
    <div className="p-2 md:p-8 border border-dashed border-gray-500 max-h-96 lg:max-h-full overflow-y-auto ">
      {productsSortedByRating.map((product, i) => {
        if (i < 4)
          return (
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 py-4" key={product.slug}>
              <div className="rounded-full overflow-hidden h-20 w-20 flex items-center">
                <Image className="object-cover " src={product.image} alt={product.name} width={100} height={100} />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-blue-800 text-sm font-semibold">{product.name}</span>
                <Rating size="small" readOnly style={{ color: "#FF865E" }} value={product.rating} precision={0.5} />
                <span className="text-black text-sm font-semibold">$ {product.price}.00</span>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default BestSellers;
