import React from "react";
import updatedphoto from "../../public/assets/updatedphoto2.png";
import Image from "next/image";

const about = () => {
  return (
    <div id="about" className="w-[100vw] bg-[#023059]">
      <br className="mx-10" />
      <p className="text-4xl font-bold py-10 my-3">About Me</p>
      <div className="flex flex-col items-center md:flex-row py-4 px-4 md:tracking-widest md:leading-loose md:items-start md:text-xl">
        <Image className="" src={updatedphoto} />
        <p className="py-5 px-4 md:py-0">
          With nearly a decade of frontline experience as a paramedic, I&apos;ve
          cultivated a unique skill set that seamlessly transitions into the
          realm of data analysis. My time in emergency response has endowed me
          with the ability to maintain composure under pressure, make decisive
          yet well-informed choices, and adeptly adapt to swiftly changing
          circumstances. In the high-stakes environment of emergency care,
          meticulous attention to detail isn&apos;t just a preference – it&apos;s a
          life-saving imperative. This exacting standard naturally extends to my
          approach to data analysis, where precision and accuracy are paramount
          for deriving meaningful insights. As I pivot towards data analysis, I
          intend to harness my quantitative proficiency, analytical acumen, and
          unwavering attention to detail to unearth actionable insights and
          steer informed decision-making across diverse industries.
        </p>
      </div>
    </div>
  );
};

export default about;
