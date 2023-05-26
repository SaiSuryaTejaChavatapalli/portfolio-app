import SwiggyPrImg from "../images/swiggy-p-img.jpg";
import YoutubePrImg from "../images/youtube-p-img.jpg";
import QuizPrImg from "../images/quiz-p-img.png";
import ExpenseTrackerImg from "../images/expense-tracker-p-img.png";
import PortfolioPrImg from "../images/portfolio-p-img.png";
import FoodMunchPrImg from "../images/food-munch-p-img.png";
import TodoPrImg from "../images/todo-p-img.png";
export const projectsList = [
  {
    name: "Sai Surya Teja Foods",
    description:
      "Developed a Swiggy clone and integrated with swiggy Real world API, which is providing users with a seamless online food ordering experience. Implemented features such as browsing restaurants,browsing menus items of each restaurants,adding and removing items to cart and calculate prices dynamically,contact form to connect with users, Lazy loading and placing orders with toast notifications.",
    imgUrl: SwiggyPrImg,
    techUsed: [
      "React JS",
      "Tailwind CSS",
      "React-router-dom-V6",
      "Redux-Toolkit",
      "MaterialUI",
      "React-Hook-Form",
      "Fetch API",
      "Lazy Loading",
      "React-Testing-Library and Jest",
      "HTML5",
    ],
    liveLink: "https://swiggy-clone-sai-surya-teja.vercel.app/",
    gitHubLink: "https://github.com/SaiSuryaTejaChavatapalli/swiggy-clone",
  },
  {
    name: "MyTube",
    description:
      "Built a YouTube clone and integrated it with the YouTube API.Users can search for videos,watch them in React Player,and interact with features like live streaming and live commenting.Implemented Search with Debouncing,Implemented Live Comments using API polling.",
    imgUrl: YoutubePrImg,
    techUsed: [
      "React JS",
      "Tailwind CSS",
      "React-router-dom-V6",
      "Redux-Toolkit",
      "Fetch API",
      "Material UI Icons",
      "React Player",
      "Debouncing",
      "API Polling",
      "HTML5",
    ],
    liveLink: "https://youtube-clone-sai-surya-teja.vercel.app/",
    gitHubLink: "https://github.com/SaiSuryaTejaChavatapalli/youtube-clone",
  },
  {
    name: "Portfolio App",
    description:
      "Designed and developed a professional portfolio website which can showcase my skills,projects,and achievements.Implemented an intuitive user interface with smooth transitions to create an engaging experience for visitors.Users can contact me through the contact section and I can receive their messages to my Email.",
    techUsed: [
      "ReactJS",
      "React-Router-Dom",
      "HTML5",
      "SCSS",
      "MaterialUI",
      "EmailJS Library",
    ],
    imgUrl: PortfolioPrImg,
    liveLink: "https://portfolio-app-sai-surya-teja.vercel.app/",
    gitHubLink: "https://github.com/SaiSuryaTejaChavatapalli/portfolio-app",
  },
  {
    name: "Quiz app",
    description:
      "Built a dynamic quizzes website which enables users to participate in multiple quizzes on various topics.Implemented features like timed quizzes,score tracking,and interactive feedback to engage users and enhance their learning experience",
    imgUrl: QuizPrImg,
    techUsed: [
      "ReactJS",
      "React-Router-Dom",
      "HTML5",
      "CSS3",
      "MUI icons",
      "Browser API's",
    ],
    liveLink: "https://quiz-app-sai-surya-teja.vercel.app/",
    gitHubLink: "https://github.com/SaiSuryaTejaChavatapalli/quiz-app",
  },
  {
    name: "Expense Tracker",
    description:
      "Created an intuitive expense tracker application,which allows users to manage their finances effectively.Implemented features like adding expenses,delete expenses,calculate current balance dynamically,shows the transactions summary in an organized way and help users track their spending habits.",
    imgUrl: ExpenseTrackerImg,
    techUsed: ["ReactJS", "Context API", "HTML5", "CSS3", "CRUD"],
    liveLink: "https://expense-tracker-sai-surya-teja.vercel.app/",
    gitHubLink: "https://github.com/SaiSuryaTejaChavatapalli/expense-tracker",
  },
  {
    name: "Todo App",
    description:
      " Developed a user-friendly To-do app in which Users can create tasks,mark them as complete,delete tasks and organize their tasks based on priority.Implemented a clean and minimalistic design to enhance productivity.Todo tasks will persists even after we refresh or close the page,As it stores data on the localStorage of the Browser.",
    techUsed: ["Vannila Javascript", "HTML5", "CSS3", "Local Storage", "CRUD"],
    imgUrl: TodoPrImg,
    liveLink: "https://tejatodosapp.ccbp.tech/",
    gitHubLink: "https://github.com/SaiSuryaTejaChavatapalli/to-do-app-js",
  },
  {
    name: "Food Munch",
    description:
      " Designed and developed an online food website which is providing users with a visually appealing interface to explore a variety of cuisines. Implemented features like menu browsing with rich User Interface.This is a responsive application which adjusts according to the size of the device.",
    techUsed: ["HTML5", "CSS3", "Responsive-Web-Design", "BootStrap"],
    imgUrl: FoodMunchPrImg,
    liveLink: "https://tejafmunchapp.ccbp.tech/",
    gitHubLink: "https://github.com/SaiSuryaTejaChavatapalli/food-munch-app",
  },
];
