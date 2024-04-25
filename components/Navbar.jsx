import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Image src="/assets/navLogo.png" alt="logo" width={100} height={50} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-xl hover:text-purple-900">Главная</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:text-purple-900">Обо мне</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:text-purple-900">
                Образование
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:text-purple-900">Проекты</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-xl hover:text-purple-900">Контакт</li>
            </Link>
          </ul>
          <div className="m-10 cursor-pointer md:hidden">
            <AiOutlineMenu size={25} onClick={navHandler} />
          </div>
        </div>
      </div>

      {/* Mobile Menu and Overlay */}

      <div
        className={
          nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#d1d2ed] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image src="/assets/navLogo.png" width="87" height="35" alt="/" />
              <div className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400">
                <AiOutlineClose onClick={navHandler} />
              </div>
            </div>
            <div className="my-4 border-b border-gray-500">
              <p className="w-[85%] md:w-[90%] py-4"></p>
            </div>
          </div>
          <div>
            <ul className="flex flex-col py-4">
              <Link href="/">
                <li className="py-4 text-xl">Главная</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl">Обо мне</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl">Образование</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl">Проекты</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl">Контакт</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest uppercase text-[#5651e5]">
                Связаться со мной
              </p>
              <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-125">
                  <FaTelegram />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-125">
                  <FaGithub />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-125">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-125">
                  <Image
                    src="/assets/hh_logo.png"
                    width={20}
                    height={20}
                    alt="hh logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
