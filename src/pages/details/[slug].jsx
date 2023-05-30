import Button from "@/components/Button";
import Input from "@/components/Input";
import BaseLayout from "@/layouts/BaseLayout";
import data from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const DetailsProduct = () => {
  const router = useRouter();
  const { query } = useRouter();

  const { slug } = query;

  const article = data.products.filter((article) => article.slug === slug);

  if (!article || article.length === 0) {
    return <div>Product not found</div>;
  }

  return (
    <BaseLayout title="article details">
      <div className="flex flex-col gap-4 border border-gray-500 border-dashed py-10 text-center">
        <h1 className="text-3xl text-gray-600">{article[0].name}</h1>
        <p className="text-md text-gray-600">
          {article[0].category}: <span className="text-red-600">{article[0].name}</span>
        </p>
      </div>
      <div className="grid md:grid-cols-2 justify-center px-10 md:px-32 lg:px-60 py-12 gap-16">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12">
            <Image src={article[0].image} width={600} height={600} alt={article[0].slug} />
          </div>

          {article.map((article) => (
            <div className="col-span-3" key={article.slug}>
              <Image src={article.image} width={200} height={200} alt={article.slug} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <div className="text-sm md:text-md font-semibold text-gray-500">
            <span className="text-black"> ${article[0].price}.00</span>
            <div>Rate {article[0].rating}</div>
            <p>
              {article[0].description}, lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam
              minus, nam non rem ex accusantium id eum magni! Expedita quos at accusantium laudantium ullam vitae nihil
              aliquid repudiandae nam!
            </p>
          </div>
          <div className="flex gap-4">
            <Input defaultValue={1} className="w-16 text-center" type="number" />
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DetailsProduct;
