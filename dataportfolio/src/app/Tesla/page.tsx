import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Stock from "../../../public/assets/stock.jpg";
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
            src={Stock}
            alt="/"
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <p className="py-2 text-2xl font-bold">
            Tesla Stock Candlestick Chart
            </p>
            <p className="font-bold">Tableau</p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="">Project</p>
            <p className="font-bold text-2xl">Overview</p>
            <p className="py-10">
            In my exploration of Tesla stock data, I embarked on creating my first candlestick chart, aiming to delve into the stock&apos;s price fluctuations, trends, and the overarching market sentiment over a substantial timeframe. This project served as a significant milestone in my journey as a data analyst, marking my initiation into the realm of candlestick charting and offering valuable insights into enhancing data visualization techniques. Through this endeavor, I discovered innovative approaches to amplify the clarity and interpretability of financial data, solidifying my understanding of effective visualization practices. Reflecting on this experience, I realized the importance of continuous learning and experimentation in refining my skills as a data analyst.
            </p>
            <a href="https://public.tableau.com/app/profile/adam.wagh/viz/TSLAStockCandlestickChart/TSLACandlestickChart" target="_blank">
            <button className="bg-[#80F2E7] rounded-lg text-black px-5 py-3 mt-4 mr-8">
              View Stock Chart
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