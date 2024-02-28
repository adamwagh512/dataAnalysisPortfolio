import React from "react";
import home_image from "../../public/assets/home_image.png";
import md_home from "../../public/assets/md_home.png"
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const main = () => {
  return (
    <div id="home" className="flex flex-wrap py-20">
    <div className="flex justify-center">
        <Image className="hidden justify-center md:flex h-[70] w-[80vw]" src={md_home} alt="" />
    </div>
      <div className="md:hidden">
        <Image className="w-100vw" src={home_image} alt="/" width={1000} />
      </div>
      <div className="w-[100vw] md:hidden">
        <p className="font-bold text-2xl">Eager to Analyze, Ready to Excel: </p>
        <p className="font-bold xl:text-5xl md:text-2xl 2xl:tracking-wide 2xl:leading-loose">
          Welcome to My Data Analyst Journey
        </p>
        <br />
        <p className="text-xl leading-loose tracking-wide">
          Welcome! I'm thrilled to have you join me on my data analyst journey.
          As an aspiring data analyst, I am driven by a passion for unraveling
          insights hidden within datasets and translating them into actionable
          solutions. With a keen eye for detail and a hunger for continuous
          learning, I am committed to honing my analytical skills and making
          meaningful contributions to the ever-evolving field of data analysis.
          Join me as I navigate through datasets, unlock valuable insights, and
          strive for excellence in every analysis.
        </p>
      </div>
    
        <div className="flex items-center justify-around my-10 md:mx-10 w-full sm:w-[80%]">
        <div className="text-xs text-center ">
          <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
           <a href="https://www.linkedin.com/in/adam-wagh/">
            <FaLinkedinIn color="#033E8C" size={25} />
            </a>
          </div>
          LinkedIn
          </div>
          
        <div>
          <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
            <a href="mailto:adamwagh@gmail.com">
            <MdOutlineEmail color="#033E8C" size={25} />
            </a>
          </div>
          <p className="text-xs text-center">Email</p>
          </div>
          <div>
          <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
          <Link href='/assets/documents/AdamWagh_DataResume.pdf' download target="_blank">
            <BsPersonLinesFill color="#033E8C" size={25} />
          </Link>
          </div>
          <p className="center text-xs">Resume</p>
          </div>

          
        </div>
      </div>
    
  );
};

export default main;
