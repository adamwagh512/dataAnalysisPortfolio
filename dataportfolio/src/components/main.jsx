import React from 'react'
import home_image from '../../public/assets/home_image.png'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const main = () => {
  return (
    
    <div className='flex flex-wrap py-20'>
        <div className='w-[100vw] md:w-[50vw]'>
            <Image className='w-100vw' src={home_image} alt='/' width={1000} />
        </div>
        <div className='w-[100vw] md:w-[50vw] 2xl:py-5'>
            <p className='font-bold xl:text-5xl md:text-2xl 2xl:tracking-wide 2xl:leading-loose'>Eager to Analyze, Ready to Excel: </p>
            <p className='font-bold xl:text-5xl md:text-2xl 2xl:tracking-wide 2xl:leading-loose'>Welcome to My Data Analyst Journey</p>
            <br />
            <p className='lg:text-xl xl:text-2xl 2xl:text-4xl lg:tracking-wide lg:leading-loose'>Welcome! I'm thrilled to have you join me on my data analyst journey. As an aspiring data analyst, I am driven by a passion for unraveling insights hidden within datasets and translating them into actionable solutions. With a keen eye for detail and a hunger for continuous learning, I am committed to honing my analytical skills and making meaningful contributions to the ever-evolving field of data analysis. Join me as I navigate through datasets, unlock valuable insights, and strive for excellence in every analysis.</p>
            <div>
            <div className="flex items-center justify-between my-10 md:mx-10 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
                  <FaLinkedinIn color="#033E8C" size={25} />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
                  <MdOutlineEmail color="#033E8C" size={25} />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
                  <BsPersonLinesFill color="#033E8C" size={25} />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
                  <BsPersonLinesFill color="#033E8C" size={25} />
                </div>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default main