import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  samaritans,
  oist,
  nextinnovation,
  cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  portfolio,
  pglife,
  sortingvisualiser,
  aws,
  
      
} from "../assets";




export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Bachelors in Computer science",
    company_name: "GIET University, Gandhi Institute of Engineering and Technology, Gunupur",
    date: "2021-2024",
    points: [
      "Courses undertaken: Data Structures and Algorithms, Operating Systems, Database Management Systems, Distributed Computing, Object Oriented Programming, Computer Architecture, Computer Network, Compiler Design, Computer Graphics & Multimedia, Soft Computing, Cloud Computing, Information Security, Blockchain Technology, Analysis and Design of Algorithm, Artificial Intelligence, Software Engineering, Machine Learning, Data Science, Internet of Things.",
      "CGPA: 8.2/10",
    ],
  },
  {
    title: "Higher Secondary",
    company_name: "Utkal Gourav Madhusudan Institute of Technology, Rayagada - SCETVT",
    date: "2018-2021",
    points: [
      "Courses undertaken: Physics, Chemistry and Mathematics,Electrical",
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Kendriya Vidyalaya Rayagada - CBSE",
    date: "2008-2018",
    points: [
      "Courses undertaken: Science, Social Studies, Languages and Mathematics. etc",
      "CGPA: 4.8/10",
    ],
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [

];

const extracurricular = [
  
 
];

const projects = [
  {
    name: "Myntra Clone",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content to life. The website is divided into several main sections, including an about, Education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "Html",
        color: "red-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/tanmaya00879/Myntra-Clone",
    live_project_link: "https://github.com/tanmaya00879/Myntra-Clone",
  },
  {
    name: "YouTube-Clone",
    description:
      "This is a fully functional and full responsive Youtube clone where data is being fetched from the youtube API provided by Rapid Hub.It is possible to load videos for different categories mentioned in the left navigation. You can also click on a video to go to the video details page. You will be able to see all the video stats and suggestion videos on video details page. You can also search for any video on the website and search results are displayed.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: pglife,
    source_code_link: "https://github.com/tanmaya00879/Youtube-clone",
    live_project_link: "https://github.com/tanmaya00879/Youtube-clone",
  },
  {
    name: "FakeStore",
    description:
      "It is app like amazon,flipkart which we use to have product on the site which the product can be filter and give the result of the product we are using from fakestoreapi.com and fetch the api to create a product on the app.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: sortingvisualiser,
    source_code_link:
      "https://github.com/tanmaya00879/Fakestore-app",
    live_project_link: "https://github.com/tanmaya00879/Fakestore-app",
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
