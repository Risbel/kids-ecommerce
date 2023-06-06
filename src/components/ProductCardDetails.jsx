import Image from "next/image";
import React, { useContext, useState } from "react";
import Button from "./Button";
import { Store } from "@/utils/Store";
import { Rating } from "@material-tailwind/react";

const ImagesCard = ({ product }) => {
  const [image, setImage] = useState(product.image);

  const handlerClick = (picture) => {
    setImage(picture);
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12">
        <Image src={image} width={600} height={600} alt={product.slug} />
      </div>

      {product?.morePictures?.map((picture) => (
        <div className="col-span-3" key={picture?.alt}>
          <Image
            src={picture?.image}
            width={600}
            height={600}
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

  const addToCartHandler = () => {
    const quantity = existItem ? existItem.quantity + 1 : 1;

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
          <Rating value={product.rating} readonly />
          <p className="text-gray-700">
            {product.description}, lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam minus,
            nam non rem ex accusantium id eum magni! Expedita quos at accusantium laudantium ullam vitae nihil aliquid
            repudiandae nam!
          </p>
        </div>
        <div className="flex gap-4">
          <Button onClick={addToCartHandler}>Add to cart</Button>
          <span>{existItem?.quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
