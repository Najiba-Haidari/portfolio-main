import React from "react";
import Project from "./Project.js";
import "animate.css"
import travel from '../../images/travel-forecast.png'
import exerciseXpert from "../../images/exerciseXpert.jpeg"
import wizard from "../../images/workout-wizard.png"
import readme from "../../images/readme.png"
import ecommerce from "../../images/ecommerce.jpg"
import weather from "../../images/weather-dashboard.jpeg"
import workScheduler from "../../images/scheduler.png"
import tictactoe from "../../images/tictactoe.jpeg"
import notetaker from "../../images/notetaker.jpeg"
import passwordGenerator from "../../images/password-generator.png"

const projects = [
  {
    title: "Travel Forecast - Project 1",
    imagePath: travel,
    imageUrl: "https://github.com/Najiba-Haidari/Travel-Forecast",
    alt: "Travel Forecast",
    language: "Javascript",
  },
  {
    title: "exerciseXpert-react",
    imagePath: exerciseXpert,
    imageUrl: "https://github.com/Najiba-Haidari/exerciseXpert-react",
    alt: "exerciseXpert in React",
    language: "Javascript, React.js, React hooks, Vitejs",
  },
  {
    title: "Workout Wizard App - Project 3",
    imagePath: wizard,
    imageUrl: "https://github.com/Najiba-Haidari/workout-wizard-app",
    alt: "Workout Wizard App",
    language: "MVC, MERN, React",
  },
  {
    title: "Read-me Generator",
    imagePath: readme,
    imageUrl: "https://github.com/Najiba-Haidari/readme-generator",
    alt: "Read-me Generator",
    language: "Node.js",
  },
  {
    title: "E-commerce Backend",
    imagePath: ecommerce,
    imageUrl: "https://github.com/Najiba-Haidari/ecommerce-backend",
    alt: "E-commerce Backend",
    language: "Node.js, Express.js, Mysql2, Dotenv",
  },
  {
    title: "Weather Dashboard",
    imagePath: weather,
    imageUrl: "https://najiba-haidari.github.io/weather-dashboard/",
    alt: "Weather Dashboard",
    language: "Javascript",
  },
  {
    title: "Work Day Scheduler",
    imagePath: workScheduler,
    imageUrl: "https://github.com/Najiba-Haidari/week5-daily-scheduler",
    alt: "Work Day Scheduler",
    language: "Javascript",
  },
  {
    title: "Tic Tac Toe",
    imagePath: tictactoe,
    imageUrl: "https://github.com/Najiba-Haidari/tic-tac-toe",
    alt: "Tic Tac Toe",
    language: "Javascript, CSS, HTML",
  },
  {
    title: "Note Taker",
    imagePath: notetaker,
    imageUrl: "https://github.com/Najiba-Haidari/note-taker",
    alt: "Note Taker",
    language: "Javascript, Express.js",
  },
  {
    title: "Password Generator",
    imagePath: passwordGenerator,
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

