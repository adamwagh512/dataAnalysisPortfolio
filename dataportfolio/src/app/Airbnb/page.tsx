import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Nyc from "../../../public/assets/nyc.jpg";
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
            src={Nyc}
            alt="/"
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <p className="py-2 text-2xl font-bold">
              NYC Airbnb Analysis
            </p>
            <p className="font-bold">Tableau</p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="">Project</p>
            <p className="font-bold text-2xl">Overview</p>
            <p className="py-10">
            An analysis was conducted on Airbnb data from New York City listings, resulting in the creation of a Tableau dashboard equipped with cascading filters. Users can conveniently filter by room type, zip code, reviews, and cost, facilitating a tailored exploration of accommodation options to swiftly find an Airbnb that fits their needs. Throughout this project, I gained valuable insights into data visualization techniques and dashboard design principles. I learned the importance of user-centric design and the power of interactive features in enhancing the user experience. Additionally, the process of cleaning and preparing the data taught me valuable lessons about data integrity and the importance of thorough data validation. Overall, this project provided an enriching experience that deepened my understanding of data analysis and visualization, while also highlighting the importance of usability and data quality in dashboard development.
            </p>
            <a href="https://public.tableau.com/app/profile/adam.wagh/viz/AirbnbNYCDataExplorationDashboard_17068287009710/AirbnbNYCDataExplorationDashboard" target="_blank">
            <button className="bg-[#80F2E7] rounded-lg text-black px-5 py-3 mt-4 mr-8">
              View Dashboard
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