import { useLanguage } from "@/contexts/LanguageContext";
import React, { useState } from "react";
import { FaJava } from "react-icons/fa";

const BackendSkills = () => {
  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl  font-bold text-yellow-500 dark:text-rose-500 mb-4">
            BACKEND
          </h2>
          <p className="text-2xl">
            Sou um desenvolvedor entusiasta da Programação Orientada a Objetos (POO), utilizando-a para simplificar o desenvolvimento de aplicações. Minha experiência abrange tanto bancos de dados relacionais quanto não relacionais. Atualmente, estudo arquitetura e padrões de projeto para aumentar a qualidade e escalabilidade do meu código, sempre visando criar um código limpo e de fácil manutenção.
          </p>
          <p className="text-2xl">
            Além disso, planejo me aprofundar em testes unitários e serviços na nuvem, bem como em técnicas de containerização. Estou constantemente buscando aprimorar minhas habilidades para entregar soluções mais robustas e eficientes.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl  font-bold text-yellow-500 dark:text-rose-500 mb-4">
            BACKEND
          </h2>
          <p className="text-2xl">
            I&apos;m an enthusiastic user of the Spring ecosystem and object-oriented
            programming (OOP). My expertise extends to both relational databases
            like MySQL, Postgres, and non-relational databases like MongoDB. I
            frequently use JWT for authentication and utilize mappers to
            simplify DTO creation, enhancing API communication to fit various
            VIEW layer demands
          </p>
          <p className="text-2xl">
            Additionally, I&apos;m studying testing and have started implementing
            unit tests in my projects. I have a strong interest in studying
            microservices and cloud technologies like AWS, Azure, and Google
            Cloud. I&apos;ve also developed applications using Node.js, employing
            frameworks such as Express and Nest.js, as well as a simple blog in
            Flask.
          </p>
        </div>
      </div>
    );
  }
};

export default BackendSkills;
