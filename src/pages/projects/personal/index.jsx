import Project from "@/components/Project";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useLanguage } from "@/contexts/LanguageContext";

const PersonalProjectPage = () => {
  const projects = [
    {
      title: "YK-Train - Workout tracker",
      description:
        "A application developed with React, TypeScript, Java Spring, and MySQL. Its primary function is to store gym workout performances over time. Users can log their training sessions, including exercises performed, sets, reps, and weights. The application provides a simple interface for easy data input and retrieval. With its efficient backend structure, it ensures quick and reliable storage of training data. Whether you're tracking progress or simply maintaining a training log, our companion offers a straightforward solution for storing workout performances",
      stacks: ["React", "Spring", "MySql"],
      repository: "https://github.com/yokotaerik/gym_workout_tracker",
      challenges:
        "In YK-Train , my main challenge was architecting the software. I worked extensively with various entities and how to connect and create the logic for the workout to maintain a template but have entities within it, creating a cascade of dependent entities. This required ensuring functional connectivity and proper management of dependencies.",
    },
    {
      title: "Yomaik - Social Media",
      description:
        "Yomaik is a social networking platform designed for users to share thoughts, post updates, and connect with others. It features secure user registration and login, post creation with comment and like functionality, following and followers system, and a personalized feed. Built with Java Spring Boot for the backend and MongoDB for flexible data storage, with a React frontend for interactive user interfaces. Dive in and build connections on Yomaik!",
      stacks: ["React", "Spring", "MongoDB"],
      repository: "https://github.com/yokotaerik/rede_social",
      challenges:
        "In Yomaik, my challenge was to integrate Spring with MongoDB for the first time. I had to grasp the basics of Spring and understand how MongoDB behaves with Spring. Additionally, it was my first experience with a document-based database.",
    },
    {
      title: "Easy Project - Project management",
      description:
        "The Project Management System is a web application developed in Java with Spring Framework and using MySQL as the database. It allows managers to create projects, add employees, and assign tasks, facilitating task distribution and monitoring. Focused on efficiency and transparency, the system provides an intuitive way to manage projects, track task progress, and ensure deadlines are met.",
      stacks: ["React", "Spring", "MySql"],
      challenges:
        "In Easy Project, my challenge was to understand Spring JPA and effectively work with MySQL as the database. This involved managing different permissions based on entities and ensuring these permissions were scoped to the project entity rather than a global context.",
    },
    {
      title: "DoceriaDaNanna - Order Tracker",
      description:
        "DoceriaDaNanna - Order Tracker is an application designed to streamline order management in a bakery or cafe setting. Built with Node.js, React, React Native, and PostgreSQL, it enables users to create tables, add orders associated with each table, and send orders to the kitchen for preparation. Once the kitchen completes an order, the waiter can then deliver it to the respective table. The application features a kitchen dashboard for order management and a mobile app for waiters to create and manage orders. With its efficient backend structure and user-friendly interfaces, DoceriaDaNanna - Order Tracker simplifies the process of managing orders, enhancing the overall customer experience.",
      stacks: ["Node.js", "React", "React Native", "PostgreSQL"],
      repository: "https://github.com/yokotaerik/doceriaDaNanna",
      challenges:
        "In DoceriaDaNanna, my main challenge was understanding Node.js and React.js as it was based on a course so. I had to comprehend the lectures and understand the significance of each concept. This project provided me with a solid foundation in React, which I later utilized to develop other front-ends.",
    },
  ];

  const projetos = [
    {
      title: "YK-Train - Acompanhamento de Treino",
      description:
        "Uma aplicação desenvolvida com React, TypeScript, Java Spring e MySQL. Sua função principal é armazenar o desempenho dos treinos na academia ao longo do tempo. Os usuários podem registrar suas sessões de treinamento, incluindo exercícios realizados, séries, repetições e pesos. A aplicação fornece uma interface simples para entrada e recuperação de dados. Com sua estrutura de backend eficiente, garante um armazenamento rápido e confiável dos dados de treinamento. Seja acompanhando o progresso ou simplesmente mantendo um registro de treinamento, nosso companheiro oferece uma solução direta para armazenar o desempenho do treino.",
      stacks: ["React", "Spring", "MySql"],
      repository: "https://github.com/yokotaerik/gym_workout_tracker",
      challenges:
        "No YK-Train , meu principal desafio foi arquitetar o software. Trabalhei extensivamente com várias entidades e como conectar e criar a lógica para o treinamento para manter um modelo, mas ter entidades dentro dele, criando uma cascata de entidades dependentes. Isso exigiu garantir conectividade funcional e gerenciamento adequado de dependências.",
    },
    {
      title: "Yomaik - Rede Social",
      description:
        "Yomaik é uma plataforma de rede social projetada para os usuários compartilharem pensamentos, postarem atualizações e se conectarem com outros. Possui registro e login seguro de usuário, criação de postagens com funcionalidade de comentário e curtida, sistema de seguidores e seguindo, e um feed personalizado. Construído com Java Spring Boot para o backend e MongoDB para armazenamento flexível de dados, com um frontend React para interfaces de usuário interativas. Explore e construa conexões no Yomaik!",
      stacks: ["React", "Spring", "MongoDB"],
      repository: "https://github.com/yokotaerik/rede_social",
      challenges:
        "No Yomaik, meu desafio foi integrar Spring com MongoDB pela primeira vez. Tive que compreender os fundamentos do Spring e entender como o MongoDB se comporta com o Spring. Além disso, foi minha primeira experiência com um banco de dados baseado em documentos.",
    },
    {
      title: "Easy Project - Gerenciamento de Projetos",
      description:
        "O Sistema de Gerenciamento de Projetos é uma aplicação web desenvolvida em Java com Spring Framework e usando MySQL como banco de dados. Permite que os gerentes criem projetos, adicionem funcionários e atribuam tarefas, facilitando a distribuição e o monitoramento de tarefas. Focado na eficiência e transparência, o sistema fornece uma maneira intuitiva de gerenciar projetos, acompanhar o progresso das tarefas e garantir que os prazos sejam cumpridos.",
      stacks: ["React", "Spring", "MySql"],
      challenges:
        "No Easy Project, meu desafio foi entender o Spring JPA e trabalhar efetivamente com o MySQL como banco de dados. Isso envolveu o gerenciamento de diferentes permissões com base em entidades e garantir que essas permissões fossem aplicadas à entidade do projeto e não a um contexto global.",
    },
    {
      title: "DoceriaDaNanna - Gerenciaddor de Pedidos",
      description:
        "DoceriaDaNanna - Gerenciaddor de Pedidos é uma aplicação projetada para simplificar o gerenciamento de pedidos em uma padaria ou café. Construído com Node.js, React, React Native e PostgreSQL, permite que os usuários criem mesas, adicionem pedidos associados a cada mesa e enviem pedidos para a cozinha para preparo. Uma vez que a cozinha completa um pedido, o garçom pode então entregá-lo à mesa respectiva. A aplicação possui um painel da cozinha para o gerenciamento de pedidos e um aplicativo móvel para garçons criarem e gerenciarem pedidos. Com sua estrutura de backend eficiente e interfaces amigáveis, o DoceriaDaNanna - Rastreador de Pedidos simplifica o processo de gerenciamento de pedidos, aprimorando a experiência geral do cliente.",
      stacks: ["Node.js", "React", "React Native", "PostgreSQL"],
      repository: "https://github.com/yokotaerik/doceriaDaNanna",
      challenges:
        "No DoceriaDaNanna, meu principal desafio foi entender Node.js e React.js, pois era baseado em um curso. Tive que compreender as aulas e entender o significado de cada conceito. Este projeto me proporcionou uma base sólida em React, que posteriormente utilizei para desenvolver outros front-ends.",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = { duration: 0.75, ease: "easeInOut" };

  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <motion.div
        className="min-h-screen"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
      >
        <Head>
          <title>Projetos | Yokota</title>
        </Head>
        <h1 className="text-7xl md:text-8xl font-bold text-yellow-500 dark:text-rose-500 mb-12 mt-16">
          Projetos pessoais
        </h1>
        <div className="flex flex-wrap gap-8">
          {projetos.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              stacks={project.stacks}
              challenges={project.challenges}
              icon={project.icon}
              repository={project.repository}
            />
          ))}
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="min-h-screen"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
      >
        <Head>
          <title>Projects | Yokota</title>
        </Head>
        <h1 className="text-7xl md:text-8xl font-bold text-yellow-500 dark:text-rose-500 mb-12 mt-16">
          Personal projects
        </h1>
        <div className="flex flex-wrap gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              stacks={project.stacks}
              challenges={project.challenges}
              icon={project.icon}
              repository={project.repository}
            />
          ))}
        </div>
      </motion.div>
    );
  }
};

export default PersonalProjectPage;
