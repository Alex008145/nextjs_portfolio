import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto shadow-lg shadow-purple-700 rounded-xl">
          <Image
            className="rounded-xl"
            src="/assets/about.jpg"
            alt="photo"
            width={350}
            height={50}
          ></Image>
        </div>
        <div className="col-span-2">
          <p className="text-xl font-bold tracking-widest text-purple-700 uppercase mt-7">
            Обо мне
          </p>
          <h2 className="py-4">Кто я</h2>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            Уже более полутора лет я изучаю разработку веб-приложений и в данный
            момент углубляюсь в изучение React, NextJS.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            За время своего обучения я работал с:
            <br />- созданием одностраничных веб приложний с помощью ReactJS
            <br />- оптимизацией сайтов с использованием фреймворка NextJS и
            Tailwind CSS
            <br />- созданием адаптивных сайтов для мобильных и десктопных
            устройств
            <br />- API для хранения и получения данных с сервера (Firebase и
            MongoDB)
            <br />- Google OAuth API для авторизации пользователей на сайте
            <br /> В данный момент я работаю над проектом с собственной
            авторизацией и базой данных пользователей
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            Я стремлюсь закрывать пробелы в своих знаниях и изучать новые
            технологии для улучшения своих навыков.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer dark:text-gray-400">
              Вы можете посмотреть примеры моих проектов
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
