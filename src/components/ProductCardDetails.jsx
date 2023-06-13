import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import Button from "./Button";
import { Store } from "@/utils/Store";
import Input from "./Input";
import Link from "next/link";
import { Rating } from "@mui/material";
import clsx from "classnames/bind";

const ImagesCard = ({ product }) => {
  const [image, setImage] = useState(product.image);
  const [posicionDiv, setPosicionDiv] = useState({ x: 0, y: 0 });
  const [activeZoom, setActiveZoom] = useState(false);

  useEffect(() => {
    setImage(product.image);
  }, [product]);

  const handlerClick = (picture) => {
    setImage(picture);
  };

  const obtenerCoordenadas = (event) => {
    const div = document.getElementById("miDiv");
    const rect = div.getBoundingClientRect();
    const coordenadaX = Math.floor(event.clientX - rect.left);
    const coordenadaY = Math.floor(event.clientY - rect.top);
    setPosicionDiv({ x: coordenadaX, y: coordenadaY });
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12 relative">
        <div
          id="miDiv"
          onClick={() => setActiveZoom((prev) => !prev)}
          onMouseMove={obtenerCoordenadas}
          onMouseLeave={() => setPosicionDiv({ x: 0, y: 0 })}
          className="relative overflow-hidden"
        >
          <Image
            className="object-cover opacity-0 transition-all duration-700"
            src={image}
            placeholder="blur"
            priority
            blurDataURL={image}
            width={580}
            height={870}
            alt={product.slug}
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />

          {activeZoom && posicionDiv.x !== 0 && (
            <div
              className={clsx(
                "hidden md:block absolute z-10 h-1/2 w-1/2 border border-white border-dashed -translate-x-1/2 -translate-y-1/2"
              )}
              style={{
                left: `${posicionDiv.x}px`,
                top: `${posicionDiv.y}px`,
              }}
            ></div>
          )}
        </div>

        {activeZoom && (
          <div className={`hidden md:block absolute z-40 translate-x-full -translate-y-full overflow-hidden`}>
            <Image
              className={clsx(
                "relative scale-[200%]",
                "translate-x-1/2 translate-y-1/2",
                posicionDiv.x === 0 && "hidden"
              )}
              src={image}
              placeholder="blur"
              priority
              blurDataURL={image}
              width={580}
              height={870}
              alt={product.slug}
              style={{
                left: `-${posicionDiv.x}px`,
                top: `-${posicionDiv.y}px`,
              }}
            />
          </div>
        )}
      </div>

      {product?.morePictures?.map((picture) => (
        <div className="col-span-3" key={picture?.alt}>
          <Image
            className="object-cover opacity-0 transition-opacity duration-500"
            src={picture?.image}
            placeholder="blur"
            priority
            blurDataURL={picture?.image}
            width={580}
            height={870}
            alt={picture?.alt}
            onClick={() => handlerClick(picture?.image)}
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
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

          <p className="text-gray-700">
            {product.description}, lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam minus,
            nam non rem ex accusantium id eum magni!
          </p>
          <Rating precision={0.5} readOnly style={{ color: "#FF865E" }} value={product.rating} />
        </div>

        <form className="flex items-center gap-4" onSubmit={addToCartHandler}>
          <Input
            type="number"
            autoComplete="off"
            required
            name="amount"
            className="w-16 h-full"
            size="md"
            variant="primary"
          />

          <Button
            disabled={product.countInStock === existItem?.quantity || product.countInStock === 0 ? true : false}
            type="submit"
            className="truncate"
          >
            Add to cart
          </Button>
        </form>
        <div>
          {(existItem && product.countInStock === existItem.quantity) || product.countInStock === 0 ? (
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
