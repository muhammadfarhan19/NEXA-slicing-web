import React from "react";
import DemoCard from "./shared/DemoCard";
import kitchen from "../../public/assets/kitchen.jpg";

const HistoryPage = () => {
  return (
    <main className="p-10 md:px-28 lg:px-56 w-full h-auto flex flex-col gap-y-10 items-center justify-center">
      <section className="flex flex-col w-full gap-y-5">
        <aside className="flex justify-between w-full py-5 items-center">
          <h1 className="text-lg md:text-3xl font-semibold">
            Our Newest Story
          </h1>
          <a className="text-blue-600 text-base md:text-xl" href="">
            See All Stories
          </a>
        </aside>
        <div className="w-full grid grid-cols md:grid-cols-2 gap-5">
          {[1, 2].map((e) => (
            <DemoCard context='history' image={kitchen} key={e} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HistoryPage;
