import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const NavBar = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) => {
  return (
    <>
      <Link key={`logo`} href={"/"} className="w-auto h-full overflow-hidden">
        <img
          src={"./LOGO.png"}
          alt={"InFable Game Studio"}
          className="object-cover object-center w-48 h-16"
        />
      </Link>

      <div className="flex max-w-[70vw] fixed inset-x-0 px-10 py-5 items-center justify-between ml-auto">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 text-[24px] dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" text-[20px] !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBar;
