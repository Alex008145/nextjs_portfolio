import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assets/navLogo.png" alt="logo" width={100} height={50} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b font-bold ">
                Главная
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b">Обо мне</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b">Образование</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b">Проекты</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:border-b">Контакт</li>
            </Link>
          </ul>
          <div className="md:hidden m-10">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className="fixed left-0"></div>
    </div>
  );
};

export default Navbar;
