import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Store from "../../../public/assets/store.jpg";
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
            src={Store}
            alt="/"
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <p className="py-2 text-2xl font-bold">
              Superstore Dashboard
            </p>
            <p className="font-bold">Tableau</p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="">Project</p>
            <p className="font-bold text-2xl">Overview</p>
            <p className="py-10">
This project marked my initial exploration into utilizing Tableau's story feature, representing a significant step forward in my data visualization journey. In addition to employing this innovative storytelling tool, the project encompasses several dynamic dashboards aimed at providing comprehensive insights into furniture superstore sales. These dashboards include detailed sales reports categorized by state, monthly sales summaries, and an exploratory dashboard designed to uncover hidden patterns and trends within the dataset. Through meticulous analysis of the sales data, valuable insights were unearthed, shedding light on evolving customer preferences and market dynamics. Leveraging these data-driven insights, a compelling case was made for the establishment of a new distribution center, underscoring the transformative potential of strategic decision-making informed by thorough data analysis.
            </p>
            <a href="https://public.tableau.com/app/profile/adam.wagh/viz/AnalysisofSuperstoreDataset/SalesReport" target="_blank">
            <button className="bg-[#80F2E7] rounded-lg text-black px-5 py-3 mt-4 mr-8">
              View Project
            </button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-800 rounded-xl p-4">
            <div className="p-2">
              <p>Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-white py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Tableau</p>
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