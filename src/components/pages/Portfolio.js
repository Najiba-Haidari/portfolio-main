import React from "react";
import Project from "./Project.js";
import "animate.css"

const styles= {
  heading:{
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily :"'Times New Roman', Times, serif",
    color:"#126d5e",
    paddingTop: "90px",
  }
}

const projects = [
  {
    title: "Travel Forecast - Project 1",
    imagePath: "/najiba-portfolio/images/travel-forecast.png",
    imageUrl: " https://paulddncn.github.io/Travel-Forecast/",
    alt: "Travel Forecast",
    language: "Server-Side APIs and Javascript",
  },
  {
    title: "Popular Times - Project 2",
    imagePath: "/najiba-portfolio/images/popular-times.jpeg",
    imageUrl: "https://the-popular-times.herokuapp.com/",
    alt: "Popular Times",
    language: "MVC, Node, Handlebars, SQL, Bulma, Javascript",
  },
  {
    title: "Workout Wizard App - Project 3",
    imagePath: "/najiba-portfolio/images/workout-wizard.png",
    imageUrl: "https://workout-wizard-app-99.herokuapp.com/",
    alt: "Workout Wizard App",
    language: "MVC, MERN, React",
  },
  {
    title: "Weather Dashboard",
    imagePath: "/najiba-portfolio/images/weather-dashboard.jpeg",
    imageUrl: "https://najiba-haidari.github.io/weather-dashboard/",
    alt: "Weather Dashboard",
    language: "Javascript, Server-Side APIs",
  },
  {
    title: "Work Day Scheduler",
    imagePath: "/najiba-portfolio/images/scheduler.png",
    imageUrl: "https://github.com/Najiba-Haidari/week5-daily-scheduler",
    alt: "Work Day Scheduler",
    language: "Javascript, Third Party APIs",
  },
  {
    title: "Password Generator",
    imagePath: "/najiba-portfolio/images/password-generator.png",
    imageUrl: "https://github.com/Najiba-Haidari/week3-challenge-password-generator",
    alt: "Password Generator",
    language: "Javascript",
  },
];

export default function Porfolio() {

  return (
    <div className="my-4 py-5 ">
      <h1 className="text-center animate__animated animate__bounceInDown" style={styles.heading}>My Portfolio</h1>
      <div className="container ">
        <div className="d-flex flex-wrap justify-content-evenly m-2 p-4 animate__animated animate__bounceInUp">
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

