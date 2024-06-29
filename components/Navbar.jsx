import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaMoon, FaSun, FaTelegram } from "react-icons/fa";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (
      router.asPath === "/promptopia" ||
      router.asPath === "/tetris" ||
      router.asPath === "/quotes" ||
      router.asPath === "/eats" ||
      router.asPath === "/cart"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else if (currentTheme === "dark") {
      setNavBg("#121212");
      setLinkColor("#1f2937");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router, currentTheme]);

  const navHandler = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-md shadow-purple-700 z-50"
          : "fixed w-full h-20 z-50 "
      }
    >
      <div className="flex items-center justify-between w-full h-full px-4 2xl:px-16">
        <Link href="/#home">
          <Image src="/assets/navLogo.png" alt="logo" width={100} height={50} />
        </Link>
        <div className="flex items-center">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-xl font-bold hover:text-purple-700 dark:text-white dark:hover:text-purple-700">
                Главная
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-xl font-bold hover:text-purple-700 dark:text-white dark:hover:text-purple-700">
                Обо мне
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-xl font-bold hover:text-purple-700 dark:text-white dark:hover:text-purple-700">
                Навыки
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-xl font-bold hover:text-purple-700 dark:text-white dark:hover:text-purple-700">
                Проекты
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-xl font-bold hover:text-purple-700 dark:text-white dark:hover:text-purple-700">
                Контакты
              </li>
            </Link>
          </ul>
          <div className="m-10 cursor-pointer md:hidden">
            <AiOutlineMenu size={25} onClick={navHandler} />
          </div>

          {currentTheme === "dark" ? (
            <button
              className="p-2 m-4 duration-300 ease-in bg-transparent border-2 border-purple-700 rounded-full hover:scale-125"
              onClick={() => setTheme("light")}
            >
              <FaSun size={30} />
            </button>
          ) : (
            <button
              className="p-2 m-4 duration-300 ease-in border-2 border-purple-700 rounded-full hover:scale-125"
              onClick={() => setTheme("dark")}
            >
              <FaMoon size={30} />
            </button>
          )}
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
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#121212] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Link href="/#home">
                <Image
                  src="/assets/navLogo.png"
                  width="87"
                  height="35"
                  alt="/"
                />
              </Link>
              <div
                className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125"
                onClick={navHandler}
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* <div className="my-4 border-b border-gray-500">
              <p className="w-[85%] md:w-[90%] py-4"></p>
            </div> */}
          </div>
          <div>
            <ul className="flex flex-col py-4">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-xl font-bold hover:text-purple-700"
                >
                  Главная
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-xl font-bold hover:text-purple-700"
                >
                  Обо мне
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-xl font-bold hover:text-purple-700"
                >
                  Навыки
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-xl font-bold hover:text-purple-700"
                >
                  Проекты
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-xl font-bold hover:text-purple-700"
                >
                  Контакты
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="font-bold tracking-widest text-purple-700 uppercase">
                Связаться со мной
              </p>
              <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                  <FaTelegram />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                  <FaGithub />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
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
