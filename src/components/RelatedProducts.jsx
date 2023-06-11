import data from "@/utils/data";
import React from "react";
import ProductCard from "./ProductCard";
import { Rating } from "@mui/material";

const RelatedProducts = ({ product }) => {
  const relatedProducts = data.products.filter((p) => p.name === product.name);

  return (
    <div>
      <h1 className="text-center text-blue-800 text-xl font-semibold py-8">RELATED PRODUCTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 md:px-32 lg:px-60">
        {relatedProducts.map(
          (p, i) =>
            i < 4 && (
              <div className="flex flex-col items-center" key={p.slug}>
                <ProductCard product={p} />
                <Rating size="small" precision={0.5} readOnly style={{ color: "#FF865E" }} value={p.rating} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
