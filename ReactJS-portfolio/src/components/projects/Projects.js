import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Website"
          des="Experience seamless web interactions with our project, blending HTML, CSS, and JavaScript to create intuitive and dynamic website experiences tailored to your needs."
          src={projectOne}
        />
        <ProjectsCard
          title="Snake Game"
          des="Dive into the classic fun with our Snake Game project, a dynamic fusion of HTML, CSS, JavaScript, and Node.js. 
          Experience retro gaming excitement in a modern, interactive web environment."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="Engage in real-time communication with our React-powered Chat App, seamlessly merging modern design with 
          cutting-edge functionality for an immersive messaging experience."
          src={projectTwo}
        />
        <ProjectsCard
          title="BANKING APPLICATION"
          des="Explore the future of banking with our Python-powered Banking Application, delivering secure transactions, robust account management, 
          and seamless user experiences for financial empowerment."
          src={projectThree}
        />
        <ProjectsCard
          title="Financial Calculator"
          des="Unlock financial insights with our Python-powered Financial Calculator, enabling precise calculations for investments, loans, 
          and savings to empower informed financial decisions."
          src={projectFour}
        />
        <ProjectsCard
          title="Random Password"
          des="Generate secure passwords effortlessly with our Java-based Random Password Generator, 
          ensuring robust online security for users and systems alike."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects