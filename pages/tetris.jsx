import Image from "next/image";
import React from "react";
import tetrisImg from "../public/assets/projects/tetris.png";
import { GiPlayButton } from "react-icons/gi";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Head from "next/head";

const property = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Alexey | Tetris</title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative  z-60">
        <div className="fixed top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10 " />
        <Image
          className="absolute z-1"
          objectFit="cover"
          layout="fill"
          src={tetrisImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Tetris</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          {/* <p className="py-4">Проект</p> */}
          <h2 className="py-4 text-purple-700">Описание</h2>
          <p className="py-4">
            Интересный учебный проект с игрой Tetris.
            <br /> Реализована система очков и уровней, с повышением которых
            игра ускоряется.
          </p>

          <a
            href="https://react-tetris-alex008145s-projects.vercel.app/"
            target="_blank"
          >
            <button className="flex items-center justify-center p-6 px-8 py-2 mt-4 mr-8 text-xl duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-purple-700 hover:scale-125">
              Превью сайта
            </button>
          </a>

          <a href="https://github.com/Alex008145/react-tetris" target="_blank">
            <button className="flex items-center justify-center p-6 px-8 py-2 mt-4 text-xl duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-purple-700 hover:scale-125">
              Исходный код на GitHub
            </button>
          </a>
        </div>
        <div className="col-span-4 p-4 shadow-md rounded-xl md:col-span-1 shadow-purple-700">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Технологии</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-purple-700">
                <GiPlayButton className="mr-2" /> React
              </p>
              <p className="flex items-center py-2 text-purple-700">
                <GiPlayButton className="mr-2" /> Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex content-center justify-center py-12">
        <Link href="/#projects">
          <div className="flex items-center justify-center p-6 text-xl duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-purple-700 hover:scale-125">
            <div className="flex items-center">
              <HiOutlineArrowLeft className="text-purple-700" size={30} />
              <p className="ml-2 text-purple-700">Назад</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default property;
