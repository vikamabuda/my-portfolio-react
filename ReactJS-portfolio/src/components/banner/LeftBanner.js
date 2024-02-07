import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Web Developer.", "Full Stack Developer.", "Software Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vika Mabuda</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Enthusiastic computer science graduate with a 
        strong foundation in data structures, algorithms,
        and various programming languages. Experienced
        in both front end and back end development with
        exposure to version control tools like Git. Adept at
        troubleshooting hardware and software issues. 
        Eager to contribute to a dynamic team, learn new 
        technologies, and enhance software development 
        processes
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner