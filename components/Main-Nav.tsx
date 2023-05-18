import React from "react";
import Logo from "./logo";
import Input from "./ui/input";
import Link from "next/link";
import Cart from "./ui/cart";

type Props = {};

export default function MainNav({}: Props) {
  return (
    <nav className="flex flex-col justify-center mt-5">
      <div className="flex justify-evenly items-center">
        <div className="flex justify-center items-center gap-4">
          <Logo />
          <Input placeholder="Search for anything" className=" w-96" />
        </div>

        <ul className="flex justify-center items-center gap-4 font-bold">
          <li>
            <Link
              className="hover:bg-primary p-2 rounded-lg transition-all text-lg"
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-primary p-2 rounded-lg transition-all text-lg"
              href={"/Contact"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-primary p-2 rounded-lg transition-all text-lg"
              href={"/login"}
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link href={"/cart"}>
              <Cart height="30" width="32" />
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex justify-center items-center gap-10 mt-4">
        <li>
          <Link
            className="p-2 hover:bg-primary rounded-lg transition-all"
            href={"/shoes"}
          >
            Shoes
          </Link>
        </li>
        <li>
          <Link
            className="p-2 hover:bg-primary rounded-lg transition-all"
            href={"/hats"}
          >
            Hats
          </Link>
        </li>
        <li>
          <Link
            className="p-2 hover:bg-primary rounded-lg transition-all"
            href={"/shoes"}
          >
            Blankets
          </Link>
        </li>
        <li>
          <Link
            className="p-2 hover:bg-primary rounded-lg transition-all"
            href={"/blankets"}
          >
            Custom
          </Link>
        </li>
      </ul>
    </nav>
  );
}
