import ProductCard from "@/components/ProductCard";
import BaseLayout from "@/layouts/BaseLayout";
import data from "@/utils/data";
import React from "react";

const HomeAndToys = () => {
  const homeAndToys = data.products.filter((product) => product.category === "toys" || product.category === "home");

  return (
    <BaseLayout>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8">
        {homeAndToys.map((product) => {
          return <ProductCard key={product.slug} product={product} />;
        })}
      </div>
    </BaseLayout>
  );
};

export default HomeAndToys;
