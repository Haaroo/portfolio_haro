import { BellPlus, BookText, Briefcase, Brush, Code2,BriefcaseBusiness ,CodeSquare, Home,Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench, Instagram, Linkedin, Github,ShieldCheck } from "lucide-react";
import HtmlI from "./components/ui/icon-html";
import ReactI from "./components/ui/icon-react";
import TailwindCSS from "./components/ui/icon-tailwind";
import CssI from "./components/ui/icon-css";
import JavaScriptI from "./components/ui/icon-javaS";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={35} strokeWidth={1} />,
        src: "https://www.instagram.com/emmanuelharo_/",
    },
    {
        id: 2,
        logo: <Linkedin size={35} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/emmanuel-haro-8818631ba/",
    },
    {
        id: 3,
        logo: <Github size={35} strokeWidth={1} />,
        src: "https://github.com/Haaroo",
    },
];


export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+2 años de experiencia",
    },
    {
        id: 2,
        name: "Pruebas",
        icon: <UsersRound />,
        description: "+50 pruebas de usabilidad",
    },
    {
        id: 3,
        name: "Test case",
        icon: <Wrench />,
        description: "+100 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "Sobre mi",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Trabajos",
        icon: <BriefcaseBusiness size={20} />,
        link: "#portfolio",
    },
    {
        id: 4,
        title: "Experiencia",
        icon: <CodeSquare size={20} />,
        link: "#experience",
    },
    {
        id: 5,
        title: "Servicios",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 6,
        title: "Contacto",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/avatar.png",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },  
]

export const dataPortfolio = [
    {
        id: 1,
        title: "ERP - Biblioteca",
        image: "/image-1.png",
        iconosDev: 
        [
            {
                devIcon: <HtmlI />,
            },
            {
                devIcon: <CssI />,
            },
            {
                devIcon: <JavaScriptI />,
            },
        ],
        urlGithub: "https://github.com/Haaroo/CloudBook_modular",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Api - Soccer",
        image: "/image-2.png",
        iconosDev: [
            {
                devIcon: <ReactI />,
            },
            {
                devIcon: <JavaScriptI />,
            },
            {
                devIcon: <CssI />,  
            },
        ],
        urlGithub: "https://github.com/Haaroo/Api_soccer",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Trivia",
        image: "/image-3.png",
        iconosDev: [
            {
                devIcon: <HtmlI />,
            },
            {
                devIcon: <CssI />,
            },
            {
                devIcon: <JavaScriptI />,
            },
        ],
        urlGithub: "https://github.com/Haaroo/TriviaSoftware",
        urlDemo: "#!",
    },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development 🚀",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Experimentado",
                value: 85,
            },
            {
                name: "JavaScript",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "React",
                subtitle: "Experimentado",
                value: 80,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development 🔐",
        experience: [
            {
                name: "C#",
                subtitle: "Basic",
                value: 40,
            },
            {
                name: "Postgres DB",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "Python",
                subtitle: "Basic",
                value: 40,
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                value: 70,
            },
            {
                name: "PHP",
                subtitle: "Basic",
                value: 40,
            },
            {
                name: "Microsoft SSMSE",
                subtitle: "Experimentado",
                value: 70,
            },
        ],
    },
    {
        id: 3,
        title: "Technologies and tools ⚙️",
        experience: [
            {
                name: "GitHub",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "GitLab",
                subtitle: "Basic",
                value: 40,
            },
            {
                name: "NPM",
                subtitle: "Basic",
                value: 40,
            },
            {
                name: "PostMan",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "Jira",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Figma",
                subtitle: "Experimentado",
                value: 85,
            },
            {
                name: "Adobe XD",
                subtitle: "Intermedio",
                value: 70,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Automatización y Mejora de Procesos",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
    {
        id: 3,
        title: "Manual tester QA",
        icon: <ShieldCheck />,
        features: [
            {
                name: "Análisis exhaustivo de puntos de servicio",
            },
            {
                name: "Diseño de casos de prueba específicos",
            },
            {
                name: "Informe detallado de hallazgos y recomendaciones",
            },
            {
                name: "Validación de cumplimiento de estándares",
            },
            {
                name: "Validación de la usabilidad y experiencia del usuario",
            },
            {
                name: "Pruebas de integración de sistemas",
            },
            {
                name: "Pruebas de seguridad y privacidad",
            },
            {
                name: "Monitoreo y análisis de feedback de usuarios",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+52 5650177129",
        link: "tel:+525650177129",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/Haaroo",
        link: "https://github.com/Haaroo",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "emmanuelharo04@email.com",
        link: "mailto:test@test.com",
        icon: <Inbox />,
    },
];
