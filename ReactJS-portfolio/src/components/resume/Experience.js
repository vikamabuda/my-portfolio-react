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
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Junior Software Developer"
            subTitle="Global Employment Challenge- (02/2024 - Present)"
            result="RSA"
            des="Developing and optimizing backend services using FastAPI and PostgreSQL."
            de="Writing scalable, maintainable, and clean code following best practices. "
            d="Executing SQL scripts to manage data integrity and system configurations."
            di="Participating in code reviews to ensure adherence to best practices."

           
          />
         <ResumeCard
            title="Junior Software Developer"
            subTitle="Younglings- (01/2024 - 02/2024)"
            result="RSA"
            des="Developed and maintained web applications using React and Node.js."
            de="Assisted in debugging and troubleshooting security-related issues in web applications."
            d="Integrated third-party APIs while ensuring security compliance."
          />
           <ResumeCard
            title="Software developer intern"
            subTitle="Capaciti tech Accelerator - (07/2023 - 01/2024)"
            result="RSA"
            des="Assisted in building secure web applications using Python and JavaScript."
            de="Gained hands-on experience in SQL database security best practices."
            d="Learned fundamental principles of Agile development, version control, and DevSecOps."
          />
        </div>
      </div>
      <div>
        
      </div>
    </motion.div>
  );
};

export default Experience;
