export const NAME = "SAFEER MON EP"
export const EMAIL = "safeerep77@gmail.com"
export const ROLE = "MERN STACK DEVELOPER"
export const GITHUB_PROFILE = "https://github.com/safeerep"
export const LINKEDIN_PROFILE = "https://www.linkedin.com/in/safeer-ep/"
export const INSTAGRAM_PROFILE = "https://www.instagram.com/safeer_ep"
export const FORM_ACTION = "https://script.google.com/macros/s/AKfycbxSneugaxgUUhKO0ZKqekwqJCT0l3-h-jtDmjpb1PlKSbWEHacb-Nxw4sOelgSMNYSi/exec"
export const SHORT_DESCRIPTION = "Innovative MERN Stack Developer, expertly weaving MongoDB, Express.js, React.js, and Node.js to architect cutting-edge web applications. A dynamic problem solver with a commitment to crafting efficient, user-centric solutions."
export const WELCOME_TO_CONNECT_MESSAGE = "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
export const READY_TO_CONNECT_MESSAGE = "I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then do not hesitate to contact me."
export const SHORT_EXPLANATION_ABOUT_PROJECT = "Explore a collection of projects I initiated from the ground up, each undertaken with the purpose of learning and skill development."

// SKILLS
export const SKILLS = [
    "Typescript",
    "Javascript",
    "MongoDB",
    "Express JS",
    "React JS",
    "Node JS",
    "Git",
    "Github",
    "Docker",
    "Restful API",
    "Micro services",
    "Clean Architecture",
    "MVC",
    "Monolithic Architecture",
    "Firebase",
    "Postgres",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Next JS",
    "Figma",
]

// MAIN SERVICES - MAXIMUM 3 
import Code from "../img/code.png";
import VersionControll from "../img/git-logo.png";
import Play from "../img/games.png";
export const SERVICES = [
    {
        name: "Web Development",
        image: Code,
        description: "I specialize in writing clean, efficient code to bring innovative web solutions to life.",
        category: "Development",
        by: "MERN"
    },
    {
        name: "Version Controll",
        image: VersionControll,
        description: "With expertise in version control systems, I facilitate cohesive project collaboration.",
        category: "Deployment",
        by: "Git"
    },
    {
        name: "Maintenance",
        image: Play,
        description: "I take care of ongoing services by fixing issues to enhancing performance.",
        category: "Service",
        by: "Research"
    },
]

// PROJECTS
import Olx from "../img/olx.png";
import Netflix from "../img/netflix.png";
import EpCart from "../img/ep-cart.png"
import EpLink from "../img/ep-link.png"
export const PROJECTS = [
    {
        title:
            "EP-LINK - AN ADVERTISEMENT PLATFORM",
        description:
            `All the users will be able to add their products to showcase after login. 
            Build by using micro-service and clean architecture. 
            Used Rabbitmq as message broker to having communication between servers. 
            MERN project built From Scratch`,
        liveLink:
            "https://ep-link.vercel.app/",
        gitLink:
            "https://github.com/safeerep/ep-link-an-advertisement-platform",
        img: EpLink,
    },
    {
        title:
            "EP-CART - ECOMMERCE",
        description:
            `fully functional E-commerce web application with User & Admin Side. 
            Integrated online payment option with razorpay.
            MERN project built From Scratch`,
        liveLink:
            "https://ep-cart.onrender.com/",
        gitLink:
            "https://github.com/safeerep/ep-cart-ecommerce-with-node-express-mongodb",
        img: EpCart,
    },
    {
        title:
            "OLX",
        description:
            `Just a clone of OLX built using React. 
            Every loggined users can add their product's images with details to adveritse. 
            Using Firebase to having authentication and authorization`,
        liveLink:
            "https://olx-with-react-and-firebase.onrender.com/",
        gitLink:
            "https://github.com/safeerep/olx-with-react-and-firebase",
        img: Olx,
    },
    {
        title:
            "Netflix",
        description:
            "Just a clone of Netflix built using React. I have used the TMBD api for fetching the films in this website. Films can be dynamically loaded.",
        liveLink:
            "https://netflix-clone-with-react-and-tailwind.onrender.com/",
        gitLink:
            "https://github.com/safeerep/netflix-clone-with-react-and-tailwind",
        img: Netflix,
    },
];

// ONGOING-PROJECT
import EpCare from "../img/ep-care.png"

export const ONGOING_PROJECT = {
    title:
        "EP-CARE - HOSPITAL MANAGEMENT",
    description:
        `An application which will be useful for computerizing all the details regarding patients and hospital's management. 
        Building by using micro-service pattern. Using React for front-end and Nestjs will use for building backend.
        MERN project building From Scratch`,
    liveLink:
        "https://ep-care.onrender.com/",
    gitLink:
        "https://github.com/safeerep/ep-care",
    img: EpCare,
};