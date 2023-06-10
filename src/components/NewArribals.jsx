import React, { useState } from "react";
import ProductCard from "./ProductCard";
import data from "@/utils/data";
import Input from "./Input";
import Button from "./Button";
import { FiSearch } from "react-icons/fi";
import CategoriesCard from "./CategoriesCard";
import BestSellers from "./BestSellers";
import FormSubscription from "./FormSubscription";

const ProductsGrid = ({ data, filterText }) => {
  const filteredProducts = data.products.filter(
    (product) =>
      product.sexOrAge.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ||
      product.description.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ||
      product.category.indexOf(filterText.toLowerCase()) !== -1
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {filteredProducts.map((product, i) => i < 9 && <ProductCard key={product.slug} product={product} />)}
    </div>
  );
};

const NewArribals = () => {
  const [filterText, setFilterText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.searchInput.value;
    setFilterText(inputValue);
  };

  return (
    <section>
      <h1 className="text-center text-2xl font-bold text-blue-800 py-6">NEW ARRIVALS</h1>
      <div className="grid grid-cols-12 gap-8 px-4 md:px-0">
        <div className="col-span-12 md:col-span-4">
          <form className="flex justify-center w-full" onSubmit={handleSubmit}>
            <Input name="searchInput" placeholder="Search Products" className="w-full" />
            <Button type="submit" paddingNone>
              <FiSearch className="h-5 w-5 stroke-white" />
            </Button>
          </form>

          <div className="hidden md:block">
            <div className="">
              <h2 className="text-left text-xl font-semibold text-blue-800 py-6">CategoriesCard</h2>
              <CategoriesCard />
            </div>
            <div className="hidden md:block">
              <h2 className="text-left text-xl font-semibold text-blue-800 py-6">Best Sellers</h2>
              <BestSellers />
            </div>
            <div className="hidden lg:flex justify-center  py-12">
              <FormSubscription />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 ">
          <ProductsGrid data={data} filterText={filterText} />
        </div>
      </div>
      <div className="flex justify-center lg:hidden py-12">
        <FormSubscription />
      </div>
    </section>
  );
};

export default NewArribals;
