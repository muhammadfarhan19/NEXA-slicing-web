import React from "react";
import DemoCard from "./shared/DemoCard";

const DemoPage = () => {
  return (
    <main className="p-10 md:px-28 lg:px-56 w-full h-auto flex flex-col gap-y-10 items-center justify-center">
      <section className="flex flex-col w-full gap-y-5">
        <aside className="flex justify-between w-full py-5 items-center">
          <h1 className="text-lg md:text-3xl font-semibold">
            Upcoming Baking Class and Demo
          </h1>
        </aside>
        <div className="w-full grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((e) => (
            <DemoCard key={e} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default DemoPage;
