import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaTelegram } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="flex items-center justify-center w-full h-full p-2 mx-auto max-w-[1240px]">
        <div>
          <p className="text-xl tracking-wide text-gray-600 uppercase dark:text-gray-400">
            Добро пожаловать
          </p>
          <h1 className="py-4 text-gray-700 dark:text-white">
            Здравствуйте, я{" "}
            <span className="text-purple-700 ">Алексей Сташатов</span>
          </h1>
          <h1 className="py-4 text-gray-700 dark:text-white">
            Front-end developer
          </h1>
          <p className="py-4 text-xl tracking-wide text-gray-600 max-w-[70%] m-auto dark:text-gray-400">
            Мои основные технологии:{" "}
            <span className="font-bold text-purple-700">
              React, JavaScript, HTML, CSS.
            </span>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://t.me/alex008145" target="blank">
              <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                <FaTelegram />
              </div>
            </Link>
            <Link href="https://github.com/Alex008145" target="blank">
              <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:alex008145@gmail.com" target="blank">
              <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://hh.ru" target="blank">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                <Image
                  src="/assets/hh_logo.png"
                  width={20}
                  height={50}
                  alt="hh logo"
                ></Image>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
