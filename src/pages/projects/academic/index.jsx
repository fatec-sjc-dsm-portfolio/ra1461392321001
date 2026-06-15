import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectOnFatecApi from "@/components/ProjectOnFatecApi";


// - 1ª Sprint: Modelagem do banco de dados e criação inicial da estrutura do projeto. Fui responsável pela implementação do sistema de autenticação via JWT, tanto na tela quanto no backend, além da integração com o backend para adicionar anexos e criar projetos.\n
// - 2ª Sprint: Fui responsável pela filtragem dos dados dos projetos através de palavras-chave utilizando predicates no repositório Java, além de criar todo o fluxo responsável por filtrar os projetos que estão prestes a vencer e colocá-los em uma tela de alerta. Ademais, também contribuí para a refatoração do frontend.\n
// - 3ª Sprint: Fui responsável por criar os campos sensíveis dos projetos, que o administrador pode ocultar do público geral. Construí todo o fluxo desde o backend ao frontend, além de ajudar a estilizar o frontend e criar um componente para download de arquivos PDF e Excel.\n
// - 4ª Sprint: Em progresso.`,

const AcademicProjectsPage = () => {

  const projetos = [
    {
      title: "Plataforma de Análise ESG para Propriedades Rurais",
      description: `Plataforma web para análise de aspectos Ambientais, Sociais e de Governança (ESG) de propriedades rurais no estado de São Paulo, integrando dados públicos de fontes oficiais como INPE, FUNAI e ICMBio.
O sistema recebe consultas em linguagem natural, identifica a intenção do usuário e apresenta dados ambientais rastreáveis em um mapa interativo. A solução também permite executar, agendar e acompanhar o pipeline de atualização das bases públicas, além de armazenar o histórico de conversas dos usuários.`,
      challenges: `1ª Sprint: desenvolvi o pipeline de PLN, desde o pré-processamento e a classificação de intenções até a busca semântica. Também contribuí no mapa e no agendamento das atualizações.

2ª Sprint: implementei retentativas e o rastreamento das execuções do ETL. No frontend, integrei o acompanhamento do pipeline e os resultados de cada fonte de dados.

3ª Sprint: desenvolvi a persistência e a consulta do histórico de conversas, com autenticação e visão administrativa. Também integrei esses recursos ao frontend.`,
      stacks: ["Python", "FastAPI", "NLTK", "SpaCy", "scikit-learn", "PostgreSQL", "pgvector", "Next.js", "React", "TypeScript", "Leaflet"],
      softSkills: `Raciocínio analítico para decompor o processamento de linguagem natural e o ETL em etapas rastreáveis.
Proatividade na investigação de falhas de integrações externas e na criação de mecanismos de retentativa e monitoramento.
Colaboração entre frontend e backend para alinhar contratos da API, autenticação e experiência de uso.`,
      repository: "https://github.com/Sync-FATEC/API-2026-6SEM",
      semester: 6,
      year: "2026",
    },
    {
      title: "Base Administrativa da Guarnição de Caçapava – Sistema de Controle de Estoque e Agendamentos",
      description: `A Base Administrativa da Guarnição de Caçapava enfrentava dificuldades no controle de materiais do almoxarifado e da farmácia militar devido a processos manuais, retrabalho e risco elevado de erros.
Um sistema centralizado foi desenvolvido para gerenciamento de estoque, autenticação via login, leitura de QR Code, alertas automáticos de validade e quantidade, além de relatórios estratégicos para decisões logísticas.
A solução trouxe automação, rastreabilidade e mais segurança no fluxo de materiais.`,
      challenges: `1ª Sprint: Modelagem do banco de dados, CRUDs iniciais e telas do sistema; gerenciamento de acesso por perfil.
2ª Sprint: Integração com Excel para cadastro em massa de militares; logs de alterações no estoque para auditoria e rastreabilidade.
3ª Sprint: Desenvolvimento do módulo de agendamentos para organizar visitas, retiradas e atendimentos na plataforma.`,
      stacks: ["Express TypeScript", "Flutter", "React", "Postgres"],
      softSkills: `Comunicação efetiva com requisitos militares e transformação de processos tradicionais em fluxos digitais claros.
Proatividade ao antecipar necessidades do cliente e propor melhorias como logs detalhados.
Colaboração auxiliando colegas a padronizar telas, componentes e estruturas de backend.`,
      repository: "https://github.com/Sync-FATEC/API-2025.2-5SEM",
      semester: 5,
      year: "2025/2",
    },
    {
      title: "TECSUS – Sistema Gerenciador de Estações Meteorológicas",
      description: `Projeto voltado para monitoramento, armazenamento e análise de dados meteorológicos coletados por estações distribuídas em diversos locais.
A solução permitiu alertas automatizados, visualização em dashboards e centralização das leituras de sensores.`,
      challenges: `1ª Sprint: Modelagem do banco de dados; sistema de alertas baseado em limites críticos de temperatura, pluviosidade e umidade.
2ª Sprint: Criação de fluxo de ingestão de dados usando MongoDB como banco intermediário; pipeline periódico para validar e migrar dados para o banco relacional.
3ª Sprint: Desenvolvimento de relatórios e dashboards com métricas e análises históricas.`,
      stacks: ["Express TypeScript", "MongoDB", "Postgres", "React", "Python"],
      softSkills: `Raciocínio analítico para estruturar o fluxo de dados entre bancos.
Comunicação multidisciplinar alinhando equipe técnica e especialistas em sensores.
Trabalho em equipe auxiliando colegas na leitura e interpretação da modelagem do banco.`,
      repository: "https://github.com/Sync-FATEC/API-2025.1-4SEM",
      semester: 4,
      year: "2025/1",
    },
    {
      title: "FAPG - Portal de transparência",
      description: `API do 3º semestre construída pelo grupo Sync que consiste em um portal de transparência para a fundação FAPG, permitindo publicação de projetos, administração de bolsistas e auditoria de modificações, com dashboards interativas.`,
      stacks: ["Spring Boot", "React", "MySql"],
      challenges: `1ª Sprint: Modelagem do banco e implementação do JWT no backend e frontend; anexos e criação de projetos.
2ª Sprint: Filtros avançados usando predicates e criação da tela de projetos prestes a vencer.
3ª Sprint: Campos sensíveis configuráveis pelo administrador; download de PDF e Excel; refatoração do frontend.
4ª Sprint: Em andamento.`,
      softSkills: `Ajuda a novos membros com explicação de arquitetura; comunicação e colaboração com o time; suporte técnico durante refatorações.`,
      repository: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
      semester: 3,
      year: "2024/2",
    },
    {
      title: "Woodpecker - HelpDesk",
      description: `Sistema de HelpDesk para gerenciamento de funcionários, tickets e SLAs, com dashboards, envio automático de tickets e autenticação via JWT.`,
      stacks: ["Node", "React", "MySql"],
      challenges: `1ª Sprint: Obtenção de requisitos e modelagem do banco.
2ª Sprint: Construção inicial da API em Node e React; CRUDs; JWT.
3ª Sprint: CRUDs complexos, upload de imagens e middlewares de permissão.
4ª Sprint: Gráficos com ReCharts e métricas para o dashboard.`,
      softSkills: `Atuação como Scrum Master conciliando comunicação do time; auxílio técnico em React e Node; resolução de conflitos internos no grupo.`,
      repository: "https://github.com/yokotaerik/API-2024.01",
      semester: 2,
      year: "2024/1",
    },
    {
      title: "Criança Renal",
      description: `Projeto informativo sobre doença renal crônica infantil, com blog, sistema de report e perfil administrador.`,
      stacks: ["Flask", "MySql"],
      challenges: `1ª Sprint: Wireframe da homepage.
2ª Sprint: Requisitos e implementação do banco; login e sessão.
3ª Sprint: Criação e exibição de posts.
4ª Sprint: Correções e melhorias.`,
      softSkills: `Proatividade ao resolver tarefas tecnicamente difíceis; resiliência ao lidar com envio de imagens no blog; auxílio a colegas iniciantes em programação.`,
      repository: "https://github.com/Daiene/Pixels",
      semester: 1,
      year: "2023/2",
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
          Projetos acadêmicos
        </h1>
        <div className="flex flex-wrap gap-8">
          {projetos.map((project, index) => (
            <ProjectOnFatecApi
              key={index}
              title={project.title}
              semester={project.semester}
              year={project.year}
              description={project.description}
              stacks={project.stacks}
              repository={project.repository}
              softSkills={project.softSkills}
              challenges={project.challenges}
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
          Academic projects
        </h1>
        <div className="flex flex-wrap gap-8">
          {projetos.map((project, index) => (
            <ProjectOnFatecApi
              key={index}
              title={project.title}
              semester={project.semester}
              year={project.year}
              description={project.description}
              stacks={project.stacks}
              repository={project.repository}
              softSkills={project.softSkills}
              challenges={project.challenges}
            />
          ))}
        </div>
      </motion.div>
    );
  }
};

export default AcademicProjectsPage;
