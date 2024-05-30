import React from "react";

export default function Resume(props) {
  // const [frontEnd, setFrontEnd] = useState(["HTML", "CSS", "Javascript", "JQuery", "Responsive Design", "React", "Bootstrap"]);
  // const [backEnd, setBackEnd] = useState(["APIs", "Node","Express", "MySQL, Sequelize", "MongoDB, Mongoose", "REST", "GraphQL"]);
  const frontEnd = [
    "React.js",
    "Javascript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Fundamental Java",
    "Responsive Design",
  ];
  const backEnd = [
    "APIs",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "Git",
    "GraphQL",
  ];

  const frontendSkills = frontEnd.map((skill) => <li className="px-4 mx-4">{skill}</li>);
  const backendSkills = backEnd.map((skill) => <li className="px-4 mx-4">{skill}</li>);

  return (
   <div className="resume " id="resume" style={{height: '90vh', paddingTop: '80px', marginTop: '40px'}}>
    <div className="container">
      <p className="text-center p-5 fs-3 ">
        Download my Resume {''}
        <a href="./resume/Najiba-Haidari_Resume_Activatework-05082024.pdf" rel="noreferrer" target="_blank" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="red"
            class="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
        </a>
      </p>
      <div className="text-start ">
      <h3 className="resume-heading text-warning">Front-end Proficiencies</h3>
      <ul className="list-group p-3">
        {/* {props.frontEnd.map((skill, index) => (
          <li className="list-group-item" key={index}>{skill}</li>
        ))} */}
        {frontendSkills}
      </ul>
</div>
<div className="text-start">
      <h3 className="resume-heading text-warning">Back-end Proficiencies</h3>
      <ul className="list-group p-3">
        {/* {props.backEnd.map((skill, index) => (
          <li className="list-group-item" key={index}>{skill}</li>
        ))} */}
        {backendSkills}
      </ul>
      </div>
    </div>
    </div>
  );
}
