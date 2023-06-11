import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import BaseLayout from "@/layouts/BaseLayout";
import { Store } from "@/utils/Store";
import Button from "@/components/Button";

export default function Cart() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeCartHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: "CARD_ADD_ITEM", payload: { ...item, quantity } });
  };

  return (
    <BaseLayout title={"shopping cart"}>
      <h2 className="text-center py-10 font-bold text-3xl text-gray-500">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          Cart is empty
          <Link className="border border-gray-400 border-dashed p-2 ml-4 hover:bg-orange-kids" href="/all">
            Go to shopping
          </Link>
        </div>
      ) : (
        <div className="grid px-2 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item) => (
            <div className="flex justify-center" key={item.slug}>
              <div className="flex gap-8 py-4">
                <div>
                  <Image src={item.image} width={100} height={100} alt={item.slug} />
                </div>
                <div className="flex flex-col gap-2 text-xs md:text-sm">
                  <span className="font-semibold"> {item.name}</span>
                  <div className="flex gap-4">
                    <span>Amount of {item.name}s:</span>
                    <select value={item.quantity} onChange={(e) => updateCartHandler(item, e.target.value)}>
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>Price: {item.price}$</div>
                  <div>
                    <Button className="bg-red-500" size="sm" onClick={() => removeCartHandler(item)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center text-lg py-8">
        <span>Subtotal:</span>{" "}
        <span className="bg-blue-300 px-2 rounded-md">{cartItems.reduce((a, c) => a + c.quantity, 0)} products</span> $
        {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
      </div>
    </BaseLayout>
  );
}
