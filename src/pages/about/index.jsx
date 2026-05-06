import React from "react";
import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
  
} from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb, BiLogoSpringBoot } from "react-icons/bi";
import profilePic from "../../images/about-me.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutMe = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const { language } = useLanguage();

  const transition = { duration: 0.75, ease: "easeInOut" };

  if (language === "pt") {
    return (
      <motion.div
        className="flex flex-col gap-28 p-4"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
      >
        <Head>
          <title>Sobre mim | Yokota</title>
        </Head>
        <motion.h1
          className="text-7xl md:text-8xl font-bold text-yellow-500 dark:text-rose-500"
          variants={variants}
          transition={transition}
        >
          Bem vindo!
        </motion.h1>
        <div className="flex flex-col lg:flex-row justify-start gap-8">
          <motion.div variants={variants} transition={transition}>
            <div className="lg:w-[480px] w-full shadow-md">
              <Image src={profilePic} alt="Picture of the author" />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2"
            variants={variants}
            transition={transition}
          >
            <p className="text-2xl font-semibold">
              Meu nome é Erik Camara Yokota,sou um desenvolvedor de
              software Full-Stack nascido e criado em São Paulo, Brasil.
            </p>
            <p className="text-2xl font-semibold">
              Comecei a programar em 2023 e, desde o momento em que escrevi a
              minha primeira linha de código, soube que esta era a minha
              vocação. Desde então, dediquei-me a melhorar as minhas
              competências e conhecimentos nessa apaixonante área todos os dias.
            </p>
            <p className="text-2xl font-semibold">
              Atualmente, concentro-me em melhorar as minhas competências de
              desenvolvimento backend e construir aplicações pessoais para
              estudos e resolver os meus próprios problemas e os dos meus
              amigos.
            </p>
          </motion.div>
        </div>

        <div className="w-full flex flex-col gap-12">
          <div>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-2">
              Experiência profissional
            </h2>
            <p className="text-xl font-semibold">
              Desenvolvedor backend C# - Prime Technology
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-2">
              Academico
            </h2>
            <p className="text-xl font-semibold">
             Estou cursando Desenvolvimento de Software Multiplataforma na Fatec Jessen Vidal in São José dos Campos
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-4">
              Stacks
            </h2>
            <span className="flex text-8xl gap-4 text-blue-950 dark:text-white flex-wrap ">
              <FaPython title="Python" />
              <BiLogoSpringBoot title="SpringBoot" />
              <FaReact title="JavaScript" />
              <SiDotnet />
              <BsFiletypeSql title="SQL" />
              <BiLogoMongodb title="MongoDB" />
              <FaHtml5 title="HTML5" />
              <FaCss3 title="CSS3" />
              <FaGitAlt title="Git" />
            </span>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-2">
              AFK
            </h2>
            <p className="text-xl font-semibold">
              Fora do teclado, gosto de ir à academia, cozinhar comidas
              deliciosas.
            </p>
          </div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="flex flex-col gap-28 p-4"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
      >
        <Head>
          <title>About me | Yokota</title>
        </Head>
        <motion.h1
          className="text-7xl md:text-8xl font-bold text-yellow-500 dark:text-rose-500"
          variants={variants}
          transition={transition}
        >
          Greetings!
        </motion.h1>
        <div className="flex flex-col lg:flex-row justify-start gap-8">
          <motion.div variants={variants} transition={transition}>
            <div className="lg:w-[470px] w-full shadow-md">
              <Image src={profilePic} alt="Picture of the author" />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-6"
            variants={variants}
            transition={transition}
          >
            <p className="text-2xl font-semibold">
              My name is Erik Camara Yokota, and I am a Full-Stack Software
              Developer born and raised in São Paulo, Brazil.
            </p>
            <p className="text-2xl font-semibold">
              I started programming in 2023, and from the moment I wrote my
              first line of code, I knew this was my calling. Since then,
              I&apos;ve dedicated myself to improving my skills and knowledge in
              this exciting field every day.
            </p>
            <p className="text-2xl font-semibold">
              Currently, my focus is on enhancing my backend development skills
              and building personal applications to solve my own problems and
              those of my friends.
            </p>
          </motion.div>
        </div>

        <div className="w-full flex flex-col gap-12">
          <div>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-2">
              Work
            </h2>
            <p className="text-xl font-semibold">
              Backend developer C#  - Prime Technology  
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-2">
              Academic
            </h2>
            <p>
              I am currently studying Software Development at Fatec Jessen Vidal in São José dos Campos
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-4">
              Stacks
            </h2>
            <span className="flex text-8xl gap-4 text-blue-950 dark:text-white flex-wrap ">
              <FaPython title="Python" />
              <FaJava title="Java" />
              <IoLogoJavascript title="JavaScript" />
              <FaGitAlt title="Git" />
              <FaReact title="React" />
              <BsFiletypeSql title="SQL" />
              <BiLogoMongodb title="MongoDB" />
              <FaHtml5 title="HTML5" />
              <FaCss3 title="CSS3" />
            </span>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-2">
              AFK
            </h2>
            <p className="text-xl font-semibold">
              Away From Keyboard, I enjoy going to the gym, cooking delicious
              foods.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
};

export default AboutMe;
