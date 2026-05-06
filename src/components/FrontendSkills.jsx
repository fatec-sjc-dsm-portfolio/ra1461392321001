import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import { FaReact } from "react-icons/fa";

const FrontendSkills = () => {
  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-500 dark:text-rose-500 mb-4">
            FRONTEND
          </h2>
          <p className="text-2xl">
            A maior parte do tempo, prefiro utilizar o framework React,
            especialmente o Next.js, juntamente com TypeScript para desenvolver
            aplicações web. Acho que o TypeScript melhora a manutenibilidade do
            código e proporciona uma experiência de desenvolvimento melhor como
            um todo. Além disso, frequentemente utilizo o Tailwind CSS como um
            framework de CSS de utilidade em primeiro lugar para simplificar o
            processo de estilização, permitindo iterações de desenvolvimento
            mais rápidas.
          </p>
          <p className="text-2xl">
            Em termos de desenvolvimento de aplicativos móveis, tenho
            experiência trabalhando com React Native. É um framework poderoso
            que permite construir aplicativos móveis multiplataforma usando
            JavaScript e React. Com o React Native, posso desenvolver
            aplicativos móveis para plataformas iOS e Android, maximizando a
            reutilização de código e reduzindo o tempo de desenvolvimento.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-500 dark:text-rose-500 mb-4">
            FRONTEND
          </h2>
          <p className="text-2xl">
            Most of the time, I prefer to utilize the React framework,
            especially Next.js, coupled with TypeScript to develop web
            applications. I find that TypeScript enhances code maintainability
            and provides a better development experience overall. Additionally,
            I often leverage Tailwind CSS as a utility-first CSS framework to
            streamline the styling process, allowing for faster development
            iterations.
          </p>
          <p className="text-2xl">
            In terms of mobile app development, I have experience working with
            React Native. It&apos;s a powerful framework that allows for
            building cross-platform mobile applications using JavaScript and
            React. With React Native, I can efficiently develop mobile apps for
            both iOS and Android platforms, maximizing code reusability and
            reducing development time.
          </p>
        </div>
      </div>
    );
  }
};

export default FrontendSkills;
