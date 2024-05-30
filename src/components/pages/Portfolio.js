import React from "react";
import Project from "./Project.js";
import "animate.css"

// const styles= {
//   heading:{
//     fontSize: "2.5rem",
//     fontWeight: "bold",
//     fontFamily :"'Times New Roman', Times, serif",
//     color:"#126d5e",
//     paddingTop: "90px",
//   }
// }

const projects = [
  {
    title: "Travel Forecast - Project 1",
    imagePath: "./images/travel-forecast.png",
    imageUrl: "https://github.com/Najiba-Haidari/Travel-Forecast",
    alt: "Travel Forecast",
    language: "Server-Side APIs and Javascript",
  },
  {
    title: "exerciseXpert-react",
    imagePath: "./images/exerciseXpert.jpeg",
    imageUrl: "https://github.com/Najiba-Haidari/exerciseXpert-react",
    alt: "exerciseXpert in React",
    language: "Javascript, React.js, React hooks, Vitejs",
  },
  {
    title: "Workout Wizard App - Project 3",
    imagePath: "./images/workout-wizard.png",
    imageUrl: "https://github.com/Najiba-Haidari/workout-wizard-app",
    alt: "Workout Wizard App",
    language: "MVC, MERN, React",
  },
  {
    title: "Read-me Generator",
    imagePath: "./images/readme.png",
    imageUrl: "https://github.com/Najiba-Haidari/readme-generator",
    alt: "Read-me Generator",
    language: "Node.js",
  },
  {
    title: "E-commerce Backend",
    imagePath: "./images/ecommerce.jpeg",
    imageUrl: "https://github.com/Najiba-Haidari/ecommerce-backend",
    alt: "E-commerce Backend",
    language: "Node.js, Express.js, Mysql2, Dotenv",
  },
  {
    title: "Weather Dashboard",
    imagePath: "./images/weather-dashboard.jpeg",
    imageUrl: "https://najiba-haidari.github.io/weather-dashboard/",
    alt: "Weather Dashboard",
    language: "Javascript, Server-Side APIs",
  },
  {
    title: "Work Day Scheduler",
    imagePath: "./images/scheduler.png",
    imageUrl: "https://github.com/Najiba-Haidari/week5-daily-scheduler",
    alt: "Work Day Scheduler",
    language: "Javascript, Third Party APIs",
  },
  {
    title: "Tic Tac Toe",
    imagePath: "./images/tictactoe.jpeg",
    imageUrl: "https://github.com/Najiba-Haidari/tic-tac-toe",
    alt: "Tic Tac Toe",
    language: "Javascript, CSS, HTML",
  },
  {
    title: "Note Taker",
    imagePath: "./images/notetaker.jpeg",
    imageUrl: "https://github.com/Najiba-Haidari/note-taker",
    alt: "Note Taker",
    language: "Javascript, Express.js",
  },
  {
    title: "Password Generator",
    imagePath: "./images/password-generator.png",
    imageUrl: "https://github.com/Najiba-Haidari/week3-challenge-password-generator",
    alt: "Password Generator",
    language: "Javascript",
  },
];

export default function Porfolio() {

  return (
    <div className="my-4 py-5 " id="portfolio">
      <h1 className="text-center animate__animated animate__bounceInRight" >My Portfolio</h1>
      <div className="container ">
        <div className="d-flex flex-wrap justify-content-evenly m-2 p-4 animate__animated animate__bounceInRight">
          <Project 
          project={projects} 
          // title={projects.title} 
          // imagePath={projects.imagePath}
          // imageUrl={projects.imageUrl}
          // alt={projects.alt}
          // language={projects.language}
           />
        </div>
      </div>
    </div>
  );
}

