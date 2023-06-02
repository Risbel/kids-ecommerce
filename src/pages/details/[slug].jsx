import React, { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";
import BaseLayout from "@/layouts/BaseLayout";
import Button from "@/components/Button";
import { Store } from "@/utils/Store";
import data from "@/utils/data";

const DetailsProduct = () => {
  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();

  const { slug } = query;

  const product = data.products.find((x) => x.slug === slug);

  const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

  if (!product || product.length === 0) {
    return <div className="text-center">Product not found</div>;
  }

  const addToCartHandler = () => {
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CARD_ADD_ITEM", payload: { ...product, quantity } });
  };

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
            {product.category}: <span className="text-red-600">{product.name}</span>
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 justify-center px-10 md:px-32 lg:px-60 py-12 gap-16">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12">
            <Image src={product.image} width={600} height={600} alt={product.slug} />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="text-sm md:text-md font-semibold text-gray-500">
            <span className="text-black"> ${product.price}.00</span>
            <div>Rate {product.rating}</div>
            <p>
              {product.description}, lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam minus,
              nam non rem ex accusantium id eum magni! Expedita quos at accusantium laudantium ullam vitae nihil aliquid
              repudiandae nam!
            </p>
          </div>
          <div className="flex gap-4">
            <span>{existItem?.quantity}</span>

            <Button onClick={addToCartHandler}>Add to cart</Button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DetailsProduct;
