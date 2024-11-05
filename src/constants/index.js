import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  python,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "App Developer Intern",
    company_name: "Oasis Infobyte",
    company_website: "https://oasisinfobyte.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
"Developed and maintained Android applications using Kotlin and Java, focusing on enhancing user experience and functionality during my internship at Oasis Infobyte.",
"Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality mobile applications.",
"Implemented responsive design and ensured cross-device compatibility to provide a seamless user experience across various Android devices.",
"Participated in code reviews, providing constructive feedback to peers and contributing to the overall improvement of code quality and performance.",
    ],
  },
  {
    title: "Android App Developer Intern",
    company_name: "CodeClause ",
    company_website: "https://internship.codeclause.com/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
     "Developed and maintained three mobile applications: a Translation App for real-time language translation, a Calculator App featuring both basic and advanced functions, and a Sticky Notes App for efficient note management.",
      "Collaborated with a team of developers to implement user-friendly interfaces and enhance app functionality.",
      "Utilized Kotlin and Java to ensure optimal performance and reliability across all applications.",
      "Participated in code reviews and contributed to maintaining coding standards and best practices.",
    
    ],
  },
  {
    title: "App developer intern",
    company_name: "Encryptix",
    company_website: "https://encryptix.in/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "June 2024 - Jul 2024",
    points: [
     "Designed and developed three mobile applications: a To-Do List App for task management, a Quotes Generator App that provides inspirational quotes, and an Alarm Clock App with customizable features.",
      "Implemented user-friendly interfaces using Android Studio and XML, enhancing the user experience through intuitive design.",
      "Integrated third-party libraries to add functionality, such as notifications for the Alarm Clock and data persistence for the To-Do List.",
      "Collaborated with peers to troubleshoot and optimize application performance, ensuring high-quality deliverables."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Octa-Net",
    company_website: "https://octanet.in/",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
      "Designed and developed a responsive landing page that effectively showcased the company's services and offerings, utilizing HTML, CSS, and JavaScript.",
      "Created an e-learning website that included interactive features for users to engage with educational content, enhancing user experience and accessibility.",
      "Collaborated with designers and backend developers to ensure seamless integration of front-end components with backend services.",
      "Implemented best practices in web development, including cross-browser compatibility and performance optimization."
    ],
  },
];

const educationDetails = [
  {
    school_name: "Bengal Institute Of Technology",
    degree: "Btech-CSE",
    date: "2022 - 2026",
    icon: "/path/to/school-icon.png",
    iconBg: "#4a90e2",
    points: [
     "Learned C, C++, Java, and Python.",
    "Currently learning Artificial Intelligence and Machine Learning.",
    "Team leader of Tech-Titans, achieving 1st Runner-up in an inter-college software project competition.",
    "Developed a PDF question answering system with an AI chat option.",
    "Implemented user authentication with registration and login functionality."
  ]
  },
  {
    school_name: "St.Soldiers Convent School[H.S]",
    degree: "Higher Secondary School Certificate",
    date: "2019 - 2021",
    icon: "/path/to/school-icon.png",
    iconBg: "#f39c12",
    points: [
      "Studied core subjects including Physics, Chemistry, Mathematics, and Computer Science.",
    "Participated in an interschool competition and represented at the national level in Jadavpur for a project exhibition.",
    "Participated in Wipro Sustainable Development Camp.",
    "Developed strong concepts in Physics and Chemistry.",
    "Achieved the 2nd highest marks in the school in the Higher Secondary Examination."
    ]
  },
  {
    school_name: "St.Soldiers Convent School[H.S]",
    degree: "Secondary High School Certificate",
    date: "2015-2019",
    icon: "/path/to/college-icon.png",
    iconBg: "#2ecc71",
    points: [
       "Focused on Science stream with core subjects Physics, Chemistry, and Mathematics.",
      "Built foundational knowledge in computer coding during high school.",
    ]
  }
];




const projects = [
  {
    name: "E-Learning website",
    description:
      "I have developed an eLearning website with full authentication and login features, offering users secure access to a diverse course catalog. The platform also includes a secure payment gateway for hassle-free course purchases, enhancing the overall learning experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://e-learning2024.vercel.app/",
  },
  {
    name: "Eduhub Learning Platform",
    description:
      "This website offers a comprehensive range of educational resources completely free of cost. Users can easily register and log in through a secure online authentication system, allowing them to access all features and courses without any fees.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://eduhub2024.netlify.app/index1.html",
  },
  {
    name: "Resume Builder",
    description:
      "I have developed an intuitive Resume Builder that allows users to create their resumes effortlessly by entering their name, profession, and relevant details. Users can preview their resume in real time and download it in a convenient format, making the job application process seamless and efficient.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://resumebuilder2024.netlify.app/",
  },
  {
    name: "AI PDF Question/Answering with Chatbot Feature",
    description:
      "I have implemented an AI-driven PDF question-answering system that allows users to interact with a chatbot. Users can upload PDF documents and ask questions related to the content, enabling quick and accurate responses that enhance their understanding of the material.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
      {
        name: "PyPDF2",
        color: "green-text-gradient",
      },
      {
        name: "Gemini",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140", //Here link of aichat
  },
  {
    name: "Certificate Generator",
    description:
      "I have developed an intuitive Certificate Generator using HTML, CSS, and JavaScript that allows users to create personalized certificates easily. The application features seven unique certificate designs to choose from, catering to various occasions. Users can input the recipient's name, see a real-time preview, and download the certificate in high-quality formats with just one click. Its responsive design ensures a seamless experience on any device. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://advance-tech.netlify.app/",
  },
  {
    name: "Gym Website",
    description:
      " I have developed a comprehensive gym website that includes a user-friendly appointment booking system and all essential features for managing memberships and services. Users can view available classes, schedule appointments, and check pricing for various membership plans, ensuring a seamless experience for both members and staff. The website also offers information on gym facilities, trainers, and special promotions, enhancing the overall user experience.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://gymwebsite2024.netlify.app/",
  },
];

const personalInfo = {
  name: "Jyotish Yadav",
  fullName: "Jyotish Yadav",
  email: "jyotishyadavcse@gmail.com",
  role: "Software Developer",
  about: ` I am a versatile software developer with a strong foundation in HTML, CSS, and Java, as
   well as expertise in the MERN stack and Android app development. I have also dabbled in Flutter,
    enhancing my ability to create cross-platform applications. Currently, I am expanding my skill set
     by learning AI and machine learning to leverage these technologies in innovative ways.
      I am passionate about collaborating with clients to develop efficient, scalable, and user-friendly 
      solutions that address real-world challenges. Let's work together to bring your ideas to life!
`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1tXjtn4sFqgr9GqGAhaRkNqn_oUYRUQmB/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/jyotish-yadav-16130621a/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Jyotish2002",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  educationDetails,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
