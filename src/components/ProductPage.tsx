import React from "react";
import ProductCard from "./shared/ProductCard";

const ProductPage = () => {
  return (
    <main className="p-10 md:px-28 lg:px-56 w-full h-auto flex flex-col gap-y-10 items-center justify-center">
      <section className="flex flex-col w-full gap-y-5">
        <aside className="flex justify-between w-full py-5 items-center">
          <h1 className="text-lg md:text-3xl font-semibold">
            Our Superior Products
          </h1>
          <a className="text-blue-600 text-base md:text-xl" href="">
            See All Products
          </a>
        </aside>
        <div className="w-full grid grid-cols lg:grid-cols-2 xl:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((e) => (
            <ProductCard key={e} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
