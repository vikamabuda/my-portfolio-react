import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="IT Technician"
            subTitle="FILM AFRIKA ZULU- (11/2022 - 12/2022)"
            result="RSA"
            des="Performed troubleshooting to correct computer hardware
            and software malfunctions"
            de="Maintaining office PCs, networks and mobile devices "
            d="Set up PCs, projectors and microphones for use in video
            conferencing rooms"
          />
         <ResumeCard
            title="Software developer intern"
            subTitle="Capa - (06/2023 - present)"
            result="RSA"
            des="FRONT END DEVELOPMENT(HTML, CSS)"
            de="FRAMEWORKS AND LIBRARIES(NODE JS, REACT JS)"
            d="BACK END DEVELOPMENT(PYTHON, JAVA)"
          />
        </div>
      </div>
      <div>
        
      </div>
    </motion.div>
  );
};

export default Experience;
