import Image from "next/image";
import React, { useContext, useState } from "react";
import Button from "./Button";
import { Store } from "@/utils/Store";
import Input from "./Input";
import Link from "next/link";
import { Rating } from "@mui/material";

const ImagesCard = ({ product }) => {
  const [image, setImage] = useState(product.image);

  const handlerClick = (picture) => {
    setImage(picture);
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12">
        <Image
          className="object-cover"
          src={image}
          width={580}
          height={870}
          alt={product.slug}
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />
      </div>

      {product?.morePictures?.map((picture) => (
        <div className="col-span-3" key={picture?.alt}>
          <Image
            className="object-cover"
            src={picture?.image}
            placeholder="blur"
            blurDataURL="/placeholder.png"
            width={580}
            height={870}
            alt={picture?.alt}
            onClick={() => handlerClick(picture?.image)}
          />
        </div>
      ))}
    </div>
  );
};

const ProductCardDetails = ({ product }) => {
  const { state, dispatch } = useContext(Store);

  const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

  const addToCartHandler = (e) => {
    e.preventDefault();
    const amount = Number(e.target.amount.value);
    const quantity = existItem ? existItem.quantity + amount : amount;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CARD_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <div className="grid md:grid-cols-2 justify-center px-10 md:px-32 lg:px-60 py-12 gap-16">
      <ImagesCard product={product} />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:gap-4 text-sm md:text-md  ">
          <span className="text-black"> $ {product.price}.00</span>
          <Rating
            precision={0.5}
            readOnly
            style={{ color: "#FF865E" }}
            name="size-medium"
            defaultValue={product.rating}
          />

          <p className="text-gray-700">
            {product.description}, lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam minus,
            nam non rem ex accusantium id eum magni!
          </p>
        </div>

        <form className="flex items-center gap-4" onSubmit={addToCartHandler}>
          <Input autoComplete="off" required name="amount" className="w-16 h-full" size="md" variant="primary" />

          <Button
            disabled={product.countInStock === existItem?.quantity ? true : false}
            type="submit"
            className="truncate"
          >
            Add to cart
          </Button>
        </form>
        <div>
          {existItem && product.countInStock === existItem.quantity ? (
            <span className="text-gray-700 text-sm">Out of stock</span>
          ) : (
            <>
              <span className="text-gray-700 text-sm">The product is already in the wishlist! </span>
              <Link className="hover:text-blue-700 text-blue-900 hover:underline text-sm" href="#">
                Browse Wishlist
              </Link>
            </>
          )}
        </div>

        <div className="text-gray-700 text-sm divide-y divide-solid divide-gray-500 p-2 border border-gray-500 border-dashed">
          <div className="grid grid-cols-2 md:grid-cols-3 py-2">
            <span className="text-blue-900">SKU:</span>
            <p>{product.sku}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 py-2">
            <span className="text-blue-900">Category:</span>
            <p> {product.sexOrAge}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 py-2">
            <span className="text-blue-900">Tags:</span>
            <p>
              {product.name}, {product.sexOrAge.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
