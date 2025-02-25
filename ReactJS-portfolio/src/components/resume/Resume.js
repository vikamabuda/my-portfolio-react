import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[5px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="" des="My Resume" />
      </div>

      {/* Navigation Bar */}
      <div className="w-full max-w-[1200px] mx-auto">
        <ul className="w-full grid grid-cols-3 text-center border-b-2 border-gray-700">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
            }}
            className={`${
              educationData ? 'border-b-4 border-designColor bg-opacity-80' : 'border-transparent'
            } flex-1 text-lg font-semibold cursor-pointer py-4`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
            }}
            className={`${
              skillData ? 'border-b-4 border-designColor bg-opacity-80' : 'border-transparent'
            } flex-1 text-lg font-semibold cursor-pointer py-4`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
            }}
            className={`${
              experienceData ? 'border-b-4 border-designColor bg-opacity-80' : 'border-transparent'
            } flex-1 text-lg font-semibold cursor-pointer py-4`}
          >
            Experience
          </li>
        </ul>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-[1200px] mx-auto mt-10">
        {educationData && <Education />}
        {skillData && <Skills />}
        {experienceData && <Experience />}
      </div>
    </section>
  );
};

export default Resume;

