import NavBar from "@/components/ui/NavBar";
import { navItems } from "@/data";
import React from "react";

export const NotFound = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full h-full">
        <div className="flex max-w-full lg:min-w-full fixed z-[5000] top-0 left-0 border border-black/.1">
          <NavBar navItems={navItems} />
        </div>

        <h3 className="w-[60%] p-20 mt-60 text-4xl">
          It seems like you've landed on a 404 page. This can happen if you
          mistyped the URL, the page has been moved or deleted, or there's a
          temporary issue with the server. We're working to fix the problem.
        </h3>
      </div>
    </main>
  );
};

export default NotFound;
