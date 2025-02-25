import React from 'react'

const ResumeCard = ({title, subTitle, result, des, de, d,di}) => {
  return (
    <div className="w-full h-auto group flex">
      <div className="w-12 h-[8px] bgOpacity mt-20 relative">
        <span className="absolute w-6 h-6 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-4 h-4 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-80 hover:bg-opacity-30 duration-300 rounded-xl p-6 md:p-12 flex flex-col justify-center gap-8 md:gap-12 shadow-shadowOne">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 md:items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-base mt-3 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-6 py-3 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-base font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-base md:text-lg font-medium text-gray-700 group-hover:text-gray-300 duration-300 leading-relaxed">
          {des}<br />
          {de}<br />
          {d}<br />
          {di}<br />
        </p>
      </div>
    </div>
  );
}

export default ResumeCard;
