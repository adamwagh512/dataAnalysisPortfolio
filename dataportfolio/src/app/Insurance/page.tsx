import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Insurance3 from "../../../public/assets/insurance3.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            src={Insurance3}
            alt="/"
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <p className="py-2 text-2xl font-bold">
              Medical Insurance Database Analysis
            </p>
            <p className="font-bold">Python</p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="">Project</p>
            <p className="font-bold text-2xl">Overview</p>
            <p className="py-10">
            This project marked my inaugural Python analysis undertaken during the Codecademy Python course, where I was tasked with delving into health insurance costs. Beginning with a database provided, I meticulously cleaned and organized the data before proceeding to compare customer health insurance costs across various factors. Despite its challenges, such as navigating new technologies and managing complex datasets, this project provided an invaluable opportunity for personal growth. I learned the importance of patience and attention to detail in data cleaning and organization, as well as the significance of clear communication in presenting insights effectively. Through this analysis, I gained a deeper understanding of the multifaceted influences on insurance premiums, offering valuable insights for individuals and insurers to make informed decisions about healthcare coverage.
            </p>
            <a href="https://github.com/adamwagh512/us_medical_insurance/blob/main/python-portfolio-project-starter-files/us-medical-insurance-costs.ipynb" target="_blank">
            <button className="bg-[#80F2E7] rounded-lg text-black px-5 py-3 mt-4 mr-8">
              View Github Repo
            </button>
           </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-800 rounded-xl p-4">
            <div className="p-2">
              <p>Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-white py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Python</p>
                <p className="text-white py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Jupyter Notebook</p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;