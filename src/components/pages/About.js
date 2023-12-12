import React from "react";
import "../../styles/About.css";
import "animate.css";

export default function About() {
  return (
    <>
      <div className="body text-start container w-50 h-100" style={{height: '76vh', paddingTop: '90px', marginTop:'40px'}}>
        <h1 className="heading animate__animated animate__backInRight p-3">About Me</h1>
        <img className="image rounded-circle d-block animate__animated animate__rotateIn" src="/najiba-portfolio/images/najibah.jpeg" alt="najiba" />
        <p className="content animate__animated animate__backInLeft">
        I'm Najiba Haidari. I'm a passionate coder who chose to pursue a coding and full-stack bootcamp. Ever since my college years, I've had a deep love for coding. Prior to this career switch, I gained 10 years of valuable experience in administrative roles, and I hold a bachelor's degree in finance.
        With my strong background in administration and finance, I bring a unique perspective to my coding journey. I have completed coding bootcamp, fully dedicated to honing my skills in full-stack development.
        </p>
        <p className="content animate__animated animate__backInLeft">
        Collaboration, effective communication, and continuous learning are at the core of my approach. I thrive in diverse team environments, adapt to project requirements, and stay up to date with the latest industry trends.       
         </p>
         <p className="content animate__animated animate__backInLeft">
         I am excited about the opportunities that lie ahead as I combine my administrative expertise with my passion for coding. Let's connect and create something amazing together!         </p>
      </div>

    </>
  );
}
