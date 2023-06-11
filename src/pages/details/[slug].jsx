import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";
import BaseLayout from "@/layouts/BaseLayout";
import data from "@/utils/data";
import ProductCardDetails from "@/components/ProductCardDetails";
import RelatedProducts from "@/components/RelatedProducts";

const DetailsProduct = () => {
  const { query } = useRouter();

  const { slug } = query;

  const product = data.products.find((x) => x.slug === slug);

  if (!product || product.length === 0) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <BaseLayout title="product details">
      <div className="grid grid-cols-3 justify-center border border-gray-500 border-dashed py-10 px-10 md:px-32 lg:px-60">
        <div className="flex items-start">
          <Link
            className="flex items-center border border-dashed text-gray-600 border-gray-500 p-2 md:pr-4 active:bg-orangeStrong-kids hover:bg-orange-kids"
            href="/all"
          >
            <HiOutlineChevronLeft />
            <span className="hidden md:block ">Back</span>
          </Link>
        </div>

        <div className="flex flex-col gap-4  text-center">
          <h1 className="text-3xl text-gray-600">{product.name}</h1>
          <p className="text-md text-gray-600">
            {product.sexOrAge}: <span className="text-red-600">{product.name}</span>
          </p>
        </div>
      </div>

      <ProductCardDetails product={product} />      
      <RelatedProducts product={product}/>
    </BaseLayout>
  );
};

export default DetailsProduct;
