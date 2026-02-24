import { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { pt: 'Inicio', en: 'Home' },
  'nav.projects': { pt: 'Projetos', en: 'Projects' },
  'nav.about': { pt: 'Sobre mim', en: 'About me' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },

  // Hero
  'hero.greeting': { pt: 'Ola, meu nome é', en: 'Hi, my name is' },
  'hero.role': { pt: 'Desenvolvedor Front-End Junior', en: 'Junior Front-End Developer' },
  'hero.description': {
    pt: 'Estou realizando esse portfolio para verificarem alguns de meus projetos, mas estou sempre buscando evoluir e aprendendo tecnologias utilizadas no mercado. Atualmente sou desenvolvedor front-end e busco oportunidades nessa area, mas estudando tecnologias Back-End.',
    en: "I created this portfolio to showcase some of my projects, but I'm always looking to evolve and learn new market technologies. Currently I'm a front-end developer seeking opportunities in this area, while also studying Back-End technologies.",
  },
  'hero.cta': { pt: 'Ver projetos', en: 'View projects' },
  'hero.contact': { pt: 'Entre em contato', en: 'Get in touch' },

  // Projects
  'projects.title': { pt: 'Projetos de estudo', en: 'Study projects' },
  'projects.subtitle': {
    pt: 'Veja alguns dos meus projetos recentes',
    en: 'Check out some of my recent projects',
  },

  // Project items
  'project1.title': { pt: 'Buscador de contatos', en: 'Contact Finder' },
  'project1.desc': {
    pt: 'Seria um verificador de contatos, onde e possivel pesquisar e caso tenha o contato no array, vai ser filtrado para voce',
    en: 'A contact verifier where you can search and if the contact exists in the array, it will be filtered for you',
  },
  'project2.title': { pt: 'Carregar e filtrar burger utilizando array', en: 'Load and filter burgers using array' },
  'project2.desc': {
    pt: 'Projeto para listar, filtrar e somar 10% nos produtos listados',
    en: 'Project to list, filter and add 10% to listed products',
  },
  'project3.title': { pt: 'Conversor de moeda', en: 'Currency Converter' },
  'project3.desc': {
    pt: 'Projeto que consiste em converter as moedas, conforme o usuario escolher, mas nao e utilizado valor oficial da moeda.',
    en: 'Project that converts currencies as chosen by the user, but does not use the official currency value.',
  },
  'project4.title': { pt: 'Controle de estoque', en: 'Stock Control' },
  'project4.desc': {
    pt: 'Controle de estoque, onde lista os produtos em estoque em uma tabela, somando a media do estoque, valores do produto e listando tambem produtos com baixo estoque',
    en: 'Stock control that lists products in a table, calculating stock averages, product values and also listing low stock products',
  },
  'project5.title': { pt: 'Clone mercado livre', en: 'Mercado Livre Clone' },
  'project5.desc': {
    pt: 'Pagina clone do mercado livre, onde conseguimos filtrar os produtos que tem na pagina.',
    en: 'Mercado Livre clone page where we can filter the products on the page.',
  },
  'project6.title': { pt: 'Starbucks', en: 'Starbucks' },
  'project6.desc': {
    pt: 'Projeto do starbucks, onde e possivel trocar as cores e a imagem do copo dinamicamente e tirar duvidas com o bot, verificando valores e produtos do starbucks.',
    en: 'Starbucks project where you can dynamically change colors and cup images and ask questions to the bot, checking Starbucks values and products.',
  },
  'project7.title': { pt: 'Site delivery', en: 'Delivery Website' },
  'project7.desc': {
    pt: 'Este projeto consiste no desenvolvimento de uma interface moderna e intuitiva para um serviço de delivery, focada na experiência do usuário (UX). O layout foi construído utilizando HTML5 semântico e CSS3 puro, priorizando uma navegação fluida. O destaque do projeto é a vitrine de produtos organizada em um grid, que apresenta os itens de forma clara, com preços em evidência e efeitos de hover que aumentam a interatividade. O design utiliza uma paleta de cores voltada para o setor gastronômico, garantindo que o produto visual seja tão atraente quanto o lanche real.',
    en: 'This project consists of developing a modern and intuitive interface for a delivery service, focused on user experience (UX). The layout was built using semantic HTML5 and pure CSS3, prioritizing smooth navigation. The highlight of the project is the product showcase organized in a responsive grid, which displays items clearly, with prominent pricing and hover effects that enhance interactivity. The design uses a color palette tailored to the food industry, ensuring the visual product is as appealing as the real snack.',
  },
  'project8.title': { pt: 'Mario Encanador', en: 'Mario Plumber' },
  'project8.desc': {
    pt: 'Uma landing page temática e criativa inspirada no universo do Super Mario, desenvolvida para simular um serviço real de manutenção hidráulica. O projeto transforma a estética clássica dos jogos da Nintendo em uma solução moderna de prestação de serviços, focando em conversão e facilidade de contato, no qual é possivel mandar mensagem no whatsapp e também enviar e-mail com nome, contato e  descrição do problema que esta tendo.',
    en: 'A themed and creative landing page inspired by the Super Mario universe, developed to simulate a real plumbing maintenance service. The project transforms the classic Nintendo game aesthetic into a modern service delivery solution, focusing on conversion and ease of contact, where users can send a message via WhatsApp and also send an email with their name, contact information, and a description of the issue they are experiencing.',
  },
  'project9.title': { pt: 'Sorteador', en: 'Random Number Picker' },
  'project9.desc': {
    pt: 'Uma ferramenta web prática e minimalista desenvolvida para realizar sorteios rápidos entre dois valores definidos pelo usuário. O foco do projeto foi criar uma interface limpa onde a funcionalidade principal é executada de forma instantânea e sem distrações.',
    en: 'A practical and minimalist web tool developed to perform quick draws between two values defined by the user. The focus of the project was to create a clean interface where the main functionality is executed instantly and without distractions',
  },

  // About
  'about.title': { pt: 'Sobre mim', en: 'About me' },
  'about.text': {
    pt: 'Minha jornada é marcada pela versatilidade e pelo foco em resultados. De ex-jogador de futebol profissional a suporte técnico especializado, sempre busquei entender como as engrenagens funcionam para entregar a melhor experiência. Com passagens pelos setores de vendas e suporte de softwares criticos (Postos e Laboratórios), desenvolvi uma visão aguçada para a resolução de problemas e o atendimento ao usuário. Atualmente, estou focado na transição de carreira para Desenvolvimento Front-end, unindo minha experiência em suporte com o poder do HTML, CSS e JavaScript para criar interfaces intuitivas e eficientes. Estou em busca da minha primeira oportunidade para aplicar tecnica e determinacao em projetos reais.',
    en: "My journey is marked by versatility and a focus on results. From a former professional football player to specialized technical support, I've always sought to understand how the gears work to deliver the best experience. With experience in sales and critical software support (Gas Stations and Laboratories), I developed a sharp vision for problem-solving and user support. Currently, I'm focused on transitioning my career to Front-end Development, combining my support experience with the power of HTML, CSS and JavaScript to create intuitive and efficient interfaces. I'm looking for my first opportunity to apply technique and determination to real projects.",
  },

  // Contact
  'contact.title': { pt: 'Gostou do meu portfolio?', en: 'Liked my portfolio?' },
  'contact.subtitle': {
    pt: 'Entre em contato e acompanhe minhas redes sociais!',
    en: 'Get in touch and follow my social media!',
  },

  // Footer
  'footer.rights': { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
