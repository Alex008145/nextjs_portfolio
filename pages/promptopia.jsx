import Image from "next/image";
import React from "react";
import promptopiaImg from "../public/assets/projects/promptopia.png";
import { GiPlayButton } from "react-icons/gi";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Head from "next/head";

const promptopia = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Alexey | Promptopia</title>
      </Head>
      <div className="w-full h-[30vh] lg:h-[40vh] relative z-60">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10 " />
        <Image
          className="absolute z-1"
          objectFit="cover"
          layout="fill"
          src={promptopiaImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Promptopia</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>

      <div className="grid w-full p-4 max-w-[1240px] gap-8 pt-8 mx-auto md:grid-cols-5">
        <div className="col-span-4">
          <h2 className="py-4 text-purple-700">Описание</h2>
          <p className="py-4">
            Promptopia — это инструмент с открытым исходным кодом для сохранения
            запросов к ИИ. Он предоставляет пользователям возможность создавать
            и делиться творческими подсказками к изображениям, текстам.
          </p>
          <p className="py-4 text-lg">Основные функции:</p>
          <ul className="pl-10 space-y-2 list-disc">
            <li className="cursor-text">Поиск по тегам и именам</li>
            <li className="cursor-text">Копирование текста промпта</li>
            <li className="cursor-text">Aвторизация через Google OAuth API</li>
            <li className="cursor-text">Профили пользователей</li>
            <li className="cursor-text">
              Создание, редактирование и удаление постов
            </li>
          </ul>
          <button className="flex items-center justify-center p-6 px-8 py-2 mt-4 mr-8 text-xl duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-purple-700 hover:scale-125">
            <Link
              href="https://ai-prompts-alex008145s-projects.vercel.app/"
              target="_blank"
            >
              Превью сайта
            </Link>
          </button>
          <button className="flex items-center justify-center p-6 px-8 py-2 mt-4 text-xl duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-purple-700 hover:scale-125">
            <Link
              href="https://github.com/Alex008145/ai_prompts"
              target="_blank"
            >
              Исходный код на GitHub
            </Link>
          </button>
        </div>
        <div className="col-span-4 p-4 shadow-md rounded-xl md:col-span-1 shadow-purple-700">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Технологии</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-purple-700">
                <GiPlayButton className="mr-2" /> Next.js
              </p>
              <p className="flex items-center py-2 text-purple-700">
                <GiPlayButton className="mr-2" /> Tailwind CSS
              </p>
              <p className="flex items-center py-2 text-purple-700">
                <GiPlayButton className="mr-2" /> Google Auth API
              </p>
              <p className="flex items-center py-2 text-purple-700">
                <GiPlayButton className="mr-2" /> MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex content-center justify-center py-12">
        <Link href="/#projects">
          <div className="flex items-center justify-center p-6 text-xl duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-purple-700 hover:scale-125">
            <div className="flex items-center">
              <HiOutlineArrowLeft className="text-purple-800" size={30} />
              <p className="ml-2 text-purple-700">Назад</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default promptopia;
