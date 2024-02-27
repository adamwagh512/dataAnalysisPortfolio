import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Bike2 from "../../../public/assets/bike2.png";
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
            src={Bike2}
            alt="/"
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <p className="py-2 text-2xl font-bold">
              Cyclistic Rideshare Analysis
            </p>
            <p className="font-bold">R Studio</p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="">Project</p>
            <p className="font-bold text-2xl">Overview</p>
            <p className="py-10">
            This comprehensive analysis, serving as the capstone project for my Google Data Analytics certificate, not only marked the culmination of my rigorous training but also provided invaluable lessons in the practical application of data analysis techniques, including the crucial aspect of data cleaning. Leveraging R and various packages, I meticulously navigated complex datasets, addressing data inconsistencies and outliers to ensure the integrity and reliability of the analysis. Through this process, I gained insights into data cleaning practices, data interpretation, visualization, and strategic decision-making, culminating in the formulation of three strategic recommendations aimed at enhancing membership conversion rates within the biking community.
            </p>
            <a href="https://www.kaggle.com/code/adamwagh/cyclistic-case-study" target="_blank">
            <button className="bg-[#80F2E7] rounded-lg text-black px-5 py-3 mt-4 mr-8">
              View Analysis
            </button>
            </a>
            
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-800 rounded-xl p-4">
            <div className="p-2">
              <p>Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-white py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>R Studio</p>
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
